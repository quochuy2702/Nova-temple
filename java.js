var navbarElement = document.querySelector(".navbar");
var navbarButton = document.querySelector(".navbar-toggler");
// var owlDotElements = document.querySelectorAll(".owl-dot");

function navbarScrolled() {
  // window.scrollY kiểm tra người dùng có scroll hay không
  if (window.scrollY !== 0) {
    navbarElement.classList.add("active");
  } else {
    navbarElement.classList.remove("active");
  }
}

window.addEventListener("scroll", navbarScrolled);

function handleOnclickButton() {
  var navbarSupport = document.querySelector("#navbarSupport");
  if (navbarSupport.classList.contains("active")) {
    navbarSupport.classList.remove("active");
  } else {
    navbarSupport.classList.add("active");
  }
}

navbarButton.addEventListener("click", handleOnclickButton);

// Initialize Swiper
var swiper = new Swiper(".mySwiper", {
			slidesPerView: 1,
			spaceBetween: 30,
			loop: true,
			pagination: {
				el: ".swiper-pagination",
				clickable: true,
			},
			navigation: {
				nextEl: ".swiper-button-next",
				prevEl: ".swiper-button-prev",
			},
		});