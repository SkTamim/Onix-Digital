// Main JS file for Onix

// Fixed NavBar Animation
let navBar = document.querySelector("nav");
window.onscroll = () => {
	if (window.scrollY > 20) {
		navBar.style.height = "80px";
		navBar.classList.add("nav-shadow");
		navBar.classList.replace("py-4", "py-3");
		navBar.style.backgroundColor = "var(--white)";
	} else {
		navBar.style.height = "100px";
		navBar.classList.remove("nav-shadow");
		navBar.classList.replace("py-3", "py-4");
		navBar.style.backgroundColor = "var(--grey)";
	}
};

// For menu Toggle icon
const toggle_btn = document.querySelector(".menu-trigger");
toggle_btn.addEventListener("click", function () {
	toggle_btn.classList.toggle("active");
});

// Swiper JS Initializetion of hero section
const swiper1 = new Swiper(".swiper1", {
	// Loop
	loop: true,

	// Autoplay
	autoplay: {
		delay: 4000,
	},
	// Coursor
	grabCursor: true,
	//pagination
	pagination: {
		el: ".swiper-pagination1",
		clickable: true,
		renderBullet: function (index, className) {
			return '<span class="' + className + '">' + (index + 1) + "</span>";
		},
	},
});

// Swiper JS Initializetion of services section
const swiper2 = new Swiper(".swiper2", {
	// Loop
	loop: true,

	// Autoplay
	autoplay: {
		delay: 4000,
	},
	// Coursor
	grabCursor: true,

	//pagination
	pagination: {
		el: ".swiper-pagination2",
		clickable: true,
	},

	// Slides
	slidesPerView: 1,
	spaceBetween: 10,

	// Responsive breakpoints
	breakpoints: {
		555: {
			slidesPerView: 1,
			spaceBetween: 20,
		},
		600: {
			slidesPerView: 2,
			spaceBetween: 20,
		},
	},
});
