// Assignment code here
// User clicks button to generate password
// windowprompt presents prompt for password criteria selection
// User input is used to set choices for characters used, first length 8-128,
//  then selection of uppercase lowercase and special chatacters
// then validate user selection and ensure at least one type of character is selected
// gen password based on user criteria
// display or window prompt new password

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
