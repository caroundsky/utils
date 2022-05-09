/**
 * prefix:每个文件下载路径前缀
 * fileName:压缩文件名
 * suffix:压缩文件后缀
 * fileList:压缩文件数组
 */
interface DownLoadConfig {
    prefix?: string;
    fileName?: string;
    suffix?: string;
    fileList: Array<{
        fileUrl: string;
        name?: string;
    }>;
}
export default function filesZip(options: DownLoadConfig): Promise<void>;
export {};
