/* This code validates input from html form
and */ 

// initialize variables


//create constants for referring to html elements
const passsword = document.getElementById('password');
const confirm_password = document.getElementById('confirm-password');

//when user inputs confirm password, check if it matches
confirm_password.addEventListener("input", function(event) {
    if (passwordMatch(password, "input") == false) {
        confirm_password.setCustomValidity("Passwords do not match!");
        confirm_password.reportValidity();
    } else {
        confirm_password.setCustomValidity("");
    }
})

// validate form input
function passwordMatch(a,b) {
    console.log("password match", a, b)
    if (a != b) {
        return(false);
    } else {
        return(true);
    }
}