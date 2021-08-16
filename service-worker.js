importScripts("precache-manifest.9276210b0d768cfb2da5dac641a812f2.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

// if ("workbox" in self) {
// 	workbox.precaching.precacheAndRoute(self.__precacheManifest || []);
// }
//?We’ll need update the service worker file and handle the SKIP_WAITING event such that it calls the skipWaiting:
// addEventListener("message", (event) => {
// 	if (event.data && event.data.type === "SKIP_WAITING") {
// 		skipWaiting();
// 	}
// });
const staticDevCoffee = "Chetan Portfolio";
const assets = ["/", "/index.html", "/0.css", "/images"];
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

