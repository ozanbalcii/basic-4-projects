// websitesinde yazdırılacak olan her şey UI kısmında olcak:

class UI{
    constructor(firstSelect, secondSelect){
        this.firstSelect = firstSelect;
        this.secondSelect = secondSelect;

        this.outputFirst=document.createElement("outputFirst");
        this.outputFirst=document.createElement("outputSecond");
        this.outputFirst=document.createElement("outputResult");

        }

        // seçtiğimiz kur çeşidine göre EU-TR veya USD-EU yazıo
        changeFirst(){

            // seçilen indekse ve options'a göre textcontent'i seçebiliyoruz
            this.outputFirst.textContent=this.firstSelect.options[this.firstSelect.selectedIndex].textContent
        }
        changeSecond(){
               // seçilen indekse ve options'a göre textcontent'i seçebiliyoruz
            this.outputSecond.textContent=this.secondSelect.options[this.secondSelect.selectedIndex].textContent

        }
        displayResult(result){
            this.outputResult.value=result;
        }
}