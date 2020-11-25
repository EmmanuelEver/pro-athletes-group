const menuToggler = document.querySelector(".nav__hamburger");
const sideBarMenu = document.querySelector(".nav__items");
const backdrop = document.querySelector(".backdrop");

menuToggler.addEventListener("click", () => {
	backdrop.classList.add("show")
	sideBarMenu.style.transform = "translateX(100%)";
})

backdrop.addEventListener("click", () => {
	backdrop.classList.remove("show");
	sideBarMenu.style.transform = "translateX(0%)";
})