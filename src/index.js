import emailjs, { init } from "emailjs-com";
import { Workbox } from "workbox-window";
import "./styles/index.scss";
init("user_NCbfVxwteUNCBS2cFVtK0");
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

document.getElementById("contact-form").addEventListener("submit", function (event) {
	event.preventDefault();
	// generate a five digit number for the contact_number variable
	const alert = document.querySelector(".email-alert");
	// these IDs from the previous steps
	emailjs.sendForm("service_6aic3oe", "template_p5zrsdq", this).then(
		function (res) {
			if (res.status === 200) {
				alert.classList.add("success");
				alert.innerHTML = "Email Sent Successfully";
				document.getElementById("contact-form").reset();
			}
		},
		function (err) {
			alert.classList.add("warning");
			alert.innerHTML = "Email Could not be sent";
		}
	);
});
if ("serviceWorker" in navigator) {
	window.addEventListener("load", function () {
		navigator.serviceWorker
			.register("./service-worker.js")
			.then((res) => console.log("service worker registered"))
			.catch((err) => console.log("service worker not registered", err));
	});
}

// if ("serviceWorker" in navigator) {
// 	window.addEventListener("load", () => {
// 		const wb = new Workbox("/service-worker.js");
// 		if (wb && (wb != null || undefined)) {
// 			const updateButton = document.querySelector("#app-update");
// 			// Fires when the registered service worker has installed but is waiting to activate.
// 			wb.addEventListener("waiting", () => {
// 				updateButton.classList.add("show");
// 				updateButton.addEventListener("click", () => {
// 					// Set up a listener that will reload the page as soon as the previously waiting service worker has taken control.
// 					wb.addEventListener("controlling", () => {
// 						window.location.reload();
// 					});
// 					// Send a message telling the service worker to skip waiting.This will trigger the `controlling` event handler above.
// 					wb.messageSW({ type: "SKIP_WAITING" });
// 				});
// 			});
// 			wb.register();
// 		}
// 	});
// }

//TODO: add a carousel for projects showcase
//TODO: pdf download button working
