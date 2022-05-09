# 开发指南

- 入口文件通过`gen-entry.js`自动生成；
- 只需在`packages`内新增模块即可；
- 模块统一使用`export default`的方式进行导出；（为什么？因为生成入口文件的脚本中设计的模板并非按需引入）。

## 如何调试

推荐使用 [yalc](https://juejin.cn/post/7033400734746066957)

一边修改代码后 yalc publish ，另一边 yalc update 直接更新

或者本地调试，运行指令`npm run serve`
