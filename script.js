// Assignment Code
var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&*";

function generatePassword (length) {
    var result = "";
    var charactersLength = characters.length;
    for (let j = 0; j < length; j++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}

console.log(generatePassword(66))



var passLength = prompt("Please choose the number of characters you'd like your password to contain.") 



function passChastise() {
    alert("Your password must contain between 8 and 128 characters.");
}

function passAccept() {
   var lowerCase = confirm("Would you like your password to contain lowercase letters?");
   var upperCase = confirm("Would you like your password to contain uppercase letters?");
   var wholeNumber = confirm("Would you like your password to contain numeric characters?");
   var special = confirm("Would you like your password to contain special characters?");
}

function passChar() {
    alert("Please choose at least one character type."); 
}

//This will alert the user if password length is unacceptable
if (passLength > 128 || passLength < 8) {
    passChastise();
}

else {
    passAccept();
}

if (lowerCase != true && upperCase != true && wholeNumber != true && special != true) {
    passChar();
}







var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);