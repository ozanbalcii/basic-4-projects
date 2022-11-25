class UI{
    constructor(){
        // arayüz elemenltlerini seçtik:
        this.profileDiv = document.getElementById("profile");
        this.repoDiv = document.getElementById("repos");
        this.lastUsers = document.getElementById("last-users");
        this.inputField = document.getElementById("githubname");
        //hata mesajı için seçiyoruz:
        this.cardBody = document.querySelector(".card-body");
    }
    clearInput(){
        this.inputField.value ="";
    }


    showUserInfo(user){
         // buradaki > https://api.github.com/users/mustafamuratcoskun User bilgilerini yollamaya calışacağız
        // referans aldıgımız yer : https://api.github.com/users/mustafamuratcoskun
         // profil resmine basınca profile gitmesi için : ${user.html_url}
         //    ${user.avatar_url} profil resmi için, user name için : ${user.name}
         // gibi html'de dinamik değişiklikleri ekledim aşağıda:
        this.profileDiv.innerHTML = `
        <div class="card card-body mb-3">
                    <div class="row">
                      <div class="col-md-4">
                        <a href="${user.html_url}" target = "_blank">
                         <img class="img-fluid mb-2" src="${user.avatar_url}"> </a>
                         <hr>
                         <div id="fullName"><strong> ${user.name}</strong></div>
                         <hr>
                         <div id="bio">${user.bio}</div>
                        </div>
                      <div class="col-md-8">
                            <button class="btn btn-secondary">
                                  Takipçi  <span class="badge badge-light">${user.followers}</span>
                            </button>
                            <button class="btn btn-info">
                                 Takip Edilen  <span class="badge badge-light">${user.following}</span>
                              </button>
                            <button class="btn btn-danger">
                                Repolar  <span class="badge badge-light">${user.public_repos}</span>
                            </button>
                            <hr>
                            <li class="list-group">
                                <li class="list-group-item borderzero">
                                    <img src="images/company.png" width="30px"> <span id="company">${user.company}</span>
                                    
                                </li>
                                <li class="list-group-item borderzero">
                                    <img src="images/location.png" width="30px"> <span id = "location">${user.location}</a>
                                    
                                </li>
                                <li class="list-group-item borderzero">
                                    <img src="images/mail.png" width="30px"> <span id="mail">${user.email}</span>
                                    
                                </li>
                                
                            </div>
                               
                            
                      </div>
                </div>


        
        
        
        `;

    }
    // yanlıs giriste hata mesajı:

    showError(message){
        //bootstrap ile yapılacagı için div olusturduk
        const div = document.createElement('div');
        div.className ="alert alert-danger";
        div.textContent = message;

        this.cardBody.appendChild(div); // bu divi (hata mesajını) cardBody'nin en sonuna ekledik
        setTimeout(() =>{
            div.remove();
        },2000);
    }

    showRepoInfo(repos){ // repos olarak array geleceği için bunu döndürüyoruz

        // daha onceki aratılmış bilgileri siler:
        this.repoDiv.innerHTML = "";

        repos.forEach(repo => { // aray üstünde gezincez

            // inerhtml'ine += ekleme yapacağız
            // buradan >> https://api.github.com/users/mustafamuratcoskun/repos
            //referans alarak anahtar kelimlere göre ${repo.name} bunun gibi bilgileri ekliyoruz
            this.repoDiv.innerHTML +=`
           
            <div class="mb-2 card-body">
                    <div class="row">
                        <div class="col-md-2">
                        
                        <a href="${repo.html_url}" target = "_blank" id = "repoName">${repo.name}</a>
                        </div>
                        <div class="col-md-6">
                            <button class="btn btn-secondary">
                                Starlar  <span class="badge badge-light" id="repoStar">${repo.stargazers_count}</span>
                            </button>

                            <button class="btn btn-info">
                                Forklar  <span class="badge badge-light" id ="repoFork">${repo.forks_count}</span>
                            </button>
                    
                        </div>
                </div>
                </div>
            
            `
        });
    } 


    //arayüze son aramaları ekliyoruz
    addSearchedUserToUI(username){
        let users = Stroage.getSearchedUsersFromStorage(username);
        //arrayı burda alamamızın sebebi burda da kontrol yapacak olmamız yüzündendir
        //daha onceden eklenmemiş olmasının kontrolü
        if(users.indexOf(username) === -1){
            // arayüzde bu li elementine ekleyeceğiz:
            // <!-- <li class="list-group-item">asdaskdjkasjkşdjşasjd</li> -->
            const li = document.createElement('li');
            li.className = "list-group-item";
            li.textContent = username;
            //seçtiğimiz li'ye child olarak ekliyoruz:
            this.lastUsers.appendChild(li);


        }

    }

    clearAllSearchedFromUI(){
        //1. cocuk varsa while null gelmez ve while!a girer ardından removeChild diyerek 1. cocugu siliyoruz
        // 2. cocuk ve 3. diye gider ne kadar varsa. Böylelikle hepsini siler. BOş kalınca while'a girmez
        while(this.lastUsers.firstElementChild !== null){
            this.lastUsers.removeChild(this.lastUsers.firstElementChild);
        }
    }



}