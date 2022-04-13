import downloadFile from './packages/download-file';
import formatUrl from './packages/format-url';
import zip from './packages/zip';
declare const components: {
    downloadFile: typeof downloadFile;
    formatUrl: (url: string) => import("./interfaces").KeyMap;
    zip: typeof zip;
};
export { downloadFile, formatUrl, zip };
export default components;
