// Assignment Code
var passLength = prompt("Please choose the number of characters you'd like your password to contain.") 

//This will alert the user if password length is unacceptable
if (passLength > 128 || passLength < 8) {
    alert("Your password must contain between 8 and 128 characters")
    
}

//This will prompt the user to select preferred special character types
if (passLength <= 128 && passLength >= 8) {
    var lowerCase = confirm("Would you like your password to contain lowercase letters?")
    var upperCase = confirm("Would you like your password to contain uppercase letters?")
    var wholeNumber = confirm("Would you like your password to contain numeric characters?")
    var special = confirm("Would you like your password to contain special characters?")

}

// This will alert the user to select at least one character type
if (lowerCase !== true && upperCase !== true && wholeNumber !== true && special !== true) {
    alert("Please choose at least one character type.")
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