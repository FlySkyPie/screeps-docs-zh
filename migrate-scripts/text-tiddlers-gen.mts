import path from 'node:path';
import { glob } from 'glob';
import { copy, ensureFile, readFile, writeFile } from 'fs-extra';
import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkFrontmatter from 'remark-frontmatter'
import remarkStringify from 'remark-stringify'
import yaml from 'js-yaml'

/**
 * Get all markdown files (`.md`) under current workspace.
 * Recursively search folders.
 * The process would ignore stuff in `.gitignore`.
 */
export const getFiles = async (rootPath: string): Promise<string[]> => {
    // Read .gitignore file
    let gitignorePatterns: string[] = [];
    try {
        const gitignoreContent = await readFile('.gitignore', 'utf8');
        gitignorePatterns = gitignoreContent
            .split('\n')
            .map(line => line.trim())
            .filter(line => line.length > 0 && !line.startsWith('#'));
    } catch (error) {
        // If .gitignore doesn't exist, use empty array
        gitignorePatterns = [];
    }

    // Get all .md files recursively
    const mdFiles = await glob('**/*.md', { cwd: rootPath, nodir: true });

    // Filter out files that match .gitignore patterns
    const filteredFiles = mdFiles.filter(file => {
        // Check if file matches any gitignore pattern
        return !gitignorePatterns.some(pattern => {
            // Handle patterns that end with / (directories)
            if (pattern.endsWith('/')) {
                return file.startsWith(pattern);
            }

            // Handle patterns with wildcards
            const regexPattern = pattern
                .replace(/[.*+?^${}()|\[\]\/\\]/g, '\\$&')
                .replace(/\*/g, '.*')
                .replace(/\?/g, '.');

            return new RegExp(`^${regexPattern}$`).test(file);
        });
    });

    // Return relative paths (as obtained from glob)
    return filteredFiles;
}

const migrate = async (sourceRootPath: string, targetRootPath, files: string[]) => {
    for (let index = 0; index < files.length; index++) {
        const file = files[index];
        const sourcePath = path.resolve(sourceRootPath, file);
        const targetPath = path.resolve(targetRootPath, file);
        const metaPath = targetPath + ".meta";

        // Read source file content
        const sourceContent = await readFile(sourcePath, 'utf8');

        const res = unified()
            .use(remarkParse)
            .use(remarkFrontmatter, ['yaml'])
            .use(() => (tree, vFile) => {
                console.log(tree)
                // unist-util-visit 提供了更多便捷訪問AST的工具，這裡我們先簡單獲取
                const node = tree.children.find(n => n.type == 'yaml')
                if (node) {
                    // 使用yaml解析器解析yaml格式字串
                    const meta = yaml.load(node.value)
                    // { title: 'I AM TITLE', tags: [ 'unified', 'good' ] }
                    console.log(meta)
                    // 賦值到該檔案的解析資料中返回給外部使用
                    vFile.data.meta = meta
                }
            })
            .use(remarkStringify)
            .processSync(sourceContent)

        /**
         * Extract title from YAML front matter
         * @todo Replace this implementation with AST approach.
         */
        const yamlMatch = sourceContent.match(/^---\s*\n(.*?)\n---\s*\n(.*)$/s);
        let title = "";
        let contentWithoutYaml = sourceContent;

        if (yamlMatch) {
            const yamlFrontMatter = yamlMatch[1];
            const content = yamlMatch[2];

            // Extract title from YAML front matter
            const titleMatch = yamlFrontMatter.match(/title:\s*(.+)/);
            if (titleMatch) {
                title = titleMatch[1].trim();
            }

            // Use content without YAML front matter
            contentWithoutYaml = content;
        } else {
            // If no YAML front matter, try to extract title from first heading
            const headingMatch = sourceContent.match(/^#\s+(.+)/);
            if (headingMatch) {
                title = headingMatch[1].trim();
            }
        }

        await ensureFile(targetPath);

        // Write content without YAML front matter to target file
        await writeFile(targetPath, contentWithoutYaml, 'utf8');

        // Generate current timestamp in format: YYYYMMDDHHMMSSmmm
        const now = new Date();
        const year = now.getFullYear();
        const month = String(now.getMonth() + 1).padStart(2, '0');
        const day = String(now.getDate()).padStart(2, '0');
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        const milliseconds = String(now.getMilliseconds()).padStart(3, '0');
        const timestamp = `${year}${month}${day}${hours}${minutes}${seconds}${milliseconds}`;

        const metaContent =
            `created: ${timestamp}\n` +
            `modified: ${timestamp}\n` +
            "tags: knowledge\n" +
            `title: ${title}\n` +
            "type: text/markdown";

        await ensureFile(metaPath);
        await writeFile(metaPath, metaContent, 'utf8');
    }

}

const files = await getFiles("./raw-md/docs");
await migrate("./raw-md/docs", "./tiddlers/docs", files);

const apiFiles = await getFiles("./raw-md/api");
await migrate("./raw-md/api", "./tiddlers/api", apiFiles);
