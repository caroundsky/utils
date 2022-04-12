import download from './packages/download';
import formatUrl from './packages/format-url';
import zip from './packages/zip';
declare const components: {
    download: typeof download;
    formatUrl: (url: string) => import("./interfaces").KeyMap;
    zip: typeof zip;
};
export { download, formatUrl, zip };
export default components;
