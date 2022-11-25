// projenin arayüzüne inputtan gelen todo'ları ekleyeceğiz:

//TÜM ELEMENTLERİ SEÇTİK:

// todo'ları eklememiz için ilk olarak form'u secmeliyiz:
const form = document.querySelector("#todo-form");
//inputu sectik, inputtaki değerki ekleyeceğiz cunku
const todoInput = document.querySelector("#todo");
// ul elemenetini sececez cunku buraya eklencek:
const todoList = document.querySelector(".list-group");
// todo eklendiği zamana alert ile bildirim vercek onun için todo ekleme bölümünün card'ını secmemiz gerekiyor.
const firstCardBody=document.querySelectorAll(".card-body")[0];
const secondCardBody=document.querySelectorAll(".card-body")[1];
//todo  arama bölümünü seçelim:
const filter=document.querySelector("#filter");
const clearButton = document.querySelector("#clear-todos");

// ilk olarak todo girme bölümüne sumbit özelliği koyacağız ki butona basıldığında ekleme işlemini yapabilelim:

eventListeners();
//  eventListener'ları tüm event'leri atayacak:
function eventListeners() {
    // submit özelliğini ekleme:
   form.addEventListener("submit", addToDo);

   //LocalStorage'den verileri alıp todo olarak listelicez websayfasında
   document.addEventListener("DOMContentLoaded", localAllTodosToUI);

   //todoları arayüzden(UI) silme:
   secondCardBody.addEventListener("click", deleteToDo);

   //filtreleme yapmak için input kısmına event eklicez:
   filter.addEventListener("keyup", filterTodos);

   // tüm taskları temizle butonuna basınca temzilesin:
   clearButton.addEventListener("click", clearAllTodos);
}
function clearAllTodos(e) {
    //arayüzden todolları kaldır:
    //confirm kontrlü
    if(confirm("Silmek istediğine emin misin*")){
        // todoList.innerHTML=""; // yavaş ama kolay yöntemdir.
        // ilk cocugu veriri:
        //console.log(todoList.firstElementChild);

        // ilk cocugu siliyor: üstü üste yaparsak hepsini siler:
        // todoList.removeChild(todoList.firstElementChild);

        // null olana kadar sil yani: 
        while(todoList.firstElementChild != null) {
            todoList.removeChild(todoList.firstElementChild);
        }
        // localStorage'dan silme:
        localStorage.removeItem("todos");
    }
}

function filterTodos(e) {
    // aramayı filterelerken büyük kucuk harf olmasın dite hepsini kucuk yaptık
    const filterValue = e.target.value.toLowerCase();

    // arama bölümündeki bütün todoları seçtik
    const listItems= document.querySelectorAll(".list-group-item");
    
    //seçtiklerimizde dolaşcaz:
    listItems.forEach(function(listItem) {
        // listItem içindeki textContent'te ne var almamız gerekiyor:(yani girilenleri alcaz ki karşılaştırıp filtre yapalım)
        const text = listItem.textContent.toLocaleLowerCase();

        // kontrolü sağlıcaz -1 ise yok 0 ise var (index yapmamızın sebebi index index bakıp (harf harf) ona uygun filtreleme yapma)
        if(text.indexOf(filterValue) === -1) {
            //üstünde dolastıgımız listItem'ın display özelliğini none yapcaz ve filtreden geçemeyenler göstermicek(CSS ÖZELLİĞİ EKLEDİK)
            // d-flex özelliği ön plana cıkıp display: none'ı çalıştırtmıyo o yüzden impaortant yapıp ön plana cıkardık ve filtreleme çalıştı.
            listItem.setAttribute("style", "display:none; !important");
        }
        else{
            listItem.setAttribute("style", "display:block;");
        }



    });

}

function deleteToDo(e){

    // x'e basılınca silecek, nereye basıldıgını da öğrenme şu şekildeydi: (e.target)
    if(e.target.className === "fa fa-remove"){

    //     <li class="list-group-item d-flex justify-content-between">
    //     Todo 1
    //     <a href = "#" class ="delete-item">
    //         <i class = "fa fa-remove"></i>
    //     </a>
    // </li> 

    // bizim silmemiz gereken yapı yukardadır
    // e.target (basılması gerekn yer, .parentElement onun parenti yani a elementli, a elementinin de parentı li elementi):
    e.target.parentElement.parentElement.remove();

    // LocalStorage'dan silmek için fonku calsıtırıyoruz. NEDEN burda yazıyor: UI'dan silinir silinmez LocalStorage'dan da silinsin diye.
    deleteToDoFromStorage(e.target.parentElement.parentElement.textContent)

    showAlert("success","Todo Başarıyla Silindi");   
    }
}
function deleteToDoFromStorage(deletetodo) {
    //silmek için todos'a verileri yolladık array olarak..
    let todos = getTodosFromStorage(); 
     
    // silme kontrolü ve silme işlemi:
    todos.forEach(function(todo, index){
        if( todo === deletetodo){
          //array'den değer silindi.
          todos.splice(index, 1);
        }
    });
    // HEMEN ÜSTTE SİLDİK SONRA SON KALANLARI TEKRARDAN LOCALSTROGE'YE  GÜNCEL HALİNİ EKLEMEMİZ LAZIM
    localStorage.setItem('todos', JSON.stringify(todos));



}





function localAllTodosToUI(){
    // let her donguda ayrı bir değişken gibi davranıyordu onu karıştırma.
    // LocalStorage'a giden veriyi aldık.
    let todos = getTodosFromStorage();

    //forEach ile her bir array üstünde gezieneceğiz
    todos.forEach(function(todo){
        // hazır fonksiyon paketi ile UI(arayüze) ekliyoruz.
        addToDoUI(todo);
    });
}


function addToDo(e) {
    //inputtan alının bilgi: (trim: w3school'dan baktık, baş ve sondaki boşlukları siliyor)
    const newTodo = todoInput.value.trim();

    // inpute gelen bilgiyi sorguluyoruz:
    if(newTodo === ""){
        // alerti olusturuyoruz ve if bos girildiği için dange yaptık. ALertin fonksiyonunu olusturacağız aşağıda
        showAlert("danger","Lütfen doğru bir Todo giriş yapınız.");
        }
        else{//bos değilse ekleme yaptı.
             // inputtan alınan bilgi todolara eklemek için arayüze(UI) eklememiz gerekiyor:
             // bunun için aşağıda hazır fonskiyon paketinden olusturduk
             addToDoUI(todo);
             

             //storage ataması için:(fonksiyonu aşağıda..)
             addToDoToStorage(newTodo);

             showAlert("primary","Todo girişiniz başarılı!");
        }
    //formun default özelliğini kapattık, yoksa yenileyip duruyor.
    e.preventDefault();
}

//Storage'ye kaydetmek için fonskiyon yaptık. Bu fonksiyon genel bir fonslyion her yerde storage'ye kaytdetmek için kullanılabilir.
function getTodosFromStorage(){

     // boş bilgi mi geldi yoksa bir bilgi girildi mi kontrolü:
     let todos;

     if(localStorage.getItem("todos") === null){
         todos = [];
     }
     else{
         //veri varsa alıyor(array yapma: JSON.parse)
         todos= JSON.parse(localStorage.getItem("todos"));
     }
     return todos;
}

function addToDoToStorage(newTodo){
    // storage'ye yollama işi yapıldı.
    let todos = getTodosFromStorage(); 
    
    // gelen bilgiyi ekledik:
    todos.push(newTodo);

    // YUKARDA EKLEDİK, EKLENMİŞ HALİNİ güncellemek için:
    localStorage.setItem("todos", JSON.stringify(todos));
}

function showAlert(type, message){
    //boostrap sitesinden alertlere bakmamız lazım ve bunun aynısını JavaScript ile yazacağız:
    //     <div class="alert alert-danger" role="alert">
    //     This is a danger alert—check it out!
    //     </div>
    //bir element oluşturmamız lazım:
    const alert = document.createElement("div");


    //div'e class name ekledik. (${type} bunu eğer girilmişse yeşil yazı ile alert yanlıs girilmişse kırmızı ile yazsın diye dinamik kodladlık)
    alert.className= `alert alert-${type}`;

    // mesajını ekledik:
    alert.textContent=message;


    // olusturulan alert mesajını kart olarak eklememiz lazım, ekleyeceğimiz yer ise form'dur. Yani formun en sonuna child olarak eklersek olur:
    firstCardBody.appendChild(alert);


    // alert mesajlarının belli bir süre sonrasında kaybolması için:
    setTimeout(function() { // 2000 = 2 sn
        alert.remove();
    },2000);
    
}


// string gelen bilgiyi liste'ye dönüştürüyor ve UI'ya ekleyecek
function addToDoUI(newTodo) {  
    // ilk olarak, ul içinde hiçbir şey yok bunu oluşturmamız gerekmektedir. ul içindeki aşağıdaki yapıyı JavaScript ile kurmamız lazım.
    //   <li class="list-group-item d-flex justify-content-between">
    //                         Todo 1
    //                         <a href = "#" class ="delete-item">
    //                             <i class = "fa fa-remove"></i>
    //                         </a>

    //                     </li> 
    // yeni li elementi yaptık:
    const listItem = document.createElement("li");

    // a elementini yaptık:
    const link=document.createElement("a");
    link.href="#";
    link.className="delete-item";
    link.innerHTML= "<i class = `fa fa-remove`></i>";

    // li'ye isim class ismi verdik:
    listItem.className="list-group-item d-flex justify-content-between";

    //todo1 yazısını li'ye eklememiz lazım. cocugu old için appednChild kullandık (newTodo yazmammızın sebebi: yazacak olan şey burdaki bilgi zaten)
    listItem.appendChild(document.createTextNode(newTodo));

    // a elementi yani link'i de li içine koyduk 
    listItem.appendChild(link);
    
    // li'yi de ul'nin içine ekledik çünkü zaten onun içinde ve işlem tamamlamndı.
    todoList.appendChild(listItem);

    // todo girişi yapıyoruz ekle dedikten sonra yazdıgımız isim kalıyor, onu yok etmek için:
    todoInput.value="";


}