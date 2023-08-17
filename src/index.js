import {Keyboard} from "./keyboard.js";
import { BodyParts } from "./BodyParts.js";

const board = new Keyboard()
const bodyParts = new BodyParts();
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