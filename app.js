'use strict';
let characters = 0;
let password = "";
const options = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!?";
const switcher = document.querySelector('.btn');
switcher.addEventListener('click', function() {
    document.body.classList.toggle('dark-theme')

    var className = document.body.className;
    if(className == "light-theme") {
        this.textContent = "Dark";
    }
    else {
        this.textContent = "Light";
    }

    console.log('current class name: ' + className);
});

function randomPassCreator(characters)
{
    characters = characters + 2;
    const newPassword = Math.random().toString(36).substring(2,characters);
    return newPassword;
}

function pwGenerator()
{
    var x = document.getElementById("numCharacters").value;
    var inputInt = parseInt(x);
    password = randomPassCreator(inputInt);
    document.getElementById("practice").innerHTML = password;
}