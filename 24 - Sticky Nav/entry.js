const nav  = document.querySelector('#main');
const topOfNav = nav.offsetTop;
function fixNav(){
	if (window.scrollY >= topOfNav){
		document.body.classList.add('fixed-nav');

	} else {
		document.body.classList.add('fixed-nav');
	}
} // scrollY is how far it scrolls

window.addEventListener('scroll', fixNav);