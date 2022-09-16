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

//hover over .project, reduce opacity of image to 0, and increase opacity of links to 1, animate
$$(".project").forEach(function (project) {
	if (window.innerWidth > 750) {
		project.addEventListener("mouseenter", function () {
			let image = project.querySelector(".project-image");
			let links = project.querySelector(".project-links");
			image.classList.replace("show", "hide30");
			links.classList.replace("hide", "show");
		});
		project.addEventListener("mouseleave", function () {
			let image = project.querySelector(".project-image");
			let links = project.querySelector(".project-links");
			image.classList.replace("hide30", "show");
			links.classList.replace("show", "hide");
		});
	}
});
