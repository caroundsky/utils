import { isType } from '../help'

type config = {
  /** 数据源 */
  data: object | Array<any>

  /** 额外补充的空值枚举 */
  extraEum: string | boolean | number | Array<any>
}

let EMPTY_EUM: any[] = []
const isArray = isType('Array')
const isObject = isType('Object')

/**
 * 去除空值，默认空值枚举为 ['', undefined, null]
 * @param data 数据源
 * @param extraEum 额外补充的空值枚举
 */
export default function delEmpty(
  data: config['data'],
  extraEum?: config['extraEum']
) {
  EMPTY_EUM = ['', undefined, null]

  let _data = JSON.parse(JSON.stringify(data))

  if (extraEum) {
    if (isArray(extraEum)) EMPTY_EUM.push(...(extraEum as Array<any>))
    // @ts-ignore
    else EMPTY_EUM.push(extraEum)
  }

  return isEmpty(_data)
}

function isEmpty(data) {
  if (isArray(data)) {
    return data.reduce((result, cur, index) => {
      if (isArray(cur) || isObject(cur)) result.push(isEmpty(cur))
      else !EMPTY_EUM.includes(cur) && result.push(cur)
      return result
    }, [])
  }

  if (isObject(data)) {
    Object.keys(data).forEach((key) => {
      let target = data[key]
      if (isArray(target)) data[key] = isEmpty(target)
      if (EMPTY_EUM.includes(target)) delete data[key]
    })
    return data
  }
}
