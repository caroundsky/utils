declare type config = {
    /** 数据源 */
    data: object | Array<any>;
    /** 额外补充的空值枚举 */
    extraEum: string | boolean | number | Array<any>;
};
/**
 * 去除空值，默认空值枚举为 ['', undefined, null]
 * @param data 数据源
 * @param extraEum 额外补充的空值枚举
 */
export default function delEmpty(data: config['data'], extraEum?: config['extraEum']): any;
export {};
