class User{
    constructor(email,password){
        this.email = email
        this.password = password
    }

    get password(){
        return this._password
    }
    set password(value){
        this._password=value
    }
}

const chai = new User("tst@gmail.com","123")
console.log(chai.password);
