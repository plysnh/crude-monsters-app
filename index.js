// import express from "express";
// console.log(express);

import { priceCalculation as getPrice } from "./math.js";
const price = getPrice(200);
console.log(price);

const myFunction = function (parameter) {
    console.log("parameter: ", parameter);
    };
    const myES6Function = (parameter) => {
    console.log("parameter: ", parameter);
    };
    

myFunction();
myES6Function();

const students = ["tom", "peter", "maria", "claire"];

students.forEach((student) => {
console.log(student);
});

function getMessage() {
    return "hi, this is a message";
    }

    const getMessageArrowFunction = () => "hi, this is a message";
    const message = getMessageArrowFunction();

// console.log(message)
function getUser() {
        const user = {
        name: "Maria",
        age: 26,
        };
        return user;
        }
        const getUserArrowFunction = () => ({
        name: "Maria",
        age: 26,
        });
        const user = getUserArrowFunction();
        console.log(user.name);
        
