// Selecting the INPUTS so when they change it will update the CSS variables 
const inputs = document.querySelectorAll('.controls input');


// Create a Function(methode) handleUpdate()


function handleUpdate(){
    const suffix = this.dataset.sizing || '';
    // select the value and update the value 
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix) // + suffix to add px or nothing 
}

// loop over each input

inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));