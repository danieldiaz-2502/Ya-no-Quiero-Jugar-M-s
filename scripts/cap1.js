import {addChoice} from './firebase.js'

const btnNext = document.querySelector('.next')
const btnPrev = document.querySelector('.prev')
const page= document.querySelector('.comic--page')
const divPart = document.querySelector('.comic--part')

const opcionOne = document.querySelector('.opcion1')
const opcionTwo = document.querySelector('.opcion2')

var activeOne = false
var activeTwo = false

var choice = ''


var part = 0

if(part == 0){
    btnPrev.style.visibility = 'hidden';
    divPart.classList.add('hidden')
}

opcionOne.addEventListener('click',()=>{

    if(part == 2){
        choice = 'almorzar'
        choiceOne('almorzar')
        addChoice('choice1', choice)
    }

})

opcionTwo.addEventListener('click',()=>{
    if(part == 2){
    choice = 'hablar'
    choiceOne('hablar')
    addChoice('choice1', choice)
    }

    
})

btnPrev.addEventListener('click',(e)=>{
    part = part - 1
    pages()

})

btnNext.addEventListener('click',(e)=>{
    part = part + 1
    pages()
})

function pages () {
    console.log(part)
    switch (part) {
        case 0:
            btnPrev.style.visibility = 'hidden';
            page.style.backgroundImage = "url('../images/pagina_1.png')";
            break;
        case 1:
            page.style.backgroundImage = "url('../images/pag2.png')";
            btnPrev.style.visibility = 'visible';
            break;
        case 2:
            divPart.classList.remove('hidden')
            opcionOne.classList.remove('hidden')
            opcionTwo.classList.remove('hidden')
            btnNext.style.visibility = 'hidden'
          break;
      }

}

function choiceOne () {

    switch (choice) {
        case 'almorzar':
            page.style.backgroundImage = "url('../pages/pag4.3.png')";
            divPart.classList.add('hidden')
            opcionOne.classList.add('hidden')
            opcionTwo.classList.add('hidden')
            break;
        case 'hablar':
            part = 3
            break;
      }

}

opcionOne.addEventListener('mouseover', function() {
    activeOne = true
    buttons()
})

opcionOne.addEventListener('mouseout', function() {
    activeOne = false
    buttons()
})

opcionTwo.addEventListener('mouseover', function() {
    activeTwo = true
    buttons()
})

opcionTwo.addEventListener('mouseout', function() {
    activeTwo = false
    buttons()
})

function buttons() {

    switch (part) {
        
        case 2:

        if(activeOne){
            opcionOne.style.backgroundImage = "url('../images/choice 1.1 hover.png')"
        } else {
            opcionOne.style.backgroundImage = "url('../images/choice 1.1.png')"

        }

        if(activeTwo){

            opcionTwo.style.backgroundImage = "url('../images/choice 1.2 hover.png')"
        } else{
            opcionTwo.style.backgroundImage = "url('../images/choice 1.2.png')"

        }
          break;
        case 3:

        if(activeOne){
            opcionOne.style.backgroundImage = "url('../images/choice 2.1 hover.png')"
        } else {
            opcionOne.style.backgroundImage = "url('../images/choice 2.1.png')"

        }

        if(activeTwo){

            opcionTwo.style.backgroundImage = "url('../images/choice 2.2 hover.png')"
        } else{
            opcionTwo.style.backgroundImage = "url('../images/choice 2.2.png')"

        }
          
          break;
        default:
          console.log("Opción no válida");
          break;
      }

}

