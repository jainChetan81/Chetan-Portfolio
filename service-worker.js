importScripts("precache-manifest.f7537c7e4de3cde299dbd43ac0e1f2a6.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

// workbox.precaching.precacheAndRoute(self.__precacheManifest);
// //?We’ll need update the service worker file and handle the SKIP_WAITING event such that it calls the skipWaiting:
// addEventListener("message", (event) => {
// 	if (event.data && event.data.type === "SKIP_WAITING") {
// 		skipWaiting();
// 	}
// });
const staticDevCoffee = "CHETAN PORTFOLIO";
const assets = ["/", "/template.html", "/styles/*", "/index.js", "/images/*"];
self.addEventListener("install", (installEvent) => {
	installEvent.waitUntil(
		caches.open(staticDevCoffee).then((cache) => {
			cache.addAll(assets);
		})
	);
});
self.addEventListener("fetch", (fetchEvent) => {
	fetchEvent.respondWith(
		caches.match(fetchEvent.request).then((res) => {
			return res || fetch(fetchEvent.request);
		})
	);
});

//? This will set up dynamic caching for any request URL that matches the URL https://api.exchangeratesapi.io/latest.
// workbox.routing.registerRoute(
//     /https:\/\/api\.exchangeratesapi\.io\/latest/,
//     new workbox.strategies.NetworkFirst({
//       cacheName: "currencies",
//       plugins: [
//         new workbox.expiration.Plugin({
//           maxAgeSeconds: 10 * 60 // 10 minutes
//         })
//       ]
//     })
//   );

