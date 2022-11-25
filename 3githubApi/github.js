
//SADECE VERİ ALMA İŞLEMLERİNİ YAPTIK
class Github{
    constructor() {
        this.url ="https://api.github.com/users/"
}

async getGithubData(username){
    //nameInput'dan name bilgisini alıcaz ve burda kullanıcaz.
    //promise şeklinde dönmeye çalışacak burda bunu

    // fetch bize response objesi dönecek, resolve oldugunda responseUser=resolve olacak
    const responseUser = await  fetch(this.url + username); // linkte isim yazıyor
    const responseRepo = await fetch(this.url + username + "/repos"); // linkte + isim + repos yazıyor

    // promise döndüğü için (responseUser.json) await ile beklememiz gerekiyo yine:
    const userData = await responseUser.json();// userData=user bilgileri

    const repoData = await responseRepo.json(); // repodata= repostroy bilgileri var

    // bu bilgileri app.js de kullanacaıgımız icin dönmemiz lazım
    return{
        // 2 obje döndürüyoruz burda ve response 2 adet objeyi tutacak
        user: userData,
        repo: repoData

    }
}

}