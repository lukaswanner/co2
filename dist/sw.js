if (!self.define) {
  const e = (e) => {
      "require" !== e && (e += ".js")
      let r = Promise.resolve()
      return (
        s[e] ||
          (r = new Promise(async (r) => {
            if ("document" in self) {
              const s = document.createElement("script")
              ;(s.src = e), document.head.appendChild(s), (s.onload = r)
            } else importScripts(e), r()
          })),
        r.then(() => {
          if (!s[e]) throw new Error(`Module ${e} didn’t register its module`)
          return s[e]
        })
      )
    },
    r = (r, s) => {
      Promise.all(r.map(e)).then((e) => s(1 === e.length ? e[0] : e))
    },
    s = { require: Promise.resolve(r) }
  self.define = (r, i, c) => {
    s[r] ||
      (s[r] = Promise.resolve().then(() => {
        let s = {}
        const d = { uri: location.origin + r.slice(1) }
        return Promise.all(
          i.map((r) => {
            switch (r) {
              case "exports":
                return s
              case "module":
                return d
              default:
                return e(r)
            }
          })
        ).then((e) => {
          const r = c(...e)
          return s.default || (s.default = r), s
        })
      }))
  }
}
define("./sw.js", ["./workbox-b710a8b6"], function(e) {
  "use strict"
  self.addEventListener("message", (e) => {
    e.data && "SKIP_WAITING" === e.data.type && self.skipWaiting()
  }),
    e.precacheAndRoute(
      [
        {
          url: "css/app.bff48d19.css",
          revision: "dfda59664c0ee7597e44578278de2ec1",
        },
        { url: "favicon.ico", revision: "5441fb91cc8e3dafd1898a74d3da7965" },
        { url: "favicon2.ico", revision: "1ba2ae710d927f13d483fd5d1e548c9b" },
        {
          url: "img/background.fb3d87f3.jpg",
          revision: "fb3d87f3f3b6878c778e52ae70802100",
        },
        {
          url: "img/car.d66f6071.svg",
          revision: "d66f6071ec15c78e0f0f6db365ca4c4a",
        },
        {
          url: "img/icons/safari-pinned-tab.svg",
          revision: "4e857233cbd3bb2d2db4f78bed62a52f",
        },
        {
          url: "img/logo.227531ea.svg",
          revision: "227531ea26e252b27f57ee131192574d",
        },
        { url: "index.html", revision: "0b317de3d19aceab4b4ee3300c4cf57d" },
        {
          url: "js/about.253752f4.js",
          revision: "e839ca3a46b4c29da1e27f9ad09f824a",
        },
        {
          url: "js/app.503024de.js",
          revision: "000e343d211587cc4435b2701fc71d63",
        },
        {
          url: "js/chunk-vendors.f274af51.js",
          revision: "c1a4918354ef30642a00cc9783ddd56a",
        },
        { url: "logo.svg", revision: "ff27fe719ca0ca9d12b26dbc2cdca8bb" },
        {
          url: "precache-manifest.4742bf80aa28275cd9592db826b3a847.js",
          revision: "4742bf80aa28275cd9592db826b3a847",
        },
        {
          url: "service-worker.js",
          revision: "6097a688b0e57ef3f83a480dbf6a754e",
        },
      ],
      {}
    )
})
//# sourceMappingURL=sw.js.map
