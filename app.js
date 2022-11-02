console.log('Connected');

import Person from "./Person.js";

const firstName = document.getElementById('first');
const lastName = document.getElementById('last');
const age = document.getElementById('age');
const btn = document.getElementById('button');
const display = document.getElementById('display');

const newPerson = new Person(firstName, lastName, age);

let displayData = () => {
    const newPerson = new Person(firstName.value, lastName.value, age.value);
    console.log(newPerson);
    display.innerHTML = `Hello ${firstName.value}  ${lastName.value}! You are ${age.value} years old.`;

}

btn.addEventListener('click', displayData);




