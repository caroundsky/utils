type options = {
  /** id键名, 默认为id */
  id: string

  /** 父 id键名, 默认为pId */
  pId: string

  /** child键名, 默认为child */
  child: string
}

/**
 * 数组转树
 * @param {Array<any>} arr 源数组
 * @param {} options 配置项
 */
export default function arrToTree(
  arr: Array<any>,
  { id = 'id', pId = 'pId', child = 'child' } = {} as options
) {
  const res = []
  const map = arr.reduce((res, item) => {
    res[item[id]] = item
    return res
  }, {})
  for (const item of Object.values(map)) {
    if (!item[pId]) {
      res.push(item)
    } else {
      const parent = map[item[pId]]
      parent[child] = parent[child] || []
      parent[child].push(item)
    }
  }
  return res
}
