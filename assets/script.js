// User clicks button to generate password
function generatePassword() {

  // windowprompt presents prompt for password criteria selection
  
  alert ("Choose Password Generation Criteria")
  
  // User input is used to set choices for characters used, first length 8-128,
  
  var length = prompt ("Choose Password character length by typing a number 8-128")   
  
    console.log(length);

  //  then selection of uppercase lowercase and special characters

  var promptUpper = prompt

    ('Would you like to INCLUDE or OMIT the use of uppercase characters? Enter "include" or "omit" to choose.');
 
      console.log(promptUpper)
 
  // validate prompt answer
 
  if (promptUpper === "" || promptUpper === null) {
 
     alert("Please try again");
 
      return generatePassword();
 
  }
 
  promptUpper = promptUpper.toLowerCase();
 
  if (promptUpper === "omit") {
 
    // confirm user wants to omit Upper Case Characters
 
    var confirmOmit = confirm("Are you sure you'd like to omit uppercase?");

    // if yes (true), omit uppercase characters
 
    if (confirmOmit) {
 
      alert("Your password will omit uppercase characters");
   
    }
  
  }

  var promptLower = prompt

    ('Would you like to INCLUDE or OMIT the use of lowercase characters? Enter "include" or "omit" to choose.');
 
      console.log(promptLower)
 
  // validate prompt answer
 
  if (promptLower === "" || promptLower === null) {
 
     alert("Please try again.");
 
      return generatePassword();
 
  }
 
  promptLower = promptLower.toLowerCase();
 
  if (promptLower === "omit") {
 
    // confirm user wants to omit Upper Case Characters
 
    var confirmOmit = confirm("Are you sure you'd like to omit lowercase?");

    // if yes (true), omit uppercase characters
 
    if (confirmOmit) {
 
      alert("Your password will omit lowercase characters");
   
    }
  
  }
  
  var promptSpecial = prompt
  
  ('Would you like to INCLUDE or OMIT the use of special characters? Enter "include" or "omit" to choose.');
  
  console.log(promptSpecial)
  
  // validate prompt answer
  
  if (promptSpecial === "" || promptSpecial === null) {
    
    alert("Please try again.");
    
    return generatePassword();
    
  }
  
  promptSpecial = promptSpecial.toLowerCase();
  
  if (promptSpecial === "omit") {
    
    // confirm user wants to omit Upper Case Characters
    
    var confirmOmit = confirm("Are you sure you'd like to omit special characters?");
    
    // if yes (true), omit uppercase characters
    
    if (confirmOmit) {
      
      alert("Your password will omit special characters");
      
    }
    
  }

  var promptNumbers = prompt
  
  ('Would you like to INCLUDE or OMIT the use of numerical characters? Enter "include" or "omit" to choose.');
  
  console.log(promptNumbers)
  
  // validate prompt answer
  
  if (promptNumbers === "" || promptNumbers === null) {
    
    alert("Please try again.");
    
    return generatePassword();
  }
  
  promptNumbers = promptNumbers.toLowerCase();
  
  if (promptNumbers === "omit") {
    
    // confirm user wants to omit Upper Case Characters
    
    var confirmOmit = confirm("Are you sure you'd like to omit numerical characters?");
    
    // if yes (true), omit numerical characters
    
    if (confirmOmit) {
      
      alert("Your password will omit numbers");
      
    }
    
  }
  
  //if var yes, add 1 to counter 
  
  
  
  // then validate user selection and ensure at least one type of each user prompted character is selected
function validatePassword() {
  var password = 
  // if counter is more than one we good homie

}
  
};
  
  
  // ?*if counter is still 0 return to gen pass and start over*
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