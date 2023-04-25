import { AxiosRequestConfig } from 'axios';
interface DownLoadConfig extends AxiosRequestConfig {
    fileName?: string;
    suffix?: string;
    transformResponse?: () => {};
    errMatch: string;
}
/**
 * 导出文件
 *
 * @param {string} url 导出地址
 * @param {DownLoadConfig} options { fileName: 自定义文件名, suffix: 自定义后缀, transformResponse: 返回值转换, errMatch: 错误信息匹配关键字 }
 */
export default function downLoadFile(url: string, options: DownLoadConfig): Promise<void>;
export {};
