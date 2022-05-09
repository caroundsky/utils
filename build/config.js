const fs = require("fs")
const path = require("path")
const fromPairs = require("lodash/fromPairs")

function getFilePath(prefixPath) {
  const files = fs.readdirSync(prefixPath)
  let entryFile
  entryFile = files.find((file) => /index\.(jsx?|tsx?)/.test(file))
  if (entryFile) {
    return path.join(prefixPath, entryFile)
  }
}

const componentPrefixPath = path.join(__dirname, "../src/packages")
const components = fromPairs(
  fs.readdirSync(componentPrefixPath).map((pkgName) => {
    if (pkgName.indexOf(".") > -1) {
      return [pkgName.split(".")[0], path.join(componentPrefixPath, pkgName)]
    } else {
      return [pkgName, getFilePath(path.join(componentPrefixPath, pkgName))]
    }
  })
)

module.exports = { components }
