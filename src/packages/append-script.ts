interface config {
  url: string
  doc?: Document
  attrs?: Object
  callback?: Function
}

export default function appendScript({
  doc = document,
  url,
  attrs,
  callback,
}: config) {
  try {
    const $s = document.createElement("script")
    $s.src = url
    if (attrs) {
      Object.keys(attrs).forEach(function (key) {
        $s.setAttribute(key, attrs[key])
      })
    }

    if (typeof callback === "function") {
      $s.addEventListener("load", function () {
        callback(this)
      })
    }

    doc.body.appendChild($s)
  } catch (e) {
    console.log(e)
  }
}
