export const setDefalut = (sourceData, defaultData) => {
  Object.keys(defaultData).forEach((key) => {
    if (!sourceData.hasOwnProperty(key)) {
      sourceData[key] = defaultData[key]
    }
  })
  return sourceData
}
