import Redaxios from './redaxios'

export const setDefalut = (sourceData, defaultData) => {
  Object.keys(defaultData).forEach((key) => {
    if (!sourceData.hasOwnProperty(key)) {
      sourceData[key] = defaultData[key]
    }
  })
  return sourceData
}

export const sleep = (time) => {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve()
    }, time)
  })
}

export const isType = (type: string) => {
  return function (source: any) {
    return Object.prototype.toString.call(source) === `[object ${type}]`
  }
}

export const Axios = Redaxios
