import path from 'node:path';

import { getFiles } from './image-compress.mts';
import { copy, writeFile } from 'fs-extra';

const migrate = async (sourceRootPath: string, targetRootPath, files: string[]) => {
    for (let index = 0; index < files.length; index++) {
        const file = files[index];
        const sourcePath = path.resolve(sourceRootPath, file);
        const targetPath = path.resolve(targetRootPath, file);
        const metaPath = targetPath + ".meta";

        /**
         * @todo Remove YAML head for target file. 
         */
        await copy(sourcePath, targetPath);

        /**
         * @todo Read title from YAML head of source file.
         */
        const title = "";

        /**
         * @todo Using current datetime, format: YYYYMMDDHHMMSSmmm
         */
        const metaContent =
            "created: 20231217062502892\n" +
            "modified: 20231217075647600\n" +
            "tags: knowledge\n" +
            `title: ${title}\n` +
            "type: text/markdown";

        await writeFile(metaPath, metaContent, 'utf8');
    }

}

const files = await getFiles("./raw-assets/docs");
await migrate("./raw-assets/docs", "./tiddlers/docs", files);

const apiFiles = await getFiles("./raw-assets/api");
await migrate("./raw-assets/api", "./tiddlers/api", apiFiles);
