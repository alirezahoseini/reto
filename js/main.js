// switcher dark theme
const darkButton = document.getElementById("darkButton");
const bodyChanger = document.getElementById("bodyChenger");
darkButton.addEventListener("click", function () {
	bodyChanger.classList.toggle("dark");
});
//-----End of switcher dark theme

// menu button
const menuButton = document.getElementById("menu-button");
const hambergerMenu = document.getElementById("hamberger-menu");
const menuCloserBtn1 = document.getElementById("menu-closer-1");
const hambergerMenuBgFillter = document.getElementById(
	"hamberger-menu-background-fillter",
);
menuButton.addEventListener("click", function () {
	hambergerMenu.classList.add("active");
	hambergerMenuBgFillter.classList.add("active");
});
menuCloserBtn1.addEventListener("click", function () {
	hambergerMenu.classList.remove("active");
	hambergerMenuBgFillter.classList.remove("active");
});
hambergerMenuBgFillter.addEventListener("click", function () {
	hambergerMenu.classList.remove("active");
	hambergerMenuBgFillter.classList.remove("active");
});

//-----End of menu button

// loading button
const loadingButton = document.getElementsByClassName("loadMoreBtn")[0];
const lodingGif = document.getElementsByClassName("loadingGif")[0];
loadingButton.addEventListener("click", function () {
	loadingButton.classList.toggle("active");
});
//----End of loading button

// login form
const loginBtn = document.getElementsByClassName("login-button")[0];
const loginFillter = document.getElementById("login-fillter");
const loginBase = document.getElementsByClassName("login-base")[0];
loginBtn.addEventListener("click", function () {
	loginFillter.classList.add("active");
	loginBase.classList.add("active");
	
});
loginFillter.addEventListener("click", function () {
	loginFillter.classList.remove("active");
	loginBase.classList.remove("active");
});
//----End of login form
