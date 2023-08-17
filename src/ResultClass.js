class Result{
    constructor(){
    
    }
    showResult(value){
        let result = document.getElementById('mensaje');

        if (value == true) {
            result.innerHTML = "Ganaste"
        }
        else{
            result.innerHTML = "GG bro"
        }
        document.querySelectorAll('.letra').forEach( e => {
            e.disabled = true;
        });
    }
}

export{Result};


