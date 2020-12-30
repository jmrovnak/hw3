// Assignment Code

var passLength = prompt("How many characters would you like your password to contain?")

if (passLength < 8) {
    alert("Fatal Error. Choose more characters or evacuate immediately.")
}

if (passLength > 128) {
    alert("Silly rabbit. Too many characters are for losers.")
}





var generateBtn = document.querySelector("#generate")

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);