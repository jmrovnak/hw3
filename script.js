// Assignment Code
var passLength = prompt("Please choose the number of characters you'd like your password to contain.") 

if (passLength > 128 || passLength < 8) {
    alert("Your password must contain between 8 and 128 characters")
}

if (passLength <= 128 && passLength >= 8) {
    var lowerCase = prompt("Would you like your password to contain lowercase letters?")
    var upperCase = prompt("Would you like your password to contain uppercase letters?")
    var wholeNumber = prompt("Would you like your password to contain numeric characters?")
    var special = prompt("Would you like your password to contain special characters?")





var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);