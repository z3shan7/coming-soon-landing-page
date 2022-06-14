let email = document.getElementById("email");
let alertIcon = document.getElementById('alert-button');
let alertText = document.getElementById("alert-text");
let form = document.getElementById("form"); 


form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (email.validity.typeMismatch || email.value === '') {
        alertIcon.style.opacity = 1;
        alertText.style.opacity = 1;
        email.style.border = '2px solid red';
    } else {
        alertIcon.style.opacity = 0;
        alertText.style.opacity = 0;
    }
})