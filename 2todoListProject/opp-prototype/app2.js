// const emp1 = {
//     name:"ozan",
//     age: 24,
//     showInfos:function() {console.log("bilgiler gösteriliyor");}
// };
// const emp2 = {
//     name:"john",
//     age: 25
// };
 // objeye ekleme yapmak:
// emp1.salary = "4000$";

// console.log(emp1);
// emp1.showInfos;




//yapıcı fonsksiyon- constructors

// constructors ürettik burada
// function Employee(){
//     this.name ="ozan";
// }

// constructors'dan objeler ürettik
// const emp1 = new Employee();
// const emp2 = new Employee();
// console.log(emp1);
// console.log(emp2);


// YUKARDAKİNİN DAHA İYİSİİİİİİİİİİİİİİİİİİİİİİİ
// function Employee(name, age, salary){
//     this.name = name;
//     this.age = age;
//     this.salary = salary;

//     this.showInfos = function(){
//         console.log (this.name, console.log, this.age);
        
// }
// }
// const emp1 = new Employee("musatafa",24,4000);
// const emp2 = new Employee("ozan",23,4000);
// console.log(emp1);

// emp1.showInfos();
// emp2.showInfos();








// prototype:

// python, java ve c# class yapılı bir dildir fakat javascript'de classlar yoktur.
// class yazımı olsa bile bunlar arka planda prototype'e dönüştürülmektedir.

// 2 adet obje var. objelerin içinde prototype'lar var otomatik gelen(cosnole'dan bakabiliriz)
// 2 obje ama tek prototype var Yani prototype'leri ortak oluyor.
// Prototype'lerde metotları barındırıyor.
// const object = new Object();
// const object2=new Object();
// object.name = "musatafa";
// console.log(object);

 



// biz constructors olusturduk ve bundan obje ürettik 1 tane,
// bu obje  bir tane prototype sahiptir,
// en temel obje objecttir,
// ve bundan dolayı bu object'in prototype'ine sahiptir
// function Employee(name,age) { 
//       this.name = name;
//       this.age = age; 
//       obje ekkedik
//       this.showInfos=function(){
//       console.log("bigiler gösteriliyor");
//       } 
//       this.toString = function(){
//          console.log("bu bir employee objesidir")
//         } 
// }

// const emp1 = new Employee("ozan", 25);
// console.log(emp1);

// toString metotu hiçbir yerde yok ama çalıştırıldı. Prototype zincirlerine bakıyor, bulana kadar
// prototype zincirilerine bakıyor ve bulamazsa object'in prototype'ine kadar gidiyor ve burada yani
// object'te çalıştırıyor bu metotu.
// mesela, employee'ye toString objesi ekledik ve zincirlere bakarken burada buluyor toString objesini
// ve bunu çalıştırıyor. Yani employee objesi oldu.
// console.log(emp1.toString());

// ******************************************************************** 
// yani prototype bize objeler arası kalıtım yapmamızı sağlamaktadır
// yani bu ne işimize yarıyor: özellikleri veya metotları miras almamıza sağlıyor.
// her obje javascirpteki object prototype'inden miras alıyor
// ******************************************************************** 


// function Employee(name,age) { 
//     this.name = name;
//     this.age = age; 
      //obje ekkedik
//     this.showInfos=function(){
//     console.log("isim:" +this.name + "yas" + this.age);
//     } 
//     this.toString = function(){
//        console.log("bu bir employee objesidir")
//       } 
// }
// *******************************************************************
// zincir prototype mantıgına göre bu ikiside aynı metotları içeriyor
// 100 adet olsa gereksiz yer kaplar, ama prototype içine bu metotu yazarsak(yukardaki this showInfos'u)
// tüm objelerimiz  buna sahip olacak ve bu sefer 100 tane yerine 1 tane oldugu için
// belleğimizi gereksiz yere işgal etmemiş oluruz.
// *******************************************************************
// const  emp1 = new Employee("mustafa", 25);
// const  emp2 = new Employee("ozan", 21);
// console.log(emp1);
// console.log(emp2);




// gereksiz yer tutmamak için yukarda yazdıgım şeyi uygulayalım:

// function Employee(name,age) { 
//     this.name = name;
//     this.age = age; 
// }
// Employee.prototype.showInfos = function(){
//     console.log("isim:" +this.name + "yas" + this.age);
// }
//  const  emp1 = new Employee("mustafa", 25);
//  const  emp2 = new Employee("ozan", 21);

// emp2.showInfos();
// console.log(emp1);
// console.log(emp2);


// object create: prototype'i zincir prototype'lere bağlamak amacıyla kullanılır ve
// böylelikle kalıtıma katılarak metot ve özelliklere sahip olur 
// yani prototype'imizi başka objeden alıyoruz

// const obj = {
//     test1: function (){
//         console.log("test1");
//     },
//     test2: function (){
//         console.log("test2");
//     }
// }
// const emp = Object.create(obj);

//*********************************************************************** 
// bunları ekledik ve bunlarda prototype'ini nerden almıs diye baktıgımızda
// consoledan bakıldıgında test1 ve test2!den aldıkları görülmektedir.
//*********************************************************************** 
// emp.name = "0zan";
// emp.age= 24;

// console.log(emp);



// personun yapısı:
// bir tane obje var onun bir özelliği yok, bunun prototype özelliği,
// prototype'i gösteriyor ve onun içinde de 2 tane obje var onlarda objecti gösteriyor.
// function Person(){

// }
// Person.prototype.test1 = function(){
//     console.log("test1");
// }
// Person.prototype.test2 = function(){
//     console.log("test2");
// }

// employee'yi yukardaki test1 ve test2 prototype'ini miras aldıracağız
// function Employee(name,age){
//     this.name = name;
//     this.age = age;
// }
// burada prototype'leri bağladık ve özellikleri/metotları miras aldı.
// Employee.prototype = Object.create(Person.prototype);
// employee miras alınca bu da employee altında old için buda miras almıs oldu.
// Employee.prototype.mytest= function() {
//     console.log("mytest");
// }




// call(çağrı-aramak), apply(UYGULAMAK), bind(ciltlemek-bağlamak):

//obje olusturalım:
// const obj1 = {
//     number1:30,
//     number2:40
// };
// const obj2 = {
//     number1:30,
//     number2:40
// };
// function addNumbers(number3,number4){
//     console.log(this);
//     console.log(this.numerber1 + this.numerber2 + this.numerber3 + this.numerber4);
 // }
//*************************************************************** 
// addNumbers(100,200);  bunu yapınca NaN veriyor,
// bunun sebebi yukarda   console.log(this); yazdık ve window'a baktık,
// burada nnumber1 ve number2 olmadıgı için underfined'dır,
// sayılar + underfined yapınca Nan veriyor.
// bu sorunda kurtulmak için:
//*************************************************************** 
//obj1'e göre kullanılacaksa:
// addNumbers.call(obj1,100,200);
// //obj2'ye göre:
// addNumbers.call(obj2,100,200);

// // .call ile aynı işlev ve mantıkta sadece array olarak yazıoz:
// addNumbers.apply(obj1,[100,200]);
// addNumbers.apply(obj2,[100,200]);


// //bind: obj1'e göre verirsek obj1'e göre kopya fonsksiyon üretir
// function getNumbersTotal(numner3,number4){
//     return this.number1 + this.number2 + this.number3 + this.number4;
// }
// // obj1'e göre çalışan ve kopya üretiyo ve bunları istedğimiz yerde kullanabiliriz
// const copyFunc1 = getNumbersTotal.bind(obj1);
// const copyFunc2 = getNumbersTotal.bind(obj2);
// console.dir(copyFunc2);
// console.log(copyFunc2(100,200));






//  tabanlı inheritance (kalıtım)

function Person(name, age){
    this.name = name;
    this.age = age;
}
Person.prototype.showInfos = function(){
    console.log("isim:"+this.name+"yaş:"+this.age);
}
// const person = new Person("mustafa",25);
// console.log(person);

function Employee(name, age, salary) {
    //************************************************************************* */
    // this.name = name;
    // this.age = age;

    // biz impersonates yaparken, üsteki classı(person klasını) kullanmak istersek,
    //(oradaki this.name ve this.age'yi kullanıyoruz call sayesinde),
    // buradaki this artık  employee buradaki this'in yerine geçmiş olacak;
    // yoruma aldıgım name ve age'in yaptıgını tek satırda yapmacağız
    person.call(this, name,age); 
  //************************************************************************* */
    this.salary = salary;

}
//Employee'ı person prototype'ine bağladık
Employee.prototype=Object.create(Person.prototype);
// toString'i ekledik persona

Employee.prototype.toString=function() {
    console.log("Employee");
}

// ovveriding(iptal etme): kendi showInfos objemizi calsıtırmıs olduk.
Employee.prototype.showInfos=function() {
    console.log("isim:"+this.name+ "yaş:"+this.age+" "+this.salary);
}
const emp = new Employee("ozan", 1000);
// bakıldıgında person'u miras aladıgını  isim:ozanyaş:1000 BU ŞEKİLDE BASTIRMASINDAN ANLIYORUZ:
emp.showInfos();
// person'da olmasa object'e kadar gidecekti fakat person olunca onu miras aldı 
emp.toString();













