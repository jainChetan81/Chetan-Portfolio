import { Workbox } from "workbox-window";
import "./styles/index.scss";
const element = document.getElementById("body");
const themeDots = document.getElementsByClassName("theme-dot");
const theme = sessionStorage.getItem("theme");
if (theme == null) {
	setTheme("light");
} else {
	setTheme(theme);
}
for (let i = 0; themeDots.length > i; i++) {
	if (themeDots)
		themeDots[i].addEventListener("click", function () {
			setTheme(this.dataset.mode);
		});
}

function setTheme(mode) {
	if (mode == "light") element.className = "light_theme";
	if (mode == "blue") element.className = "blue_theme";
	if (mode == "green") element.className = "green_theme";
	if (mode == "purple") element.className = "purple_theme";
	sessionStorage.setItem("theme", mode);
}

if ("serviceWorker" in navigator) {
	window.addEventListener("load", () => {
		const wb = new Workbox("/service-worker.js");
		if (wb && (wb != null || undefined)) {
			const updateButton = document.querySelector("#app-update");
			// Fires when the registered service worker has installed but is waiting to activate.
			wb.addEventListener("waiting", () => {
				updateButton.classList.add("show");
				updateButton.addEventListener("click", () => {
					// Set up a listener that will reload the page as soon as the previously waiting service worker has taken control.
					wb.addEventListener("controlling", () => {
						window.location.reload();
					});

					// Send a message telling the service worker to skip waiting.
					// This will trigger the `controlling` event handler above.
					wb.messageSW({ type: "SKIP_WAITING" });
				});
			});

			wb.register();
		}
	});
}

// TODO:add email functonality and add a popup when email is sent
//TODO: add a carousel for projects showcase
//TODO:PWA
//TODO: pdf download button working
