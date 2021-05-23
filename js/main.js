// switcher dark theme //
const darkButton = document.getElementById("darkButton");
const bodyChanger = document.getElementById("bodyChenger");
darkButton.addEventListener("click", function () {
	bodyChanger.classList.toggle("dark");
});
//-----End of switcher dark theme //

// menu button //
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
const displayNone1 = document.getElementsByClassName("d-none-1")[0];
const displayNone2 = document.getElementsByClassName("d-none-1")[1];
const displayNone3 = document.getElementsByClassName("d-none-1")[2];
const displayNone4 = document.getElementsByClassName("d-none-1")[3];
const displayNone5 = document.getElementsByClassName("d-none-1")[4];
const displayNone6 = document.getElementsByClassName("d-none-1")[5];
const displayNone7 = document.getElementsByClassName("d-none-1")[6];
const displayNone8 = document.getElementsByClassName("d-none-1")[7];
const displayNone9 = document.getElementsByClassName("d-none-1")[8];
const displayNone10 = document.getElementsByClassName("d-none-1")[9];
const displayNone11 = document.getElementsByClassName("d-none-1")[10];
const displayNone12 = document.getElementsByClassName("d-none-1")[11];
const displayNone13 = document.getElementsByClassName("d-none-1")[12];
const displayNone14 = document.getElementsByClassName("d-none-1")[13];
const displayNone15 = document.getElementsByClassName("d-none-1")[14];
const displayNone16 = document.getElementsByClassName("d-none-1")[15];

const displayNone17 = document.getElementsByClassName("d-none-2")[0];
const displayNone18 = document.getElementsByClassName("d-none-2")[1];
const displayNone19 = document.getElementsByClassName("d-none-2")[2];
const displayNone20 = document.getElementsByClassName("d-none-2")[3];
const displayNone21 = document.getElementsByClassName("d-none-2")[4];
const displayNone22 = document.getElementsByClassName("d-none-2")[5];
const displayNone23 = document.getElementsByClassName("d-none-2")[6];
const displayNone24 = document.getElementsByClassName("d-none-2")[7];
const displayNone25 = document.getElementsByClassName("d-none-2")[8];
const displayNone26 = document.getElementsByClassName("d-none-2")[9];

const loadingButton = document.getElementsByClassName("loadMoreBtn")[0];
const loadingButton2 = document.getElementsByClassName("loadMoreBtn")[1];
loadingButton.addEventListener("click", function () {
	displayNone1.classList.remove("d-none-1");
	displayNone2.classList.remove("d-none-1");
	displayNone3.classList.remove("d-none-1");
	displayNone4.classList.remove("d-none-1");
	displayNone5.classList.remove("d-none-1");
	displayNone6.classList.remove("d-none-1");
	displayNone7.classList.remove("d-none-1");
	displayNone8.classList.remove("d-none-1");
	displayNone9.classList.remove("d-none-1");
	displayNone10.classList.remove("d-none-1");
	displayNone11.classList.remove("d-none-1");
	displayNone12.classList.remove("d-none-1");
	displayNone13.classList.remove("d-none-1");
	displayNone14.classList.remove("d-none-1");
	displayNone15.classList.remove("d-none-1");
	displayNone16.classList.remove("d-none-1");
	displayNone17.classList.remove("d-none-1");
	loadingButton.classList.add("d-none-1")
	loadingButton2.classList.remove("d-none-1")
});
loadingButton2.addEventListener("click", function(){
	displayNone17.classList.remove("d-none-2");
	displayNone18.classList.remove("d-none-2");
	displayNone19.classList.remove("d-none-2");
	displayNone20.classList.remove("d-none-2");
	displayNone21.classList.remove("d-none-2");
	displayNone22.classList.remove("d-none-2");
	displayNone23.classList.remove("d-none-2");
	displayNone24.classList.remove("d-none-2");
	displayNone25.classList.remove("d-none-2");
	displayNone26.classList.remove("d-none-2");
	loadingButton2.classList.add("d-none-1")
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


// light box //

const myImages = [
	"../images/home-page-images/1.jpg",
	"../images/home-page-images/2-2.jpg",
	"../images/home-page-images/2.jpg",
	"../images/home-page-images/3.jpg",
	"../images/home-page-images/4.jpg",
	"../images/home-page-images/5.jpg",
	"../images/home-page-images/6.jpg",
	"../images/home-page-images/7.jpg",
	"../images/home-page-images/8.jpg",
	"../images/home-page-images/9.jpg",
	"../images/home-page-images/10.jpg",
	"../images/home-page-images/11.jpg",
	"../images/home-page-images/12.jpg",
	"../images/home-page-images/13.jpg",
	"../images/home-page-images/14.jpg",
	"../images/home-page-images/15.jpg",
	"../images/home-page-images/16.jpg",
	"../images/home-page-images/17.jpg",
	"../images/home-page-images/18.jpg",
	"../images/home-page-images/19.jpg",
	"../images/home-page-images/20.jpg",
	"../images/home-page-images/21.jpg",
	"../images/home-page-images/22.jpg",
	"../images/home-page-images/24.jpg",
	"../images/home-page-images/25.jpg",
	"../images/home-page-images/26.jpg",
	"../images/home-page-images/27.jpg",
	"../images/home-page-images/28.jpg",
	"../images/home-page-images/29.jpg",
	"../images/home-page-images/30.jpg",
	"../images/home-page-images/31.jpg",
	"../images/home-page-images/32.jpg",
	"../images/home-page-images/33.jpg",
	"../images/home-page-images/34.jpg",
];


// open and close lightbox
const lightboxFillter = document.getElementsByClassName("lightbox-fillter")[0];
const lightboxBase = document.getElementsByClassName("lightbox-base")[0];

const imageSelector1 = document.getElementsByClassName("grid-item")[0];
const imageSelector2 = document.getElementsByClassName("grid-item")[1];
const imageSelector3 = document.getElementsByClassName("grid-item")[2];
const imageSelector4 = document.getElementsByClassName("grid-item")[3];
const imageSelector5 = document.getElementsByClassName("grid-item")[4];
const imageSelector6 = document.getElementsByClassName("grid-item")[5];
const imageSelector7 = document.getElementsByClassName("grid-item")[6];
const imageSelector8 = document.getElementsByClassName("grid-item")[7];
const imageSelector9 = document.getElementsByClassName("grid-item")[8];
const imageSelector10 = document.getElementsByClassName("grid-item")[9];
const imageSelector11 = document.getElementsByClassName("grid-item")[10];
const imageSelector12 = document.getElementsByClassName("grid-item")[11];
const imageSelector13 = document.getElementsByClassName("grid-item")[12];
const imageSelector14 = document.getElementsByClassName("grid-item")[13];
const imageSelector15 = document.getElementsByClassName("grid-item")[14];
const imageSelector16 = document.getElementsByClassName("grid-item")[15];
const imageSelector17 = document.getElementsByClassName("grid-item")[16];
const imageSelector18 = document.getElementsByClassName("grid-item")[17];
const imageSelector19 = document.getElementsByClassName("grid-item")[18];
const imageSelector20 = document.getElementsByClassName("grid-item")[19];
const imageSelector21 = document.getElementsByClassName("grid-item")[20];
const imageSelector22 = document.getElementsByClassName("grid-item")[21];
const imageSelector23 = document.getElementsByClassName("grid-item")[22];
const imageSelector24 = document.getElementsByClassName("grid-item")[23];
const imageSelector25 = document.getElementsByClassName("grid-item")[24];
const imageSelector26 = document.getElementsByClassName("grid-item")[25];
const imageSelector27 = document.getElementsByClassName("grid-item")[26];
const imageSelector28 = document.getElementsByClassName("grid-item")[27];
const imageSelector29 = document.getElementsByClassName("grid-item")[28];
const imageSelector30 = document.getElementsByClassName("grid-item")[29];
const imageSelector31 = document.getElementsByClassName("grid-item")[30];
const imageSelector32 = document.getElementsByClassName("grid-item")[31];
const imageSelector33 = document.getElementsByClassName("grid-item")[32];
const imageSelector34 = document.getElementsByClassName("grid-item")[33];

lightboxFillter.addEventListener("click", function(){
	lightboxBase.classList.remove("active");
	lightboxFillter.classList.remove("active");
})
lightboxBase.addEventListener("click", function(){
	lightboxBase.classList.remove("active");
	lightboxFillter.classList.remove("active");
})

imageSelector1.addEventListener("click", function(){
	lightboxBase.classList.add("active");
	lightboxFillter.classList.add("active");
	document.getElementById("lightbox-image").src = myImages[0];
});
imageSelector2.addEventListener("click", function(){
	lightboxBase.classList.add("active");
	lightboxFillter.classList.add("active");
	document.getElementById("lightbox-image").src = myImages[1];
});
imageSelector3.addEventListener("click", function(){
	lightboxBase.classList.add("active");
	lightboxFillter.classList.add("active");
	document.getElementById("lightbox-image").src = myImages[2];
});
imageSelector4.addEventListener("click", function(){
	lightboxBase.classList.add("active");
	lightboxFillter.classList.add("active");
	document.getElementById("lightbox-image").src = myImages[3];
});
imageSelector5.addEventListener("click", function(){
	lightboxBase.classList.add("active");
	lightboxFillter.classList.add("active");
	document.getElementById("lightbox-image").src = myImages[4];
});
imageSelector6.addEventListener("click", function(){
	lightboxBase.classList.add("active");
	lightboxFillter.classList.add("active");
	document.getElementById("lightbox-image").src = myImages[5];
});
imageSelector7.addEventListener("click", function(){
	lightboxBase.classList.add("active");
	lightboxFillter.classList.add("active");
	document.getElementById("lightbox-image").src = myImages[6];
});
imageSelector8.addEventListener("click", function(){
	lightboxBase.classList.add("active");
	lightboxFillter.classList.add("active");
	document.getElementById("lightbox-image").src = myImages[7];
});
imageSelector9.addEventListener("click", function(){
	lightboxBase.classList.add("active");
	lightboxFillter.classList.add("active");
	document.getElementById("lightbox-image").src = myImages[8];
});
imageSelector10.addEventListener("click", function(){
	lightboxBase.classList.add("active");
	lightboxFillter.classList.add("active");
	document.getElementById("lightbox-image").src = myImages[9];
});
imageSelector11.addEventListener("click", function(){
	lightboxBase.classList.add("active");
	lightboxFillter.classList.add("active");
	document.getElementById("lightbox-image").src = myImages[10];
});
imageSelector12.addEventListener("click", function(){
	lightboxBase.classList.add("active");
	lightboxFillter.classList.add("active");
	document.getElementById("lightbox-image").src = myImages[11];
});
imageSelector13.addEventListener("click", function(){
	lightboxBase.classList.add("active");
	lightboxFillter.classList.add("active");
	document.getElementById("lightbox-image").src = myImages[12];
});
imageSelector14.addEventListener("click", function(){
	lightboxBase.classList.add("active");
	lightboxFillter.classList.add("active");
	document.getElementById("lightbox-image").src = myImages[13];
});
imageSelector15.addEventListener("click", function(){
	lightboxBase.classList.add("active");
	lightboxFillter.classList.add("active");
	document.getElementById("lightbox-image").src = myImages[14];
});
imageSelector16.addEventListener("click", function(){
	lightboxBase.classList.add("active");
	lightboxFillter.classList.add("active");
	document.getElementById("lightbox-image").src = myImages[15];
});
imageSelector17.addEventListener("click", function(){
	lightboxBase.classList.add("active");
	lightboxFillter.classList.add("active");
	document.getElementById("lightbox-image").src = myImages[16];
});
imageSelector18.addEventListener("click", function(){
	lightboxBase.classList.add("active");
	lightboxFillter.classList.add("active");
	document.getElementById("lightbox-image").src = myImages[17];
});
imageSelector19.addEventListener("click", function(){
	lightboxBase.classList.add("active");
	lightboxFillter.classList.add("active");
	document.getElementById("lightbox-image").src = myImages[18];
});
imageSelector20.addEventListener("click", function(){
	lightboxBase.classList.add("active");
	lightboxFillter.classList.add("active");
	document.getElementById("lightbox-image").src = myImages[19];
});
imageSelector21.addEventListener("click", function(){
	lightboxBase.classList.add("active");
	lightboxFillter.classList.add("active");
	document.getElementById("lightbox-image").src = myImages[20];
});
imageSelector22.addEventListener("click", function(){
	lightboxBase.classList.add("active");
	lightboxFillter.classList.add("active");
	document.getElementById("lightbox-image").src = myImages[21];
});
imageSelector23.addEventListener("click", function(){
	lightboxBase.classList.add("active");
	lightboxFillter.classList.add("active");
	document.getElementById("lightbox-image").src = myImages[22];
});
imageSelector24.addEventListener("click", function(){
	lightboxBase.classList.add("active");
	lightboxFillter.classList.add("active");
	document.getElementById("lightbox-image").src = myImages[23];
});
imageSelector25.addEventListener("click", function(){
	lightboxBase.classList.add("active");
	lightboxFillter.classList.add("active");
	document.getElementById("lightbox-image").src = myImages[24];
});
imageSelector26.addEventListener("click", function(){
	lightboxBase.classList.add("active");
	lightboxFillter.classList.add("active");
	document.getElementById("lightbox-image").src = myImages[25];
});
imageSelector27.addEventListener("click", function(){
	lightboxBase.classList.add("active");
	lightboxFillter.classList.add("active");
	document.getElementById("lightbox-image").src = myImages[26];
});
imageSelector28.addEventListener("click", function(){
	lightboxBase.classList.add("active");
	lightboxFillter.classList.add("active");
	document.getElementById("lightbox-image").src = myImages[27];
});
imageSelector29.addEventListener("click", function(){
	lightboxBase.classList.add("active");
	lightboxFillter.classList.add("active");
	document.getElementById("lightbox-image").src = myImages[28];
});
imageSelector30.addEventListener("click", function(){
	lightboxBase.classList.add("active");
	lightboxFillter.classList.add("active");
	document.getElementById("lightbox-image").src = myImages[29];
});
imageSelector31.addEventListener("click", function(){
	lightboxBase.classList.add("active");
	lightboxFillter.classList.add("active");
	document.getElementById("lightbox-image").src = myImages[30];
});
imageSelector32.addEventListener("click", function(){
	lightboxBase.classList.add("active");
	lightboxFillter.classList.add("active");
	document.getElementById("lightbox-image").src = myImages[31];
});
imageSelector33.addEventListener("click", function(){
	lightboxBase.classList.add("active");
	lightboxFillter.classList.add("active");
	document.getElementById("lightbox-image").src = myImages[32];
});
imageSelector34.addEventListener("click", function(){
	lightboxBase.classList.add("active");
	lightboxFillter.classList.add("active");
	document.getElementById("lightbox-image").src = myImages[33];
});

//----End of open and close lightbox


//----End of light box
