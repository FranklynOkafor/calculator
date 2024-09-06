const buttons = document.querySelectorAll('button')
const yellowButtons = document.querySelectorAll('.btn-yellow')
const greenButton = document.querySelector('.btn-green')
const redButtons = document.querySelectorAll('.btn-red')
const display = document.querySelector('#display')
const ON = document.querySelector('#ON')
const OFF = document.querySelector('#OFF')
const DEL = document.querySelector('#DEL')
const AC = document.querySelector('#AC')
const EQUAL = document.querySelector('#equal')
const digits = [1, 2, 3, 4, 5, 6, 7,8, 9, 0 ,'/', '-', '+', '.', '*']
const operators = ['*', '+', '-', '/']
let isOn = true


//////CALCULATOR CONTROLS////////

ON.addEventListener('click', function(){
    isOn = true
})

OFF.addEventListener('click', function(){
    isOn = false
    display.innerText = ''
})

DEL.addEventListener('click',function(){
    let characters = display.innerText.split('')
})

AC. addEventListener('click', function(){
    display.innerText = ''
})




//////////////////DISPLAY CONTENT/////////////////////////
function addToDisplay(char){
    if(isOn){
        if (isDigit(char)){ {
            display.innerText += char
        }
    }
    
}}

function isDigit(value){
    for (let element of digits) {
        if (value == element) {
            return true;
        }

        else if(typeof value == 'number') return true
    }
}


//////////BUTON ANIMATION///////

buttons.forEach(element => {
    element.addEventListener('click',function(){
        element.style['background-color'] = 'grey';
        setTimeout(function(){
            element.style['background-color'] = '#F0F8FF'
        }, 150);
    })
});

yellowButtons.forEach(element => {
    element.addEventListener('click',function(){
        element.style['background-color'] = 'grey';
        setTimeout(function(){
            element.style['background-color'] = 'yellow'
        }, 150);
    })
    
});

redButtons.forEach(element => {
    element.addEventListener('click',function(){
        element.style['background-color'] = 'grey';
        setTimeout(function(){
            element.style['background-color'] = 'red'
        }, 150);
    })
    
});

greenButton.addEventListener('click',function(){
    greenButton.style['background-color'] = 'grey';
        setTimeout(function(){
            greenButton.style['background-color'] = 'green'
        }, 150);
})








buttons.forEach(button => {
    button.addEventListener('click', function() {
        const character = button.innerText
        
        if (character == '='){
            const problem = display.innerText
            display.innerText = ''
            calculate(problem)

        }

        addToDisplay(character)
    })

});

document.addEventListener('keypress', function(event) {
    let key = event.key
    digits.forEach(element => {
        if(key == element) {
            addToDisplay(key)
        }
    })
})

function calculate(question){
    let answer = eval(question)
    addToDisplay(answer)
}

