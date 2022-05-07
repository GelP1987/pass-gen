// global variables up here
var generateBtn = document.querySelector("#generate");
var lowcaseLet = 'abcdefghijklmnopqrsuvwxyz'
var upcaseLet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
var numOpt = '0123456789'
var specOpt = "!()*+,-./:;<=>?@[^_`{|}~"
// User clicks button to generate password
function generatePassword() {
   // windowprompt presents prompt for password criteria selection
  // Inputs to set choices for characters used. 1st length, 8-128 to ensure pass length reqs are met

  var length = prompt('Select password length 8-128')
  if (length === "" || length === null) {
    alert("Not an acceptable answer. Please try again and re-enter selection as explained in prompt.");
    return generatePassword();

 }
 length = parseInt(length);
 if ((length) < 8 || length > 128) {
   alert ('Password length must be between 8 & 128 characters!')
   return''
 }
 
  var validCharacters = '';
  var specialChars = confirm ('Do you want Special Characters?')
  var numbers = confirm ('Do you want to use Numbers?')
  var lowercase = confirm('Do you want Lowercase Characters?')
  var uppercase = confirm ('Do you want to use Uppercase Characters?')
    
if (!specialChars && !lowercase && !uppercase && !numbers) {
  alert('Page cannot generate a password with no options selected. Try again.');
  return generatePassword();
}
  // then validate user selection and ensure at least one type of each user prompted character is selected
if  (specialChars) {
  validCharacters += specOpt;
} 
if  (lowcaseLet) {
  validCharacters += lowcaseLet;
}  
if  (upcaseLet) {
validCharacters += upcaseLet;
}  
if  (numOpt) {
validCharacters += numOpt;
} 
// for length of password find random character from validCharaters and add that to build one
var password ='';
for (let i=0; i < length; i++) {
var randomNumber = Math.floor(Math.random()* validCharacters.length);
  password += validCharacters.charAt(randomNumber);
}
return password;
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