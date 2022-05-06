const path = require("path")
const shelljs = require("shelljs")
const program = require("commander")

const targetFile = path.resolve(__dirname, "./package.json")
const currentVersion = require(targetFile).version
const [mainVersion, subVersion, phaseVersion] = currentVersion.split(".")

// 默认版本号
const defaultVersion = `${mainVersion}.${subVersion}.${+phaseVersion + 1}`
let newVersion = defaultVersion

// 从命令行参数中取版本号
program.option("-v, --versions <type>", "Add release version number")
program.parse(process.argv)

if (program.versions) {
  newVersion = program.versions
}

function publish() {
  // 修改版本号
  shelljs.sed(
    "-i",
    `"version": "${currentVersion}"`,
    `"version": "${newVersion}"`,
    targetFile
  )
  // 发布
  //   shelljs.exec("npm publish")
}

publish()
