importScripts("/precache-manifest.ddd5f45bf3d666e8d0efb8ce315a6609.js", "https://storage.googleapis.com/workbox-cdn/releases/3.2.0/workbox-sw.js");

workbox.skipWaiting()
workbox.clientsClaim()

// 设置缓存名称前缀
workbox.core.setCacheNameDetails({
  prefix: 'vuecli'
})

// 缓存manifest.json
workbox.routing.registerRoute(
  /\/manifest\.json/,
  workbox.strategies.staleWhileRevalidate()
)

// sw-register网络请求优先
workbox.routing.registerRoute(
  /\/sw-register\.js/,
  workbox.strategies.networkOnly()
)

workbox.precaching.precacheAndRoute(self.__precacheManifest || [])

