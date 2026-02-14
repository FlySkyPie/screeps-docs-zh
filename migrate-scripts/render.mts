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
     * @todo Split fileList into two array.
     * @todo One only containing files under `api/`, another one containing rest.
     */

    return {
        api: [],
        docs: [],
    };
};

const fileList = await getFiles();
const { api, docs } = await groupFiles(fileList);

await renderFiles(docs);
await renderFiles(api, "./api");
