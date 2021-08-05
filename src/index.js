import emailjs, { init } from "emailjs-com";
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
		navigator.serviceWorker.register("./service-worker.js");
	});
}

//TODO: add a carousel for projects showcase
//TODO: pdf download button working
