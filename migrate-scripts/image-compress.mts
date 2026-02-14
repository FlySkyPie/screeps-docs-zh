import { copy, readFile, remove, writeFile } from 'fs-extra';
import { glob } from 'glob';
import tmp from 'tmp';
import { CWebp } from 'cwebp'
import path from 'node:path';

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
    const mdFiles = await glob('**/*.png', { cwd: rootPath, nodir: true });

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

const convert = async (rootPath: string, files: string[]) => {
    for (let index = 0; index < files.length; index++) {
        const file = files[index];
        const sourcePath = path.resolve(rootPath, file);
        const tatgetPath = path.resolve(rootPath, file.replace(".png", ".webp"))

        const encoder = new CWebp(sourcePath);

        await encoder.write(tatgetPath);
        await remove(sourcePath);
    }

}

const files = await getFiles("./raw-assets/docs");
await convert("./raw-assets/docs", files);

const apiFiles = await getFiles("./raw-assets/api");
await convert("./raw-assets/api", apiFiles);
