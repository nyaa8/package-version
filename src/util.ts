import { create } from '@actions/glob';

interface PackageFile {
    version: string
}

const patterns = ['**/package.json', '!**/node_modules/'].join('\n');

export async function findPackageJson(followSymlinks: boolean): Promise<string> {
    const globber = await create(patterns, { followSymbolicLinks: followSymlinks });
    const files = await globber.glob();

    return files[0];
}

export async function extract(path: string): Promise<string> {
    return new Promise((resolve, reject) => {
        try {
            const packageFile: PackageFile = require(path);

            return resolve(packageFile.version);
        } catch {
            return reject(new Error('Invalid package.json format or path'));
        }
    });
}
