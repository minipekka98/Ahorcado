class Result{
    constructor(){
        this.message = "Dele again manco";

    }
    showResult(valor){
        if (valor == true){
            this.message = 'Win'
        }
        else{
            this.message = 'defeat'
        }
    }
}
const App = new Result();
console.log(App.showResult(false));