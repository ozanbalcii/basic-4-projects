
// APP.JS'DE İSE UI, STORAGE,GITHUB.JS'LERDEİ ŞEYLERİ KULLANDIK VE PROJEYİ MODÜLER HALE GETİRDİK

//element seçme:
const githubForm = document.getElementById("github-form");
const nameInput = document.getElementById("githubname");
const clearLastUsers = document.getElementById("clear-last-users");
const lastUsers = document.getElementById("last-users");
const github = new Github();
const ui = new UI();

addEventListener();
function addEventListener(){


    githubForm.addEventListener("submit", getData);
    clearLastUsers.addEventListener("click",clearAllSearched);
    document.addEventListener("DOMContentLoaded",getAllSearched);
}

function getData(e){
    //username aldık
    let username = nameInput.value.trim();
    if(username === ""){
        ui.showError("geçerli kullanıcı adı giriniz");
    }
    else{
        // github classı' async oldugu için ve obje döndürdüğü için promise yapısı (.then) ile response'u yakalamamız lazım
        github.getGithubData(username)
        //.then(response => console.log(response.user))  sadece user bilgileri gelir
        .then(response =>{
            if(response.user.message === "Not Found"){
                ui.showError("kullanıcı bulunamadı");

            }
            else{
                 //arayüze son aramaları ekliyoruz:
                ui.addSearchedUserToUI(username);// ui içinde stroge kullandık. Bunu html dosyasında dosyaları eklerken ui storage'nin altında kalacak şekilde yazdık bu olmasaydı hata verirdi.          

                Storage.addSearchedUserToStorage(username); // arattıgım kişi storage'a gelecek

                // buradaki response'da 2 obje yolladık ve bu ikisini tutuyor
                // console.log(response);
            
                ui.showUserInfo(response.user); // arayüze response'da tutulan bilgileri yolladık
                ui.showRepoInfo(response.repo);// arayüze repo bilgilerini eklemek
                
            }


             })
        .catch(err => ui.showError(err));
    }


    ui.clearInput(); // isim girildiğinde silsin
    e.preventDefault();
}
function clearAllSearched(){
// tüm arananları temizle
if(confirm("emin misiniz?")){
Storage.clearAllSearchedUsersFromStorage(); //storage'dan temizler
ui.clearAllSearchedFromUI(); // bunu olusturduk ve ui'da da bu classımızı olusturmaya gidiyoruz
}

}

function getAllSearched(){
//arananları storage'dan al ve UI'ya ekle

// son arananları sayfa yenilendiğinde gitmesin diye UI'ya ekliyoruz:
let users = Storage.getSearchedUsersFromStorage();
// her bir uaserı almak için:
users.forEach(users =>{
    //  <li class="list-group-item"></li> 
    result += `<li class="list-group-item">${user}</li> `;

});
lastUsers.innerHTML=result;
}