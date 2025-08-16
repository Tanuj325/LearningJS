function setUsername(username){
    this.username = username
}

function createUser(username,email,password){
    setUsername.call(this,username)
    this.email = email
    this.password = password
}

const chai = new createUser("Tanuj","tst9999@gmail.com","12345678")
console.log(chai);
console.log(chai.username);
