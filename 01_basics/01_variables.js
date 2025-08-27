const accountId = 144553;
let accountEmail = "shreanshu@gmail.com";
var accountPassword = "12345";
accountCity = "Hyderabad" // Not preferred
let accountState;

// accountId = 2; // Not allowed

accountEmail = "hdfc@gmail.com";
accountPassword = "121212";
accountCity = "Jabalpur";

console.log(accountId);

/*
Prefer not to use var because of issue in block and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);