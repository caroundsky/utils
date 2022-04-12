import { KeyMap } from "../interfaces"
/**
 * URL 参数 转换成对象
 * @param {*} url 网址
 * @return {Object} 对象
 */
const formatUrl = (url: string) => {
  let params = url.split("?")[1]
  let param = params.split("&")
  let obj: KeyMap = {}
  for (let i = 0; i < param.length; i++) {
    let paramsA = param[i].split("=")
    let keyA = paramsA[0]
    let value = paramsA[1]
    if (obj[keyA]) {
      obj[keyA] = Array.isArray(obj[keyA]) ? obj[keyA] : [obj[keyA]]
      obj[keyA].push(value)
    } else {
      obj[keyA] = value
    }
  }
  return obj
}

export default formatUrl
