// Box shadow on navbar at scrollpage
window.addEventListener('scroll', (e) => {

	var nav = document.getElementById('navboxshadow')

	if (window.pageYOffset > 0) {
		nav.style.boxShadow = "rgb(77 77 77) 0px 0px 10px"
	} else {
		nav.style.boxShadow = "none"
	}
})