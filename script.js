var numberList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
var upperLetter = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var lowerLetter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var userPassword = []
//var specialChar = [','"','#','$','%','&',','(',')','*','+','-','.','/',':',';','<','=','>','?','@','[','\',']',']
// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");
//let helloDivgenerateBtn = document.getElementById('helloDiv')/
//let classDiv = document.getElementsByClassName('classDiv')

// Write password to the #password input
function writePassword() {
  alert("Let's make a password!"); 
  var getNumber = confirm('Do you want numbers in you password?')
  var charLength = prompt('How many characters in your password?')
  var getUpper = confirm('Do you want uppercase letters?') 
  //var password = generatePassword();
  
  console.log(getNumber); 
  console.log(charLength);

  if (getNumber) {
    console.log("getNumber is true")
    for(let i = 0;numberList.length > i; i++ ){
        userPassword.push(numberList[i]); 
    }
    console.log(userPassword)
   
  }

  if (getUpper) {
    console.log("upperLetter true")
    for(let i = 0;upperLetter.length > i; i++ ){
      userPassword.push(upperLetter[i]); 
  }
  }

  passwordText.innerHTML = userPassword;
  //passwordText.value = password;
  console.log('my button is working ')

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//let 
//var
//const 


