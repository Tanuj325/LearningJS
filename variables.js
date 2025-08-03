const accountId = 144553;
let accountEmail = "tanujsinghthakur9999@gmail.com";
var accountPassword = "12345";
accountCity = "Meerut";

console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity]);

// accountId=11230050 //not allowed
accountEmail = "tst9999@gmail.com";
accountPassword = "568978451223";
accountCity = "Delhi";

console.table([accountId, accountEmail, accountPassword, accountCity]);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/
