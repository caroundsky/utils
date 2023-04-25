declare type options = {
    /** id键名, 默认为id */
    id: string;
    /** 父 id键名, 默认为pId */
    pId: string;
    /** child键名, 默认为child */
    child: string;
};
/**
 * 数组转树
 * @param {Array<any>} arr 源数组
 * @param {} options 配置项
 */
export default function arrToTree(arr: Array<any>, { id, pId, child }?: options): any[];
export {};
