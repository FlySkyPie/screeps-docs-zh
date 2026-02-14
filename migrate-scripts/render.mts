import { readFile, writeFile } from 'node:fs/promises';
import Hexo from 'hexo';

import { getFiles } from "./translation.mts";
import path from 'node:path';

const renderFiles = async (fileList: string[], subPath: string = ".") => {
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

        // await writeFile(filePath, renderedContent, 'utf8');
    }
};

const groupFiles = async (fileList: string[]) => {
    /**
     * Split fileList into two arrays:
     * - One containing files under `api/`
     * - One containing all other files
     */

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

await renderFiles(docs);
await renderFiles(api, "./api");
