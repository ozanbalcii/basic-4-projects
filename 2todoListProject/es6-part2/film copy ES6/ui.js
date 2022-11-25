// statik fonskyion olarak fonskiyonları yazacağız
class UI{

    static addFilmToUI(newFilm){
        console.log(newFilm);
            
        /*<!-- <tr>
        <td><img src="" class="img-fluid img-thumbnail"></td>
        <td></td>
        <td></td>
        <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
        </tr> --> */
        
        // filmi UI'a getirmek için yukardaki yapıyı olusturmamız gerekiyor
        // ilk olarak afiş-isim-yönetmen kısmını seçelim
        const filmList = document.getElementById('films');
        
        // burada da yukardaki html yapsını ekledik ve ${newFilm.url}, ${newFilm.title}, ${newFilm.director
        // eklemiş olduk:
        filmList.innerHTML += `
        
        <tr>
            <td><img src="${newFilm.url}" class="img-fluid img-thumbnail"></td>
            <td>${newFilm.title}</td>
            <td>${newFilm.director}</td>
            <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
        </tr> 
        
        `; 
        }
        
        // input botunlarının içini temizlemek için:
        static clearInputs (element1, element2, element3) {
        element1.value = '';
        element2.value = '';
        element3.value = '';
        }
        
        
        //alert mesajları için:
        static displayMessages (message,type){
            // alert mesajı için 1. card body'i seçmemiz lazım:
            const cardBody = document.querySelectorAll('.card-body')[0];
        
            // alert divini olusturma:
            const div = document.createElement('div');
            div.className = `alert alert-${type}`;
            div.textContent= message;
        
            //child olarak ekledik:
            cardBody.appendChild(div);
        
            //alert mesajının belli süre sonra kaybolması için:
            setTimeout(function(){
            div.remove();
            },2000);
        
        }
        
        static loadAllFilms (films){
            //film listesine filmleri yüklemek için ilk seçim yapmamız lazım yine:
            const filmList= document.getElementById('films');
            films.forEach(function(film){
        
            //storage'dan alıp arayüze atmış oluyoruz:
            filmList.innerHTML += `
        
        <tr>
            <td><img src="${Film.url}" class="img-fluid img-thumbnail"></td>
            <td>${Film.title}</td>
            <td>${Film.director}</td>
            <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
        </tr> `;
        
            });
        
        }
        static deleteFilmFromUI (element) {
            // a=element elementine göre siliecek 2 adımda geldik(element.parentElement.parentElement)
             element.parentElement.parentElement.remove();
        }
        
        static clearAllFilmsFromUI(){
        
            const filmList = document.getElementById("films");
        
            while(filmList.firstElementChild !==null){
                filmList.firstElementChild.remove();
               
            }
            
        }
        


    

}























