interface config {
  url: string
  doc?: Document
  attrs?: Object
}

export default function appendScript({ doc = document, url, attrs }: config) {
  try {
    return new Promise((resolve) => {
      const $s = document.createElement('script')
      $s.src = url
      if (attrs) {
        Object.keys(attrs).forEach(function (key) {
          $s.setAttribute(key, attrs[key])
        })
      }

      $s.addEventListener('load', function () {
        resolve(this)
      })

      doc.body.appendChild($s)
    })
  } catch (e) {
    console.log(e)
  }
}
