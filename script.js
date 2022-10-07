/* This code validates input from html form
and */ 

// initialize variables


//create constants for referring to html elements
const submit = document.getElementById('submit');
const password = document.getElementById('password');
const confirm_password = document.getElementById('confirm-password');

//when user inputs confirm password, check if it matches
submit.addEventListener("click",function(event) {
    var pass = password.value;
    var conPass = confirm_password.value;
    if (passwordMatch(pass,conPass) == false) {
            console.log(pass,conPass)
            confirm_password.setCustomValidity("Passwords do not match!");
            confirm_password.reportValidity();
    } else {
        confirm_password.setCustomValidity("");
    }
})

// confirm_password.addEventListener("input", function(event) {
//     if (passwordMatch(password, "input") == false) {
//         console.log("input")
//         confirm_password.setCustomValidity("Passwords do not match!");
//         confirm_password.reportValidity();
//     } else {
//         confirm_password.setCustomValidity("");
//     }
// })

// validate form input
function passwordMatch(a, b) {
    console.log("password match", a, b)
    if (a != b) {
        return(false);
        console.log()
    } else {
        return(true);
    }
}