var charLength;
var yesSpecial;
var yesNumber;
var yesUpper;
var yesLower;

specialChar = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
numberList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
//upperLetter = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
letter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
space = [];
var userPassword = [];
var pick;

//converts lower to upper
var toUpper = function (x) {
  return x.toUpperCase();
};
letter2 = letter.map(toUpper);



var get = document.querySelector("#generate");
//var passwordText = document.querySelector("#password");

// Generate password starting function
function generatePassword() {
  charLength = parseInt(prompt("Choose between 8 and 128 characters for your password." ));
  if (!charLength) {
    alert("Must add value.");
  } else if (charLength < 8 || charLength > 128) {
    charLength = parseInt(prompt("You must choose between 8 and 128"));
  } else {
    yesSpecial = confirm("Would you like to include special characters?");
    yesNumber = confirm("Would you like to include numbers?");
    yesUpper = confirm("Would you like to include uppercase letters?");
    yesLower = confirm("Would you like to include lowercase letters?");
  };
   
  //4 false choices Else statement
  if (!yesSpecial && !yesNumber && !yesUpper && !yesLower) {
    pick = alert("Select at least 1 criteria!");
  }
  //4 true choices else/if statement
  else if (yesSpecial && yesNumber && yesUpper && yesLower) {
    pick = specialChar.concat(numberList, letter, letter2);
  }
  //3 true choices else/if statement
  else if (yesSpecial && yesNumber && yesUpper) {
    pick = specialChar.concat(numberList, letter2);
  }
  else if (yesSpecial && yesNumber && yesLower) {
    pick = specialChar.concat(numberList, letter);
  }
  else if (yesSpecial && yesLower && yesUpper) {
    pick = specialChar.concat(letter, letter2);
  }
  //2 true choices else/if statement
  else if (yesSpecial && yesNumber) {
    pick = specialChar.concat(numberList);
  }
  else if (yesSpecial && yesLower) {
    pick = specialChar.concat(letter);
  }
  else if (yesSpecial && yesUpper) {
    pick = specialChar.concat(letter2);
  }
  else if (yesLower && yesUpper) {
    pick = letter.concat(letter2);
  }
  else if (yesLower && yesNumber) {
    pick = letter.concat(numberList);
  }
  else if (yesUpper && yesNumber) {
    pick = letter2.concat(numberList);
  }
  //1 true choice else/if statements
  else if (yesSpecial) {
    pick = specialChar;
  }
  else if (yesNumber) {
    pick = numberList;
  }
  else if (yesUpper) {
    pick = space.concat(letter2);
  }
  else if (yesLower) {
    pick = letter;
  }
  
  //var getNumber = confirm('Do you want numbers in you password?')
  //var getUpper = confirm('Do you want uppercase letters?') 
  //var getLower = confirm('Do you want lowercase letters?')
  

   
  
  
  

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
  if (getLower) {
    console.log("getLower is true")
    for(let i = 0;getLower.length > i; i++){
      userPassword.push(numberList[i]);
    }
  }



  passwordText.innerHTML = userPassword;
  //passwordText.value = password;
  console.log('my button is working ')

}

// Add event listener to generate button
//generateBtn.addEventListener("click", writePassword);
