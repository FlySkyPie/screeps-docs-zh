

import { readFile } from 'fs/promises';
import { join, resolve } from 'path';
import { promisify } from 'util';
import { glob } from 'glob';

const getFiles = async (): Promise<string[]> => {
    /**
     * Get all markdown files (`.md`) under current workspace.
     * Recursively search folders.
     * The process should ignore stuff in .gitignore
     */
    
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
    const mdFiles = await glob('**/*.md', { cwd: '.', nodir: true });
    
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

    /**
     * @todo Return relative path.
     */
    
    // Return absolute paths
    return filteredFiles.map(file => resolve(file));
}

console.log(await getFiles());
