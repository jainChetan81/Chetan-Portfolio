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
// TODO:add email functonality and add a popup when email is sent
//TODO: add a carousel for projects showcase
//TODO:PWA
//TODO: pdf download button working
