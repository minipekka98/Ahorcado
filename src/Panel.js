String.prototype.replaceAt = function(index , character) 
{
    return this.substring(0, index) + character + this.substring(index + character.length);
}

const words = ['perro' , 'gato' , 'comida' , 'casa'];

const term = words[Math.floor(Math.random()*words.length)];
let wordScrips = term.replace(/./g,"_ ");

document.querySelector('#output').innerHTML = wordScrips;

document.querySelector('#calcular').addEventListener('click',() =>
{
    const letra = document.querySelector('#term').value;
    const prueba = document.querySelectorAll('#letra')
    console.log(prueba);

    prueba.forEach(element => {
        let letraencontrada = '';
        element.addEventListener('click', (e) =>{
            letraencontrada = element.innerHTML;
            console.log(letraencontrada.toLocaleLowerCase());
            for(const i in term)
            {
                console.log(term);
                if(letraencontrada.toLocaleLowerCase() == term[i])
                {
                    wordScrips = wordScrips.replaceAt(i*2 , letraencontrada.toLocaleLowerCase());
                }
            }
            document.querySelector('#output').innerHTML = wordScrips;
        })
    });

    for(const i in term)
    {
        if(letra == term[i])
        {
            wordScrips = wordScrips.replaceAt(i*2 , letra);
        }
    }
    document.querySelector('#output').innerHTML = wordScrips;

}); 


