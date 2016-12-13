let inputs = document.querySelectorAll('.controls input'); // actually returns a nodelist. Its an array-ish thing. you dont have all the array sugar.
console.log(inputs);

function handleUpdate(){
	// let component = this;
	let suffix = this.dataset.sizing || '';
	// dataset is an obj that contains all the attributes from a particular element. the custom thing in data-
	document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix)
};

inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));
