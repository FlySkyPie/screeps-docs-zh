import type {Literal, Node, Parent} from 'unist'
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
            .use(() => (tree: Parent, vFile) => {
                const node = tree .children.find(n => n.type == 'yaml')
                if (node) {
                    const meta = yaml.load((node as Literal).value);
                    vFile.data.meta = meta
                }
                console.log(vFile)
            })
            .use(remarkStringify)
            .processSync(sourceContent)


        const contentWithoutYaml = res.value;
        // console.log(res);

        const title="";

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

// const apiFiles = await getFiles("./raw-md/api");
// await migrate("./raw-md/api", "./tiddlers/api", apiFiles);
