"use strict"

const form = document.querySelector(".login-form")
form.addEventListener("submit", handleSubmit);

function handleSubmit(event){
    event.preventDefault();
    const {
        elements: {email, password}
    } = event.currentTarget;

    if(email.value === "" || password.value === ""){
        return alert("Wszystkie pola powinny zostać wypełnione.")
    }
    else{
        let object = {
            email: email.value,
            password: password.value
        }
        console.log(object);
        event.currentTarget.reset();
    }
}