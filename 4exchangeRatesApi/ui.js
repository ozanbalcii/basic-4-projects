class UI{
    constructor(firstSelect, secondSelect){
        this.firstSelect = firstSelect;
        this.secondSelect = secondSelect;
        this.outputFirst=document.createElement("outputFirst");
        this.outputFirst=document.createElement("outputSecond");
        this.outputFirst=document.createElement("outputResult");
        }

        changeFirst(){
            this.outputFirst.textContent=this.firstSelect.options[this.firstSelect.selectedIndex].textContent
        }
        changeSecond(){
            this.outputSecond.textContent=this.secondSelect.options[this.secondSelect.selectedIndex].textContent
        }
        displayResult(result){
            this.outputResult.value=result;
        }
}
