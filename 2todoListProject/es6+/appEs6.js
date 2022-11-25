//es6-sınıflar:


// eski yöntem:
// function Empolyee(name,age,salary){
//     this.name=name;
//     this.age=age;   
//     this.salary=salary; 
// }

// Empolyee.prototype.showInfos = function(){
//     console.log("isim:" +  this.name+"yas:"   + this.age  + "maai:" + this.salary);
// }

// const emp = new Empolyee("mustafa",25,4000);
// console.log(emp)




// yeni-es6:
// class Empolyee{
//     constructor(name, age, salary){
//         this.name=name;
//         this.age=age;
//         this.salary=salary;
//     }
//     showInfos(){
//         console.log("isim:" +  this.name+" yas:"   + this.age  + " maaş:" + this.salary);
//     }
// }
// const emp = new Empolyee("mustafa",25,4000);
// emp.showInfos();













// es6-statik metotlar: durağan metotlardır. eğer class içinde statik metot olusturursak,
// obje olusturmasak bile bunları kullanabiliyoruz

// class Matematik {
//     cube(x){
//         console.log(x*x*x);
//     }
// }//obje olusturduk:
// const math = new Matematik();
// math.cube(3);
// console.log(math);

// obje olusturmustuk ve classı kullandık fakat obje olusturmadan classı kullanmak isteyebiliriz,
//eğer class içinde statik metot olusturursak,
// obje olusturmasak bile bunları kullanabiliyoruz:

//static metotunu yazarak, obje olusturmadan class'ı kullandık:
// class Matematik {
//     sqrt(x){
//         console.log(x*x);
//         }
    
//     static cube(x){
//         console.log(x*x*x);
//     }
// }
//static kullandık ve objesiz kullanabildim.
// Matematik.cube(3);

// sqrt'te static kullanmadım ve obje olusturarak kullandım 
// const math = new Matematik();
// console.log(math);
// math.sqrt(4);

//mesela asagıda yazılanlarda objesiz kullanıldıgından static yazılmıstır:
// Math.sqrt();
// Object.create();








//Inheritance:

class Person{ //******** SuperClass, BaseClass ***********
    constructor(name,age){
        this.name = name;
        this.age = age;

    }
    showInfos(){
        console.log("isim:" +  this.name+" yas:"   + this.age);
    }    
}
// extends metodu ile Person class'ının bütün özellikleri yeni olusturdugum Empolyee classına, 
// Inheritance oldu
class Empolyee extends Person{//*** */ DerivedClass, SubClass, ChildClass***************
constructor(name, age, salary){
    // this.name=name;
    // this.age = age;

    // yoruma aldıgım kısma ihtiyacım kalmıyor, Inheritance ettiğim class'taki,
    // constructor'ı kullanmıs oluyorum
    super(name,age);
    // burdada Inheritance ettiğim class'taki, showInfos'u kullanmıs oluyorum
    super.showInfos();
    this.salary = salary;


     //EKSTRA METOT KULLANIMI (MİRAS INHERITENCE ÖZELLIKLERI KULLANMADAN)
    // kendi showInfo'u kullancaksak:(YANİ MİRASTAN KULLANMADAN)
    showInfos(){     //overriding(ağır basan)
    console.log("isim:" +  this.name+" yas:"   + this.age);
    }
    // kendi toString'imizi kullancaksak:(YANİ MİRASTAN KULLANMADAN)
    toString(){      //overriding(ağır basan)
        console.log("empolyee");
    }
    raiseSalary(amount){    //overriding(ağır basan)
        this.salary+amount;
    }
}
}
const emp = new Empolyee("mustafa",25,5000);
emp.raiseSalary(600);
emp.showInfos();
emp.toString();
//object:












































