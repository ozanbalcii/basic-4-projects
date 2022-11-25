function Storage {


    static addFilmToStorage  (newFilm) {
        //aşağıda array dönen fonks'u aldık:
        let films = this.getFilmsFromStorage();
    
        //array'a aldıgımız yeni filmi ekleme:(içine bu sefer sadece string değil obje de yazdık)
        films.push(newFilm);
    
        // localStorage'e yazma string olarak:
        localStorage.setItem("films",JSON.stringify(films));
    
    }
    
    
    
    static getFilmsFromStorage (){
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
    
    static deleteFilmStorage  (filmTitle) {
    
    
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
    static clearAllFilmsStorage  () {
        localStorage.removeItem("films");
    }
    
    
    
    
    





}










