import { BodyParts } from "./BodyParts.js";
import { Result } from "./ResultClass.js"
import { Keyboard } from "./keyboard.js";

String.prototype.replaceAt = function(index , character) 
{
    return this.substring(0, index) + character + this.substring(index + character.length);
}

const words = ['perro' , 'gato' , 'comida' , 'casa'];

let term = words[Math.floor(Math.random()*words.length)];
let wordScrips = term.replace(/./g,"_ ");

const body = new BodyParts();
let conta = 1;

document.querySelector('#output').innerHTML = wordScrips;

function game() {
    const prueba = document.querySelectorAll('.letra');

    prueba.forEach(element => {
        let letraencontrada = '';
        element.addEventListener('click', (e) =>{
            letraencontrada = element.innerHTML;
            let encontrado = false;
            
            for(let i = 0; i < term.length; i++)
            {
                if(letraencontrada.toLocaleLowerCase() == term[i])
                {
                    encontrado = true;
                    wordScrips = wordScrips.replaceAt(i * 2 , letraencontrada.toLocaleLowerCase());
                }
            }

            let tecla = document.querySelector('#letra' + letraencontrada);            
            tecla.disabled = true;
            
            if (encontrado) {
                tecla.classList.add('correct');
            } else {
                tecla.classList.add('wrong');
                const img = document.getElementById('ahorimg');
                img.src = body.changeImage(conta);
                conta++;
            }

            document.querySelector('#output').innerHTML = wordScrips;
            let result = new Result()

            if (conta == 7) {
                result.showResult(false);
            } else if (wordScrips.replace(/\s/g,'') == term) {
                result.showResult(true);
            }
        })
    });
}

document.addEventListener("DOMContentLoaded", () =>
{
    game();
    document.querySelector('#output').innerHTML = wordScrips;
}); 

document.getElementById('reset').addEventListener("click", (e) => {
    const board = new Keyboard();
    const divBtns = board.createKeyboard();
    const keyboard = document.getElementById("keyboard");
    const img = document.getElementById('ahorimg');
    
    term = words[Math.floor(Math.random()*words.length)];    
    wordScrips = term.replace(/./g,"_ ");
    document.querySelector('#output').innerHTML = wordScrips;
    
    keyboard.removeChild(keyboard.lastChild);
    keyboard.appendChild(divBtns)
    conta = 0;
    img.src = body.changeImage(conta);
    document.getElementById('mensaje').innerHTML = "";
    game();
});


