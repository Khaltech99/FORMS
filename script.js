"use strict";
const emailType =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
let userName = document.getElementById("name");
let userEmail = document.getElementById("email");
let userPassword = document.getElementById("password");
let userNewPassword = document.getElementById("newpassword");
let userPhone = document.getElementById("phone");
const toggle = document.querySelector(".toggle");
const newToggle = document.querySelector(".newToggle");
const submit = document.querySelector(".btn");

submit.addEventListener("click", function() {
    if (userName.value === "") {
        userName.placeholder = " kindly input your username";
        alert("kindly input your username");
        //        Email validation
    } else if (userEmail.value === "" || !userEmail.value.match(emailType)) {
        userEmail.placeholder = " kindly input your email address";
        alert("invalid email address");
    } else if (userPassword.value === "") {
        userPassword.placeholder = "your password should be equal to new password";
        alert("your password please");
    } else if (
        //          Password validation
        userNewPassword.value == "" ||
        userPassword.value !== userNewPassword.value
    ) {
        userNewPassword.placeholder = "input password ";
        alert(" re-enter your password");
    } else if (userPhone.value === "") {
        userPhone.placeholder = "input you mobile phone number";
        alert("enter your mobile number");
    } else {
        alert(
            `Dear ${userName.value} your record is with us , thanks for the registration to our bootcamp`
        );
    }
});

//                   togglers
toggle.addEventListener("click", function() {
    if (userPassword.type === "password") {
        userPassword.type = "text";
    } else {
        userPassword.type = "password";
    }
});
newToggle.addEventListener("click", function() {
    if (userNewPassword.type === "password") {
        userNewPassword.type = "text";
    } else {
        userNewPassword.type = "password";
    }
});