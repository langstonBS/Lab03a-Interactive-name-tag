//import funcations and grab DOM elements

const name = document.getElementById('name-value')
const h1 = document.getElementById('nametag');
const button = document.getElementById('submit-button');

// set event listeners to update state and the DOM
button.addEventListener('click', () => {
    // GET the input's value
    const value = name.value;

    // SET the h1's textContent to that value (defined outcome -- validate this it happended)
    h1.textContent = value;

    // clear the input
    name.textContent = '';
});