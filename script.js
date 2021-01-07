// Assignment Code
var passLength = prompt("Please choose the number of characters you'd like your password to contain.") 








function passChastise() {
    alert("Your password must contain between 8 and 128 characters.");
}

function passAccept() { //remove
   var lowerCase = confirm("Would you like your password to contain lowercase letters?"); //remove
   var upperCase = confirm("Would you like your password to contain uppercase letters?"); //remove
   var wholeNumber = confirm("Would you like your password to contain numeric characters?"); //remove
   var special = confirm("Would you like your password to contain special characters?"); //remove
}

function passChar() {
    alert("Please choose at least one character type."); 
}


if (passLength < 8 || passLength >128) {
    passChastise();
}

if (passLength >= 8 && passLength <= 128) {
    var lowerCase = confirm("Would you like your password to contain lowercase letters?");
    var upperCase = confirm("Would you like your password to contain uppercase letters?");
    var wholeNumber = confirm("Would you like your password to contain numeric characters?");
    var special = confirm("Would you like your password to contain special characters?");

}

if (lowerCase !== true && upperCase !== true && wholeNumber !== true && special !== true)
   passChar();


var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&*"; //

function generatePassword (length) {
    var result = ""; //define var as empty string
    var charactersLength = characters.length;
    for (var j = 0; j < length; j++ ) { //write a random password using all possible character types
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}

console.log(generatePassword(passLength)) //console test broad password writing loop

function generateFullPassword(length) {
    var fullPassword = "" //define var as empty string
    var allowed = {}; //define var as empty object
    if (lowerCase) fullPassword += Math.random(allowed.lowerCase = "abcdefghijklmnopqrstuvwxyz"); //trying to add a random value to fullPassword var
    if (upperCase) fullPassword += Math.random(allowed.upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"); //trying to add a random value to fullPassword var
    if (wholeNumber) fullPassword += Math.random(allowed.wholeNumber = "0123456789"); //trying to add a random value to fullPassword var
    if (special) fullPassword += Math.random(allowed.special = "!@#$%^&*()"); //trying to add a random value to fullPassword var

    for (var k = fullPassword.length; k < length; k++) {fullPassword += Math.floor(math.random(allowed).value);

    }

return fullPassword;

}
console.log(generateFullPassword(passLength)) // console test full password







var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)