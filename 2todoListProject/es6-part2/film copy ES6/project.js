// butona basıldıgında ekleme işlemi için 
// 1. olarak butonun bulundugu formu seçmeliyiz:
const form = document.getElementById("film-form");
// inputları seçiyoruz:
const titleElement = document.querySelector("#title");
const directorElement = document.querySelector("#director");
const urlElement = document.querySelector("#url");
// fimleri arayüzden silmek için:
const cardbody = document.querySelectorALL(".card-body")[1];
//tüm filmleri temizleme:
const clear =document.getElementById("clear-films");


// UI objesini başlatma:(bunun sayesinde UI kısmına eklenebilecek ve UI'dan arayüze film eklicez)
const ui = new UI();

//storage objesi üret:
const storage = new Storage();


// tüm eventleri yüklemek için:
eventListeners();
function eventListeners() {
    // sumbit(butona basılması) olunca addFilm fonsk. çalışsın
    form.addEventListener("submit", addFilm);
    // sayfa yenilendiğinde localstorage'daki verieri UI'ya ekleme:
    document.addEventListener("DOMContentLoaded", function() {

        // localstorage'dan tüm arrayi almamız lazım:
        let films = Storage.getFilmsFromStorage();
        UI.loadAllFilms(films);
    });
//cardbody'de silme butonuna basıldıgında  deleteFilm çalışıyo ve silme işlemi oluyor.
    cardbody.addEventListener("click", deleteFilm);
// clear butonuna basınca clearAllFilms çalışıyor ve tüm silme işlemi gerçekleşiyor:
    clear.addEventListener("click", clearAllFilms);
}

function addFilm(e) {
    // değişkenlere, input verileri aktarılıyor:
    const title = titleElement.value;
    const director = directorElement.value;
    const url = urlElement.value;

    // inputlardan en az birine giriş yapılma kontrolü:  
    if(title === "" || director === "" || url === ""){

    // alert message:
    UI.displayMessages("tüm alanları doldurun","danger");
}
else{
    // giriş yapıldıysa, yeni film objesi olusturuldu
    // objenin yapılma sebebi, film.js'deki construction'ı çalıştırmaktır ve bu construction'a göre yazıldı obje:
    const newFilm = new Film(title, director, url);

    // üstteki film objesini UI kısmına eklenmesi:
    UI.addFilmToUI(newFilm);

    //storage'a film ekleme:
    storage.addFilmTuStorage(newFilm);

    // alert message:
    UI.displayMessages("film başarıyla eklendi","success");

}

    // input temizleme:
    UI.clearInputs(titleElement, urlElement, directorElement);
    // formun sumbit olmasını engellemek için:
    e.preventDefault();
}



function deleteFilm (e){
    //  console.log(e.target); yazmamızın sebebi: butonun hangi konumda oldugunu bulmaktır
    // buna baktıkan sonra yoruma alıyoruz. bakıldıgında a elementinin oldugunu gördük ve
    //asagıda olna göre if yapacağız
    // console.log(e.target);

    // a ya basılma kontrolü
    if(e.targer.id==="delete-film"){
        UI.deleteFilmFromUI(e.target);

        //storage'dan silme:
        // a elemnetinden itibaren (e.targer) silmek istediğimiz konuma geldik (film adına yani): bulduktan sonra yoruma aldım
        // console.log(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);
        Storage.deleteFilmFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);

        UI.displayMessages("silme işlemi tamamlandı","success");

    }

}

    function clearAllFilms() {

        if(confirm("Emin misiniz")){
            //ara yüzden silme
           UI.clearAllFilmsFromUI();
    
            //storage'dan silme:
            Storage.clearAllFilmsFromStorage();
        }
            
        }

    








































