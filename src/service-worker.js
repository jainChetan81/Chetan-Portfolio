if ("workbox" in self) {
	workbox.precaching.precacheAndRoute(self.__precacheManifest || []);
}
// ?We’ll need update the service worker file and handle the SKIP_WAITING event such that it calls the skipWaiting:
addEventListener("message", (event) => {
	if (event.data && event.data.type === "SKIP_WAITING") {
		skipWaiting();
	}
});
const staticDevCoffee = "Chetan Portfolio";
const assets = ["/", "/index.html", "/0.css", "/ChetanId.jpg", "images/maskable_icon.png"];
// self.addEventListener("install", (installEvent) => {
// 	installEvent.waitUntil(
// 		caches.open(staticDevCoffee).then((cache) => {
// 			cache.addAll(assets);
// 		})
// 	);
// });
// self.addEventListener("fetch", (fetchEvent) => {
// 	fetchEvent.respondWith(
// 		caches.match(fetchEvent.request).then((res) => {
// 			return res || fetch(fetchEvent.request);
// 		})
// 	);
// });
