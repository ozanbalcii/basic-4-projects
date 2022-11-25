// elementleri seçme:

const amountElement = document.querySelector("#amount");
const firstSelect=document.querySelector("#firstCurrency");
const secondSelect=document.querySelector("#secondCurrency");
const currency = new Currency("USD","TRY");

const ui = new UI(firstSelect, secondSelect);

// para birimlerini değiştirirken sonuç bölümündeki başığın değişmesi için ikisine de on change yapmamız lazım

eventListeners();
function eventListeners() {
    // input oldukça exchangeCurrency fonksiyon çalışıyor. (input olma biglisi de amountElement'den gelmektedir.)
    amountElement.addEventListener("input", exchangeCurrency);
   
    firstSelect.onchange= function(){  // 1. select listin(inputun) değeri değiştiğinde:

        // firstSelect'de değişiklik olunca güncelleme yapacak :
        // seçilen indekse ve options'a göre textcontent'i seçebiliyoruz
        currency.changeFirstCurrency(firstSelect.options[firstSelect.selectedIndex].textContent);
        ui.changeFirst();
    };

    secondSelect.onchange= function(){
        // seçilen indekse ve options'a göre textcontent'i seçebiliyoruz
        currency.changeSecondCurrency(secondSelect.options[secondSelect.selectedIndex].textContent);
        ui.changeSecond();
    };



}

//  fetch ile json olarak veriyi alacak(currency dosyasında kodu)
function exchangeCurrency(){
    //Amount değerinin güncellemek için:
    currency.changeAmount(amountElement.value);

    currency.exchange()
    //PROMİSE YAKALAMA:
    // .then(result => console.log(result))
    .then(result => {
        ui.displayResult(result);
    })
    .catch(err => console.log(err));
}

