const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

//Sticky header changes size on scroll
window.onscroll = function () {
	growShrinkHeader();
};

function growShrinkHeader() {
	let header = $(".navbar.sticky");
	let headerIntro = $(".header-intro");
	let headerIntroStyles = window.getComputedStyle(headerIntro);

	let navHeight = header.offsetHeight;

	let introHeight =
		headerIntro.offsetHeight +
		parseFloat(headerIntroStyles["marginTop"]) +
		parseFloat(headerIntroStyles["marginBottom"]);

	//console.log(navHeight, introHeight);

	if (window.scrollY > introHeight - navHeight) {
		header.classList.add("shrink-header");
		headerShrunk = true;
	} else if (window.scrollY < introHeight - navHeight - 50) {
		header.classList.remove("shrink-header");
		headerShrunk = false;
	}

	//console.log(window.scrollY, introHeight - navHeight);
}
