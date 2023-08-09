import {Keyboard} from "./keyboard.js";

const board = new Keyboard()
const divBtns = board.createKeyboard();
const keyboard=document.getElementById("keyboard");
keyboard.appendChild(divBtns);

//const keyboardContainer = document.getElementById("keyboard");

// vectorLetras.map(key => {

//         const div = document.createElement("div");

//         div.classList = "ABC"

//         const h3 = document.createElement("h3");

//         h3.textContent = key

//         div.appendChild(h3);
//         keyboardContainer.appendChild(div);

//         div.addEventListener('click' , function(){

//             console.log('this.click' , h3.textContent);

//         })

// })