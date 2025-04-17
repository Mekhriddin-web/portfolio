document.addEventListener("DOMContentLoaded", function () {
	const nav = document.getElementById("nav");
	const header = document.getElementById("header");
	const navOffset = nav.offsetTop;
	const navHeight = nav.offsetHeight;

	window.addEventListener("scroll", function () {
		const scrolled = window.pageYOffset || document.documentElement.scrollTop;

		if (scrolled > navOffset) {
			nav.classList.add("nav-fixed");
			header.style.marginBottom = navHeight + "px";
		} else {
			nav.classList.remove("nav-fixed");
			header.style.marginBottom = 0;
		}
	});

	const burger = document.querySelector(".nav__burger");
	const menu = document.querySelector(".nav__menu");

	burger.addEventListener("click", function (event) {
		event.preventDefault();
		burger.classList.toggle("active");
		menu.classList.toggle("active");
		document.body.classList.toggle("lock");
	});
	
	menu.addEventListener("click", function () {
		if (menu.classList.contains('active')) {
			burger.classList.toggle("active");
			menu.classList.toggle("active");
			document.body.classList.toggle("lock");
		}
	});
});