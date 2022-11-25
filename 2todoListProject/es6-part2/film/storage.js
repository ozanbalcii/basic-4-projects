// buradaki fonk. işlevi yok, storage isimli obje olsutrup sadece prototype'ine fonk. eklicez
function Storage() {

}
Storage.prototype.addFilmToStorage = function (newFilm) {
    //aşağıda array dönen fonks'u aldık:
    let films = this.getFilmsFromStorage();

    //array'a aldıgımız yeni filmi ekleme:(içine bu sefer sadece string değil obje de yazdık)
    films.push(new Film);

    // localStorage'e yazma string olarak:
    localStorage.setItem("films",JSON.stringify(films));

}



Storage.prototype.getFilmsFromStorage = function(){
        let films;
        if(localStorage.getItem('films')=== null) {
            films = [];
        }
        else {
            //localstorage, string alabiliyordu biz burda sonradan JSON.parse ile array yaptık
            films=JSON.parse(localStorage.getItem('films'));
        }
    return films;
}

Storage.prototype.deleteFilmStorage = function (filmTitle) {


let films = this.getFilmsFromStorage();
//splice
films.forEach(function (film,index) {
    if(film.title == filmTitle) {
        //sadeec o objeyi silmiş ve localStorage'dan kaldırmıs oluyoruz
        films.splice(index,1);
    }
});

//silinmiş halini local storage'a yazdık:
localStorage.setItem("film",JSON.stringify(films));

}


// localStorage'dan TÜM filmleri siler
Storage.prototype.clearAllFilmsStorage = function () {
    localStorage.removeItem("films");
}














