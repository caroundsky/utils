import { AxiosRequestConfig } from 'axios'
import { setDefalut, Axios } from '@/help'

interface DownLoadConfig extends AxiosRequestConfig {
  fileName?: string
  suffix?: string
  errMatch: string
}

const DEFAULT_VALUE = {
  suffix: 'xlsx',
  errMatch: '"msg',
}

export default function downLoadFile(url: string, options: DownLoadConfig) {
  const {
    fileName,
    suffix,
    errMatch,
    transformResponse,
    ...config
  } = setDefalut(options, DEFAULT_VALUE)
  config['headers'] = { Accept: 'application/json, text/plain, */*' }
  return new Promise<void>((resolve, reject) => {
    Axios({
      url,
      method: 'post',
      responseType: 'blob',
      withCredentials: true,
      validateStatus: (status) => {
        return [200].includes(status)
      },
      ...config,
    })
      .then(async (res: any) => {
        if (typeof transformResponse === 'function') {
          res = transformResponse(res)
        }
        const { headers, data, status } = res
        if (status !== 200)
          return reject({
            errMsg: res,
          })

        let _fileName = ''
        if (fileName) {
          _fileName = `${fileName}.${suffix}`
        } else {
          const disposition = headers.get('content-disposition')
          if (disposition && disposition.indexOf('attchement') !== -1) {
            let filenameRegex = /filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/
            let matches = filenameRegex.exec(disposition)
            if (matches != null && matches[1]) {
              _fileName = decodeURI(matches[1].replace(/['"]/g, ''))
            }
          }
        }

        try {
          const content = await data.text()
          if (JSON.stringify(content).indexOf(errMatch) > -1) {
            return reject({
              errMsg: content,
            })
          }
        } catch (e) {
          console.log(e)
          alert(
            '您的浏览器版本太低，可能会导致导出失败，建议升级您的浏览器版本'
          )
        }

        const URL = window.URL || window.webkitURL
        const downloadUrl = URL.createObjectURL(data)

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
      })
      .catch((err) => {
        return reject({
          errMsg: err,
        })
      })
  })
}
