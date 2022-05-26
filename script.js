// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
//Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}


//Password variables
var chars = "!#$%&()*+-/;<=>?@[\]^_{|}~";
var num = "0123456789";
var alphabet = "abcdefghijklmnopqrstuvwxyz";
var alphabetUpper = alphabet.toUpperCase();
var min = " ";


//Define the  length of the password
var charLength  = function(){
  min = window.prompt("How many characters would you like in your password?");
  if(min >= 8 && min <= 128 ){
    window.alert("Your password length is "+ min + ". You will be asked to choose at least one lowercase, uppercase, numeric, and/or special characters to include in your password. Please enter 'YES' or 'NO'.");
  }
  else {
    window.alert("Your password must be at least 8 characters and less than 129");
  return charLength();
  }  
  };


//generatePassword function
var generatePassword = function() {

  charLength();


  var random = [];
  var lower = [];
  var upper = [];
  var number = [];
  var character = [];
 

  //if statement to include lowercase letters
 var lowercase = window.prompt("Would you like to include lowercase letters in your password? Please answer Yes or No")
  if (lowercase === "yes" || lowercase === "YES" ){
    var lowercase = alphabet.split("").join("");
  lower.push(lowercase);
  random.push(...lower);
  console.log(random);
  } else if(lowercase === "no" || lowercase === "NO" ){
    random.push();
  }

 // if statement to include uppercase letters
  var uppercase = window.prompt("Would you like to include uppercase letters in your password?")
   if (uppercase === "yes" || uppercase === "YES" ){
    var uppercase = alphabetUpper.split("").join("");
  upper.push(uppercase);
  random.push(...upper);
  console.log(random.join());
   } else if(uppercase === "no" || uppercase === "NO" ){
    random.push();
   }

 //if statement to include numbers
  var numbers = window.prompt("Would you like to include numbers in your password?")
   if (numbers === "yes" || numbers === "YES" ){
    var numbers = num.split("").join("");
  number.push(num);
  random.push(...number);
  console.log(random.join());
   } else if(numbers === "no" || numbers === "NO" ){
    random.push();
   }

 //if statement to include special characters
  var characters = window.prompt("Would you like to include special characters in your password?")
  if (characters === "yes" || characters === "YES" ){
  character.push(chars)
  random.push(...character);
  console.log(random.join());
  } else if(characters === "no" || characters === "NO" ){
    random.push();
  }

  var passwordValue = "";
  
//for loop to iterate over random array
for (var i = 0; i < min; i++) 
    passwordValue = passwordValue + random.join().charAt(Math.floor(Math.random() * random.join().length));

    return passwordValue;
     
};







