//ESP6+

// const merhaba=function(){
//     console.log("merhaba");
// }

// merhaba();



// Arrow function:
// yukardaki fonksiyonun arrow function halini yazdık:

// const merhaba = () => {
//     console.log("merhaba");

// }
// merhaba();


// buradaki gibi tek iş yapıyorsa { paranteze ihtiyaç yok.
// const merhaba = (firstname, lastname) => console.log("merhaba", firstname, lastname);
// merhaba("ozan", "balcı");



// const kupal = function (x) {
//      return x*x*x;
// }
// console.log(kupal(4));

// const kupalArrow = () => {
//     return x*x*x;
// }
// console.log(kupal(4));

// tek işlem yapılıyorsa; return ve console ihtiyaç yok
// const kupalArrowKısa = x => x*x*x;
// console.log(kupal(4));




// destructing

// let number1, number2;
// arr = [100,200,300,400];
// number1 = arr[0];
// number2 = arr[1];

//destructing kullanırsak:
// 1.
// [number1, number2]= [100,200,300,400];
// console.log(number1, number2);

//2.
// const [number1, number2]= arr;

//obje destructing:
//OBJE OLUSTURDUK
// const numbers = {
// a:10,
// b:20,
// c:30,
// d:50,
// e:50
// };
// 2 türlü yazdırabiliriz:
// OBJELERDE SÜSLÜ PARANTEZ KULLANILIYOR
// const {a:number1, b:number2, c:number3} = numbers;   
// console.log(number1, number2, number3);

// const {a, b, c} = numbers;   
// console.log(a, b, c);



// function destructing:
// const getLangs = () => ["python", "java", "C++"];
// const [lang1, lang2, lang3] = getLangs();
// console.log(lang1, lang2, lang3);


// const person = {
//     name: "John Doe",
//     year: 2000,
//     salary: 100,    
//     showInfos:() => console.log("bilgiler gösteriliyor"),
// }
// const {name:isim, year:yil, salary:maaş, showInfos:bilgileriGoster}= person;
// console.log(isim,yil,maaş);
// bilgileriGoster();


//spread(yaymak-yayılmak):

// const langs = ["python", "java", "C++","php"];
// console.log(langs[0],langs[1],langs[2],langs[3]);
 // yukardaki ile aynı işleve sahiptir
// console.log(...langs);

// const langs2 = ["javscript","c#",langs[0],langs[1],langs[2],langs[3]];
 //yukardaki ile aynı işlevdedir.
// const langs2 = ["javscript","c#",...langs];
// console.log(langs2);

// const numbers =[1,2,3,4,5,6,7,8,9];
// const [a,b] = numbers;

//a ve b'yi atadık geriye kalan 3,4,5,6,7,8,9'u bir array'e atamak istesek,
// const [a,b,...number2]=numbers;

// console.log (a,b);
// console.log(number2);

// const addNumbers = (a,b,c) => console.log(a+b+c);
// const number = [100,200,300];
// addNumbers( numbers[0], numbers[1], numbers[2]);
//aynı işlevde yukardakiyle:
// addNumbers(...number);


// for in ve for of döngüleri:

// const person ={
//     name: "John",
//     age: 35,
//     salary: 100

// };
// const langs = ["python", "java", "javascript", "c++",];

// const name = "John";

// // for in: object'te gezinme
// for(let prop in person){
//     console.log(prop, person[prop]);
// }

// // array üzerinde gezinme:
// for (let index in langs){
//     console.log(index, langs[index]);
// }

// //string üzerinde gezinme:
// for(let index in name){
//     console.log(index, name[index]);
// }

 // for of:

 // for of ile object üstünde dolaşamayız:
 // for ( let value of person){
//     console.log(value);
 // }

 //arraylerin değerleri üstünden dolaşırız:
// for( let value of langs){
//     console.log(value);
// }
 //string:
// for(let character of name){
//     console.log(character);
// }


// mapler - key - value (key ve value istdeiğimiz ver tiplerinden olabilir)

//map olusturma:
// let myMap = new Map();

// console.log(typeof myMap);
// const key1 ="mustafa";
// const key2= {a:10,b:20};
// const key3= ()=> 2;

// //map'e değer ekleme:
// myMap.set(key1, "string değer");
// myMap.set(key2, "object literal");
// myMap.set(key3, "function değer");

// // maplerden key'e karşılık gelen valu değeri alma:
// console.log(myMap.get(key1));
// console.log(myMap.get(key2));
// console.log(myMap.get(key3));

// // map boyutu:
// console.log(myMap.size);

// const cities= new Map();
// cities.set=("ankar,",5);
// cities.set=("ist",15);
// cities.set=("izmir",4);

// for each ile gezinme:

// cities.forEach(function(value,key) {
//     console.log(key,value);
    
// });

// //for of ile dolasma

// for(let [key,value] of cities) {
//     console.log(key,value);
// }

// // sadece key'leri almak istersek:
// for(let key of cities.keys()) {
//     console.log(key);
// }

// // sadece value yazdırma:
// for(let value of cities.values()) {
//     console.log(value);

// }

// //array'den map olusturma:
// // key'in değeri value1, key2'nin değeri value2
// const array = [["key1", "value1"], ["key2", "value2"]];
// const lastMap = new Map(array);
// console.log(lastMap);


//mapten array olusturma:
// const cities= new Map();
// cities.set=("ankar,",5);
// cities.set=("ist",15);
// cities.set=("izmir",4);

// const array= Array.from(cities);
// console.log(array);


// referans tipleri:BELLEKTEKİ YERİNE GÖRE KIYASLAMA YAPIYOR..

//primitive oldugu sadece değerleri kıyaslıyor
// let a = "ozan";
// let b = "ozan";
// if(a===b){
//     console.log("esit");
// }

// referanslar da ise bellekteki adresler kıyaslıyor
//(array1 farklı yerde array2 farklı yerde tutuluyor bunda dolayı FALSE cıktı)
// let array1 = [1,2,3,4,5,6,7,8,9];
// let array2 = [1,2,3,4,5,6,7,8,9];

// if( array1===array2 ){
//     console.log("false cıktı")
// }

// const person1={
//     name: "Adriát",
//     age: 35,
// }
// const person2={
//     name: "José",
//     age: 40,
// }
// if(person1===person2 ){
//     console.log("false cıktı")
// }


// const cities = new Map();

// bu sekilde yazdırmak istesem "array" i, cities.set=([1,2,3],"array"); ---> buradaki  [1,2,3] ile
//  console.log(cities.get([1,2,3])); buradaki [1,2,3] bellekte farklı yeri gösteriyo
// ikisi fakrlı [1,2,3]'lerdir. o yüzden BELLEKTE farklı yeri gösteriyo.

// cities.set=([1,2,3],"array");
// console.log(cities.get([1,2,3]));



// eğer bunu yapmak istiyorsak:
// const cities1 = new Map();
// const key2 = [1,2,3];
// cities1.set=(key2,"array");
// console.log(cities1.get(key2));







// SETS(KÜMELER): bir tane değeri sadece bir kere taşıma

const myset = new Set();
myset.add(100);
// 1. 100 ü ekler ama 2. yi eklemez
myset.add(100);
myset.add(3.14);
myset.add(true);
myset.add([1,2,3]);
// bu sekilde de tek satırda ekleyebiliriz
 const myset2 = new Set([100,3.14,true]);

myset.delete(true);
console.log(myset);

// has metotu:
// set içinde eleman arama
console.log(myset.has(100));
// ÖNEMLİİİİİİİİİİİİİİİİİİİİİİİİİİİİİİİİİ
// referans veri tipi old için bellekte farklı yerleri gösteriyor o yüzden false cıkıyor
console.log (myset.has([1,2,3]));

// for each:
myset.forEach(function (value) {
    console.log(value);
})

// for of:
for(let value of myset){
    console.log(value);
}

// setten array olsutrma:
const array = Array.from(myset);
console.log(array);




















































