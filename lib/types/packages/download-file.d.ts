import { AxiosRequestConfig } from 'axios';
interface DownLoadConfig {
    config: AxiosRequestConfig;
    fileName?: string;
    suffix?: string;
    errReg: RegExp;
}
export default function downLoadFile(options?: DownLoadConfig): Promise<void>;
export {};
