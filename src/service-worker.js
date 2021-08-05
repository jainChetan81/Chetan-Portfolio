workbox.precaching.precacheAndRoute(self.__precacheManifest);
//?We’ll need update the service worker file and handle the SKIP_WAITING event such that it calls the skipWaiting:
addEventListener("message", (event) => {
	if (event.data && event.data.type === "SKIP_WAITING") {
		skipWaiting();
	}
});

// const staticDevCoffee = "chetan-jain-portfolio";
// const assets = ["/", "/template.html", "/0.css", "/imgs/*"];

// self.addEventListener("install", (installEvent) => {
// 	installEvent.waitUntil(
// 		caches.open(staticDevCoffee).then((cache) => {
// 			cache.addAll(assets);
// 		})
// 	);
// });

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
