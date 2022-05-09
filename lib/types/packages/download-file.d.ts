import { AxiosRequestConfig } from "axios";
interface DownLoadConfig extends AxiosRequestConfig {
    fileName?: string;
    suffix?: string;
    errMatch: string;
}
export default function downLoadFile(url: string, options: DownLoadConfig): Promise<void>;
export {};
