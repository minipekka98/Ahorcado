class Keyboard{
    constructor(){
        this.keys = ['A','B','C','D', 'E' , 'F','G','H','I','J','K','L','M','N','Ñ','O','P','Q','R','S','T','U','V','W','X','Y','Z']
        this.keys2=this.keys.map((letter,index)=>{
            return 
        })
    }
    createKeyboard(){
        let count=0;
        const btnsContainer=document.createElement("div");  
        btnsContainer.className="ABC"
        while(count<this.keys.length){
            const btn=document.createElement("button");
            btn.id='letra'
            btn.textContent=this.keys[count];
            // btn.addEventListener('click',(e)=>{
            //     console.log('nada');
            // })
            btnsContainer.appendChild(btn);
            count++;
        }
        return btnsContainer;
    }
    showCorrect(letter){
        this.keys2.map(object => {
            if(object.letter == letter){
                object.state = true
            }
        });
    }
}
export {Keyboard};

