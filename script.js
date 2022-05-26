var chars = "!#$%&()*+-/;<=>?@[\]^_{|}~";
var num = "0123456789";
var alphabet = "abcdefghijklmnopqrstuvwxyz";
var alphabetUpper = alphabet.toUpperCase();
var min = " ";


/* Define the  length of the password*/
var charLength  = function(){
  min = window.prompt("How many characters would you like in your password?");
  if(min >= 8 && min <= 128 ){
    window.alert("Your Password length is "+ min);
  }
  else {
    window.alert("Your password must be at least 8 characters and less than 129");
  return charLength();
  }  
  };


/* generatePassword function*/
var generatePassword = function() {

  charLength();


  var random = [];
  var lower = [];
  var upper = [];
  var number = [];
  var character = [];
 

  /* if statement to include lowercase letters*/
 var lowercase = window.prompt("Would you like to include lowercase letters in your password? Please answer Yes or No")
  if (lowercase === "yes" || lowercase === "YES" ){
    var lowercase = alphabet.split("").join("");
  lower.push(lowercase);
  random.push(...lower);
  console.log(random);
  
 /* if statement to include uppercase letters*/
  var uppercase = window.prompt("Would you like to include uppercase letters in your password?")
   if (uppercase === "yes" || uppercase === "YES" ){
    var uppercase = alphabetUpper.split("").join("");
  upper.push(uppercase);
  random.push(...upper);
  console.log(random.join());

 /* if statement to include numbers*/
  var numbers = window.prompt("Would you like to include numbers in your password?")
   if (numbers === "yes" || numbers === "YES" ){
    var numbers = num.split("").join("");
  number.push(num);
  random.push(...number);
  console.log(random.join());
  
 /* if statement to include special characters*/
  var characters = window.prompt("Would you like to include special characters in your password?")
if (characters === "yes" || characters === "YES" ){
  character.push(chars)
  random.push(...character);
  console.log(random.join());



  var passwordValue = "";
  
/* for loop to iterate over random array*/
for (var i = 0; i < min; i++) 
    passwordValue = passwordValue + random.join().charAt(Math.floor(Math.random() * random.join().length));

    console.log(passwordValue)
    window.alert("Your password is " +  passwordValue)

     }
    }
  } 
 }
};



