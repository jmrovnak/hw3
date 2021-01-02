// Assignment Code
var passLength = prompt("Please choose the number of characters you'd like your password to contain.")

if (passLength > 128 || passLength < 8) {
    alert("Your password must contain between 8 and 128 characters")
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