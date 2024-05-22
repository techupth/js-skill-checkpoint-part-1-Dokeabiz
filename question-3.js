// Question #3";


//let length = userPassword.length;
function checkPasswordStrength (userPassword) {
    for ( let i = 0; i <= userPassword.length; i++)
        if (userPassword.length >= 10) {return  "strong";} 
    else if (userPassword.length < 6) {return "weak";}
        else {return "Medium";}
};
        
//let userPassword = "swnalWadqQ";
//console.log(checkPasswordStrength(userPassword)); // "Strong"
let userPassword = "TechUp"
console.log(checkPasswordStrength(userPassword)); // "Medium"
//let userPassword = "abcde"
//console.log(checkPasswordStrength(userPassword)); // "Weak"
//console.log(length)
