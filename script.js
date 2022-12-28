// Assignment code here
//my vars 
var generateBtn = document.querySelector("#generate");
var upperCaseLetters = 'QWERTYUIOPASDFGHJKLZXCVBNM'
var lowerCaseLetters = 'qwertyuiopasdfghjklzxcvbnm'
var numbers = '1234567890'
var specialLetters = '!@#$%^&*'
var result = " ";
var textarea = document.body.children[0].children[1].children[1].children[0];
textarea.setAttribute('style', 'font-weight: bold ');


function startPassword(){
// how long does the user want the password to be
var userLength= parseInt(prompt('How many characters would you like the password to be? (must be 8-128 characters)'));

userLength = Number(userLength);
console.log(typeof(userLength));


// force user to meet the criteria 
if (userLength < 8 || userLength > 128){
 return;
}

//user pop ups for what they want their password to contain
var lowerCase = confirm('would you like your password to include lower case?');
console.log(lowerCase)
var upperCase = confirm('would you like your password to include UPPER CASE?');
console.log(upperCase);
var numeric1 = confirm('would you like your password to have numbers inside of it?');
console.log(numeric1);
var special = confirm('would you like your passwords to have special characters?');
console.log(special);
var list = "";
// boolean logic for what user wants in their password
if ( lowerCase === true){
  list += lowerCaseLetters;
  console.log(list);
}
if(upperCase === true){
  list =list + upperCaseLetters;
  console.log(list);
}
if(numeric1 === true){
  list +=numbers;
  console.log(list);
}
if(special === true){
  list += specialLetters;
  console.log(list);
}
if (list === ''){
  alert ('u must pick one of the criteria ')
  return;
}





// creating a random password 
for (let i = 0; i < userLength; i++){
  result += list.charAt(Math.floor(Math.random()*list.length))
}
console.log(result)



//displays password inside of textarea

textarea.textContent = result;







}


//event listener for generate Password 
generateBtn.addEventListener("click" , startPassword);
  

let a = document.querySelector ()