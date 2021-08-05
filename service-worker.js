importScripts("precache-manifest.6cc8cf30df34449e473aa70eae61d4cd.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

workbox.precaching.precacheAndRoute(self.__precacheManifest);
//?We’ll need update the service worker file and handle the SKIP_WAITING event such that it calls the skipWaiting:
addEventListener("message", (event) => {
	if (event.data && event.data.type === "SKIP_WAITING") {
		skipWaiting();
	}
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

