import {createUser, checkUser} from './firebase.js'

window.addEventListener('DOMContentLoaded',()=>{
})

const startBtn = document.querySelector('.buttonStart')
const registerBtn = document.querySelector('.buttonRegister')

const seccionLandingpage = document.querySelector('.seccionLandingpage')
const seccionLogin = document.querySelector('.login')
const seccionRegister = document.querySelector('.register')



startBtn.addEventListener('click',(e)=>{
    seccionLandingpage.classList.add('hidden')
    seccionLogin.classList.remove('hidden')

})

registerBtn.addEventListener('click',(e)=>{
    seccionLandingpage.classList.add('hidden')
    seccionRegister.classList.remove('hidden')
})
