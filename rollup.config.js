import typescript from 'rollup-plugin-typescript2'
// rollup 无法识别 node_modules 中的包，帮助 rollup 查找外部模块，然后导入
import resolve from 'rollup-plugin-node-resolve'
// 将 CommonJS 模块转换为 ES6 供 rollup 处理
import commonjs from 'rollup-plugin-commonjs'
// ES6 转 ES5，让我们可以使用 ES6 新特性来编写代码
import babel from 'rollup-plugin-babel'
// 删除之前构建的内容
import clear from 'rollup-plugin-clear'
import json from 'rollup-plugin-json'

import { uglify } from 'rollup-plugin-uglify'
import serve from 'rollup-plugin-serve'
import livereload from 'rollup-plugin-livereload'

const path = require('path')

const inputPath = path.resolve(__dirname, './src/index.ts')
const outputUmdPath = path.resolve(__dirname, './lib/utils.umd.js')
const outputEsPath = path.resolve(__dirname, './lib/utils.esm.js')
const outputCjsPath = path.resolve(__dirname, './lib/utils.cjs.js')

// 判断是是否为生产环境
const isPro = process.env.NODE_ENV === 'production'

export default {
  input: inputPath,
  output: [
    {
      file: outputUmdPath,
      format: 'umd', // umd、cjs、es
      name: 'Utils',
    },
    {
      file: outputEsPath,
      format: 'es',
    },
    {
      file: outputCjsPath,
      format: 'cjs',
    },
  ],
  plugins: [
    babel({
      exclude: 'node_modules/**',
    }),
    resolve({
      preferBuiltins: true,
      mainFields: ['browser', 'jsnext', 'module', 'main'],
      extensions: ['.js', '.ts'],
    }),
    commonjs(),
    clear({
      targets: ['lib'],
    }),
    typescript({
      exclude: 'node_modules/**',
      typescript: require('typescript'),
      useTsconfigDeclarationDir: isPro, // 自动生成types 声明
    }),
    json(),
    isPro && uglify(),
    // 热更新 默认监听根文件夹
    !isPro && livereload(),
    // 本地服务器
    !isPro &&
      serve({
        open: true, // 自动打开页面
        port: 8080,
        openPage: '/index.html', // 打开的页面
        contentBase: '',
      }),
  ],
}
