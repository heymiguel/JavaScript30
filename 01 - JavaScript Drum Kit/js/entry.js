

function playSound(e){
	let audio  = document.querySelector(`audio[data-key="${e.keyCode}"]`);
	let key  = document.querySelector(`.key[data-key="${e.keyCode}"]`);
	// console.log(audio);
	if(!audio) return;
	audio.currentTime = 0; // reset for button spam
	audio.play();
	key.classList.add('playing');
}

function removeTransition(e){
	if (e.propertyName !== 'transform') return;
	this.classList.remove('playing');

};

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition)); // you can watch for css transitions. That's really useful.
window.addEventListener('keydown', playSound);


