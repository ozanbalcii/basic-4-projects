class Storage{

    static getSearchedUsersFromStorage(){
        // tüm kullanıcıları al
        let users;
        // amaç: öneceden arattığımız kişi varsa ekleme yapmayacak eğer null ise yapacak:
        if( localStorage.getItem("searched")==="null"){
            users = [];  // users'ı boş array olarak olsuturduk

        }
        else{
            // value(localStorage'daki value) değerini array yaptık
            // (searched olarak anahtar kelimemizi seçtik)
            users= JSON.parse(localStorage.getItem("searched"));
        }
        return users;

    }
    static addSearchedUserToStorage(username){
        //kullanıcı ekle
        // this yerine storage.getSearchedUsersFromStorage()'da kullanabilirdik ama this zaten Storage'yi gösteriyor
        let users = this.getSearchedUsersFromStorage();

        if(users.indexOf(username) === -1){ // eğer -1 varsa username yoktur. aynı arrayde birden fazla aynı değer olmayacak bunun sayesinde
            users.push(username);
        }
        //değeri güncelledik: usename array'e eklendi ve localStorage'a eklendi.
        localStorage.setItem("searched",JSON.stringify(users));
    }
    static clearAllSearchedUsersFromStorage(){
        //tüm kullanıcıları sil
        localStorage.removeItem("searched");
    }
}