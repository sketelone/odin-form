/* This code validates input from html form
and */ 

// initialize variables
let first_name = "";
let last_name = ""
let email = "";
let phone_number = "";
let password = "";

//create constants for referring to html elements
const submit = document.querySelector('submit');
const password = document.querySelector('submit');

//when submit button is clicked, run calculator
submit.forEach(submit => {
    submit.addEventListener('click', validate)
});

// validate form input


//display error
function displayError(a) {
    var v = document.createElement('text');
    if (a == 1) {
        v.textContent = "*Passwords do not match"
    }
    v.classList.add()
}