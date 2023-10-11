/* 
Write a function that takes in a string of one or more words, and returns the same string, 
but with all five or more letter words reversed (Just like the name of this Kata). 
Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

Examples:

spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" 
spinWords( "This is a test") => returns "This is a test" 
spinWords( "This is another test" )=> returns "This is rehtona test"
*/




// Refactored solution //
function spinWords(string){
    let array = string.split(' ');
       let newString = array.map(word => word.length > 4 ? word.split('').reverse().join('') : word).join(' ');
       return newString;
   }

// Initial solution //
function spinWords(string){
    const array = string.split(' ')
    let newString = '';
     
     for (let i = 0; i < array.length; i++) {
       let word = array[i];
       let reversed = '';
       if (word.length > 4) {
       for (let i = word.length - 1; i >= 0; i--) {
       reversed += word[i];  
       }
       newString += reversed;
       }
       else {
       newString += word;
       }
       if ( i < array.length - 1 ) {
       newString += ' ';
       }
   
     }
    return newString;
   }