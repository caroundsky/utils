const modules = {}

;(function updateModules() {
  // 查找当前目录下所有的非单元测试 js 文件
  const requireModule = require.context(
    ".",
    true,
    /^((?!index|\.unit\.).)*\.ts$/
  )
  requireModule.keys().forEach((fileName) => {
    const moduleDefinition = requireModule(fileName)

    // 拆分文件路径，并以驼峰格式存储各路径层次名至数组
    const modulePath = fileName
      .replace(/^\.\//, "")
      .replace(/\.\w+$/, "")
      .split(/\//)

    modules[modulePath] = moduleDefinition
  })
})()

export default modules
