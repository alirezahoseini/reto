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
const menuCloseBtn2 = document.getElementById("menu-close-btn-2");
menuButton.addEventListener("click", function () {
	hambergerMenu.classList.add("active");
});
menuCloserBtn1.addEventListener("click", function () {
	hambergerMenu.classList.remove("active");
});
menuCloseBtn2.addEventListener("click", function(){
    hambergerMenu.classList.remove("active");
});
//-----End of menu button
