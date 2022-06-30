// Write your code below
// Return true if this word is a palindrome. false if it is not. A palindrome is a word that is spelled the same backwards and forwards.

isPalindome = (str) => {
    return str === str.split("").reverse().join("");
  };
  
  console.log(isPalindome('mom'))

//   isPalindome = (str) => {
//     let revstr = str.split("").reverse().join("");
//     if (str === revstr) {
//       console.log(true);
//     } else {
//       console.log(false);
//     }
//   };
//   isPalindome("racecar");
//   isPalindome("Racecar");


// isPalindome = (str) => return str === str.split("").reverse().join("");

// function palindrome (input) {
//     let revString = input.split("").reverse().join(""); 
//     if(input === revString){
//       return true
//     }
//     else{
//       return false
//     }
//   }
  