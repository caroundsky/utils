interface config {
    url: string;
    doc?: Document;
    attrs?: Object;
}
/**
 * 异步插入js脚本
 *
 * @param {Dom} doc 插入节点，默认为document
 * @param {String} url js 地址
 * @param {String} attrs 额外添加属性
 * @return {Promise} 返回promise，可用 .then 处理加载成功后的回调
 */
export default function appendScript({ doc, url, attrs, }: config): Promise<any>;
export {};
