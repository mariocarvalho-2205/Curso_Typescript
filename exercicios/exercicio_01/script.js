"use strict";
;
window.UserData = {};
function isUserData(obj) {
    if (obj && typeof obj === "object" &&
        ('nome' in obj || 'email' in obj || 'cpf' in obj)) {
        return true;
    }
    else {
        return false;
    }
}
console.log(isUserData({}));
function validJSON(str) {
    try {
        JSON.parse(str);
    }
    catch (error) {
        return false;
    }
    return true;
}
function loadLocalStorage() {
    const localUserData = localStorage.getItem("UserData");
    if (localUserData && validJSON(localUserData)) {
        const UserData = JSON.parse(localUserData);
        if (isUserData(UserData)) {
            console.log(UserData);
            Object.entries(UserData).forEach(([key, value]) => {
                const input = document.getElementById(key);
<<<<<<< HEAD
                if (input instanceof HTMLInputElement) {
                    if (typeof value === "string") {
                        input.value = value;
                    }
                    console.log(value);
                    window.UserData[key] = value;
=======
                if (typeof value === "string") {
                    input.value = value;
>>>>>>> c77d239b7d42f7cae68e5ded117bf3d710fcf4f5
                }
            });
        }
    }
}
loadLocalStorage();
function handleInput({ target }) {
    if (target instanceof HTMLInputElement) {
        window.UserData[target.id] = target.value;
        localStorage.setItem("UserData", JSON.stringify(window.UserData));
    }
}
const form = document.querySelector('#form');
form?.addEventListener("keyup", handleInput);
