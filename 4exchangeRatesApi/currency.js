// es6  fetc ve promise yapıları ile veri alışverişi yapacağız:
class Currency{
    // sitede 2 para birimi seçilecek, onun için 2 tane dğeişken olusturduk this ile gösterdik
    constructor(firstCurrency, secondCurrency){
        // her event olustugunda firstCurrency, secondCurrency ve amount'u  değiştireceğiz
        this.firstCurrency = firstCurrency;
        this.secondCurrency = secondCurrency;
        this.url ="https://api.exchangerate.host/latest?base=";

        //veri alışverişi yapılacağı için:
        this.amount = null;
        
        }
        exchange(){


            return new Promise((resolve, reject) =>{

                // fetch veriyi bize response vercek bizdee bunu json olarak alacağız
                fetch(this.url + this.firstCurrency)
                //bu da bize promise döndüyor o yüzden bir then daha ile yakalayacağız:
                .then(response => response.json())
                // en son json verisi var:
                // .then(data =>  console.log(data))
                //fonk yaptım çünkü 1 usdt ne kadar tr yapıyo bu veriyi alcaz:(kaynak api'de rates yazıyo ondan data.rates yapıldı)
                .then(data =>{ 
                // json verisi var elimizde json verisiden kur bilgisine ulastık.  DİĞER YAZIM ŞEKLİ :  const parity = data[rates][this.secondCurrency]; 
                const parity = data.rates[this.secondCurrency]; // data'dan secondCurrency'ye girilen (2. inputa) kur bilgisini alıyor.
                //string amount number oldu:
                const amount2 = Number(this.amount);
                // kur ile TR değerini çarptı 
                let total = parity*amount2;

                // total sonucu siteye yansıtmak için promise döndürmemiz gerekiyor:(PROMİSE DÖNDÜRMEK İÇİN EN TEPEDE return new Promise((resolve,reject) =>) DİCEZ VE FETCH FONKSİYONUNU BUNUN İÇİNE KOYCAZ
                resolve(total);


                //BURDA DÖNENEN PROMİSE'İ YAKALAMAMIZ GEREKMEKTEDİR. APP ODSYASINDA YAKALICAZ
             })
            .catch(err => reject(err));


            });
           
            
        }
        // değer girdikce hep EUR gösteriyor bunu düzeltmek için ve amount değerini girildikçe değiştirmek için:
        // değerleri güncelliyoruz kısaca:
        changeAmount(amount){
            this.amount = amount;  
        }
        changeFirstCurrency(newFirstCurrency){
            this.firstCurrency = newFirstCurrency;
        }
        changeSecondCurrency(newSecondCurrency){
            this.secondCurrency  = newSecondCurrency; 
        }
}