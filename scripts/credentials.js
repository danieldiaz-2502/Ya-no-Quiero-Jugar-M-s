import {createUser, checkUser} from './firebase.js'

window.addEventListener('DOMContentLoaded',()=>{
})


var register = localStorage.getItem("register");
var login = localStorage.getItem("login");

const imgTitle = document.querySelector('.landingpage__img')
const btnSend = document.querySelector('.landingpage__btn--send')

const sendRegister = document.querySelector('.sendRegister')
const sendLogin = document.querySelector('.sendLogin')

const userForm = document.querySelector('.authform')
const username = document.querySelector('.label-name')
const name = document.querySelector("input[name='name']")
const passwordAgain = document.querySelector("input[name='passwordAgain']")


const userPasswordAgain = document.querySelector('.label-passwordAgain')



if(login){
    sendLogin.classList.remove('hidden')
    localStorage.removeItem("login");
    username.classList.add('hidden')
    name.removeAttribute("required")
    passwordAgain.removeAttribute("required")
    userPasswordAgain.classList.add('hidden')

}


if(register){
    imgTitle.style.backgroundImage = "url('../images/datos_title.png')";
    sendRegister.classList.remove('hidden')
    localStorage.removeItem("register");

}

userForm.addEventListener('submit',(e)=>{
    e.preventDefault()
    if(login){
        checkUser(userForm.email.value,userForm.password.value)    
        
        
    } else{

        if(userForm.password.value === userForm.passwordAgain.value){
            createUser(userForm.name.value,userForm.email.value,userForm.password.value)

        } else{
            alert("Las contraseña diligenciada no es igual")
        }
    }

    userForm.reset()

})