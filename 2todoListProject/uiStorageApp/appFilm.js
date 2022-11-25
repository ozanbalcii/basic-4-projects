//film ekle butonuna basınca film eklemesi gerektiğinden ilk olarak ekle butonunun oldugu
// yerdeki formu seçeceğiz:

const form = document.getElementById("film-form");

// daha sonra 3 tane inputu alıyoruz:
const titleElement= document.querySelector("#title");
const directorElement = document.querySelector("#director");
const urlElement = document.querySelector("#url");

//UI objesini başlatma:
const ui= new UI();

// tüm eventleri yüklemek için:
eventListeners();
function eventListeners() {
// butona basınca sumbit oluyo ve addFilm fons çalışssın:
 form.addEventListener("sumbit", addFilm);
}
function addFilm(e) {
    // inputların değerini alıyoruz:
    const title = titleElement.value;
    const director = directorElement.value;
    const url = urlElement.value;
    // inputların hepsinin boş/dolu olma kontrolünü yapıyoruz:
    if(title ===""||director ===""||url ===""){

    }
    else{
        //yeni obje olusturduk. Yani filmlerden bir tanesi olustu.
        const newFilm=new Film(title,director,url);
        // arayüze filmi ekledik:
        ui.addFilmToUI(newFilm);
    }






    // formun sumbit olmasını engellemek için:
    e.preventDefault();
}











































