const form = document.getElementById("film-form");
const titleElement = document.querySelector("#title");
const directorElement = document.querySelector("#director");
const urlElement = document.querySelector("#url");
const cardbody = document.querySelectorALL(".card-body")[1];
const clear =document.getElementById("clear-films");

const ui = new UI();
const storage = new Storage();

eventListeners();
function eventListeners() {
    form.addEventListener("submit", addFilm);
    document.addEventListener("DOMContentLoaded", function() {

        let films = Storage.getFilmsFromStorage();
        UI.loadAllFilms(films);
    });
    cardbody.addEventListener("click", deleteFilm);
    clear.addEventListener("click", clearAllFilms);
}

function addFilm(e) {
    const title = titleElement.value;
    const director = directorElement.value;
    const url = urlElement.value;
    if(title === "" || director === "" || url === ""){
    UI.displayMessages("tüm alanları doldurun","danger");
}
else{
    const newFilm = new Film(title, director, url);
    UI.addFilmToUI(newFilm);
    storage.addFilmTuStorage(newFilm);
    UI.displayMessages("film başarıyla eklendi","success");

}
    UI.clearInputs(titleElement, urlElement, directorElement);
    e.preventDefault();
}

function deleteFilm (e){
    if(e.targer.id==="delete-film"){
        UI.deleteFilmFromUI(e.target);
        Storage.deleteFilmFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);
        UI.displayMessages("silme işlemi tamamlandı","success");
    }
}
    function clearAllFilms() {
        if(confirm("Emin misiniz")){
           UI.clearAllFilmsFromUI();
            Storage.clearAllFilmsFromStorage();
        }         
        }
