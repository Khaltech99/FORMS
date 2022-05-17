"use strict";

// const userName = document.getElementById("name");
// const userEmail = document.getElementById("email");
// const userPassword = document.getElementById("password");
// const userNewPassword = document.getElementById("newpassword");
// const userPhone = document.getElementById("phone");
let userName = document.getElementById("name");
let userEmail = document.getElementById("email");
let userPassword = document.getElementById("password");
let userNewPassword = document.getElementById("newpassword");
let userPhone = document.getElementById("phone");

const submit = document.querySelector(".btn");

submit.addEventListener("click", function() {
    if (userName.value === "") {
        userName.placeholder = " alaye input your username";
        alert("alaye input your number");
    } else if (userEmail.value === "") {
        userEmail.placeholder = " alaye input your email address";
        alert("alaye input your email address");
    } else if (userPassword.value === "") {
        userPassword.placeholder = "guy come back here";
        alert("your password please");
    } else if (
        userNewPassword.value == "" &&
        userNewPassword.value !== userPassword.value
    ) {
        userNewPassword.placeholder = "input password ";
        alert("alaye input your new password");
    } else if (userPhone.value === "") {
        userPhone.placeholder = "input you mobile phone number";
        alert("your mobile number");
    } else {
        alert(
            `Dear ${userName.value} your record is with us thanks for the registration`
        );
    }
});