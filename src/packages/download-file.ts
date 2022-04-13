import Axios, { AxiosRequestConfig } from 'axios'
interface DownLoadConfig {
  config: AxiosRequestConfig
  fileName?: string
  suffix?: string
  errReg: RegExp
}

export default function downLoadFile(
  options: DownLoadConfig = {
    config: {},
    suffix: 'xlsx',
    errReg: /"msg":/gi,
  }
) {
  const { config, fileName, suffix, errReg } = options
  return new Promise<void>((resolve, reject) => {
    Axios({
      method: 'post',
      responseType: 'blob',
      withCredentials: true,
      ...config,
    })
      .then(async (res) => {
        const { headers, data, status } = res
        if (status !== 200) return reject(res)

        let _fileName = ''
        if (fileName) {
          _fileName = `${fileName}.${suffix}`
        } else {
          const disposition = headers['content-disposition']
          if (disposition && disposition.indexOf('attchement') !== -1) {
            let filenameRegex = /filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/
            let matches = filenameRegex.exec(disposition)
            if (matches != null && matches[1]) {
              _fileName = decodeURI(matches[1].replace(/['"]/g, ''))
            }
          }
        }

        const type = headers['Content-Type']
        const blob =
          new Blob([data], { type }) || new File([data], _fileName, { type })

        try {
          const content = await blob.text()
          if (errReg.test(content)) {
            res.data.msg = JSON.parse(content)
            return reject(res)
          }
        } catch (e) {
          alert(
            '您的浏览器版本太低，可能会导致导出失败，建议升级您的浏览器版本'
          )
        }

        const URL = window.URL || window.webkitURL
        const downloadUrl = URL.createObjectURL(blob)

        if (_fileName) {
          const a = document.createElement('a')
          // safari 还不支持 HTML a[download] 方式
          if (typeof a.download === 'undefined') {
            window.location.href = downloadUrl
          } else {
            a.href = downloadUrl
            a.download = _fileName
            document.body.appendChild(a)
            a.click()
            a.remove()
          }
        } else {
          window.open(downloadUrl)
        }
        setTimeout(() => URL.revokeObjectURL(downloadUrl), 100)

        resolve()
        console.log('ok')
      })
      .catch((err) => {
        return reject(err)
      })
  })
}
