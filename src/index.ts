import modules from "./modules"

const registerUtils = {}
// 自动执行每个模块的 init 方法
for (const moduleName of Object.keys(modules)) {
  registerUtils[moduleName] = modules[moduleName]
}
console.log(registerUtils)
export default registerUtils
