import appendScript from './packages/append-script';
import downloadFile from './packages/download-file';
import filesZip from './packages/files-zip';
import formatUrl from './packages/format-url';
declare const components: {
    appendScript: typeof appendScript;
    downloadFile: typeof downloadFile;
    filesZip: typeof filesZip;
    formatUrl: (url: string) => import("./interfaces").KeyMap;
};
export { appendScript, downloadFile, filesZip, formatUrl };
export default components;
