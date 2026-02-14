import { ensureFile, readFile, writeFile } from 'fs-extra';
import Hexo from 'hexo';

import { getFiles } from "./translation.mts";
import path from 'node:path';

const renderFiles = async (fileList: string[], outputSubPath: string, subPath: string = ".") => {
    const hexo = new Hexo(path.resolve(process.cwd(), subPath), {});
    await hexo.init();

    hexo.config.GlobalObjects = hexo.config.GlobalObjects || [];
    hexo.config.Prototypes = hexo.config.Prototypes || [];

    try {
        await hexo.load();
    } catch (e) {
        console.warn("Skip error...", e);
    }

    for (let index = 0; index < fileList.length; index++) {
        const filePath = fileList[index];

        const content = await readFile(filePath, 'utf8');

        const renderedContent = await hexo.extend.tag.render(content, {
            path: filePath,
            page: {
                path: 'ConstructionSite.md',
                pages: hexo.locals.get('pages'),
            }
        });

        console.log(renderedContent)

        const outputPath = path.resolve(process.cwd(), 'output', outputSubPath, filePath);
        await ensureFile(outputPath);
        await writeFile(outputPath, renderedContent, 'utf8');
    }
};

/**
 * Split fileList into two arrays:
 * - One containing files under `api/`
 * - One containing all other files
 */
const groupFiles = async (fileList: string[]) => {
    const apiFiles: string[] = [];
    const docsFiles: string[] = [];

    for (const file of fileList) {
        if (file.includes('api/')) {
            apiFiles.push(file);
        } else {
            docsFiles.push(file);
        }
    }

    return {
        api: apiFiles,
        docs: docsFiles,
    };
};

const fileList = await getFiles();
const { api, docs } = await groupFiles(fileList);

await renderFiles(docs, 'docs');
await renderFiles(api, 'api', "./api");
