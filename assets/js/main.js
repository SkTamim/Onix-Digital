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

// Swiper JS Initializetion
const swiper = new Swiper(".swiper", {
	// Loop
	loop: true,

	// Autoplay
	autoplay: {
		delay: 4000,
	},
	//pagination
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
		renderBullet: function (index, className) {
			return '<span class="' + className + '">' + (index + 1) + "</span>";
		},
	},
});
