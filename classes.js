class User{
    constructor(username,email,password){
        this.username = username
        this.email = email
        this.password = password
    }

    encryptPassword(){
        return `xyz${this.password}abc`
    }
    capitalizeUsername(){
        return `${this.username.toUpperCase()}`
    }
}

const newUser = new User("Tanuj","tst@gmail.com","1234")
console.log(newUser);
console.log(newUser.encryptPassword());
console.log(newUser.capitalizeUsername());
