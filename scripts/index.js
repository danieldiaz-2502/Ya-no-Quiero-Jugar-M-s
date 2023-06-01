import {createUser, checkUser} from './firebase.js'

window.addEventListener('DOMContentLoaded',()=>{
})

const startBtn = document.querySelector('.buttonStart')
const registerBtn = document.querySelector('.buttonRegister')


startBtn.addEventListener('click',(e)=>{
    location.href = "./credentials.html"
    localStorage.setItem("login", true);

})

registerBtn.addEventListener('click',(e)=>{
    location.href = "./credentials.html"
    localStorage.setItem("register", true);

    
})
