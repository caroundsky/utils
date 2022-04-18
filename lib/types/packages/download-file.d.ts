import { AxiosRequestConfig } from 'axios';
interface DownLoadConfig {
    url: string;
    config: AxiosRequestConfig;
    fileName?: string;
    suffix?: string;
    errReg: RegExp;
}
export default function downLoadFile(options: DownLoadConfig): Promise<void>;
export {};
