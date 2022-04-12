import { KeyMap } from "../interfaces";
/**
 * URL 参数 转换成对象
 * @param {*} url 网址
 * @return {Object} 对象
 */
declare const formatUrl: (url: string) => KeyMap;
export default formatUrl;
