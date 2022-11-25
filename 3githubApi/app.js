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
    let username = nameInput.value.trim();
    if(username === ""){
        ui.showError("geçerli kullanıcı adı giriniz");
    }
    else{
        github.getGithubData(username)
        .then(response =>{
            if(response.user.message === "Not Found"){
                ui.showError("kullanıcı bulunamadı");

            }
            else{
                ui.addSearchedUserToUI(username);

                Storage.addSearchedUserToStorage(username); 
                ui.showUserInfo(response.user); 
                ui.showRepoInfo(response.repo);           
            }
             })
        .catch(err => ui.showError(err));
    }
    ui.clearInput(); 
    e.preventDefault();
}
function clearAllSearched(){
if(confirm("emin misiniz?")){
Storage.clearAllSearchedUsersFromStorage(); 
ui.clearAllSearchedFromUI(); // 
}
}
function getAllSearched(){
let users = Storage.getSearchedUsersFromStorage();
users.forEach(users =>{
    result += `<li class="list-group-item">${user}</li> `;

});
lastUsers.innerHTML=result;
}
