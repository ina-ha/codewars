/* Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

Examples
pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !
*/

function pigIt(str){
    let arr = str.split(' ');
     let newStr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].match(/^[A-Za-z]+$/)) {
let wordArr = arr[i].split('');
let letter = wordArr.shift();
wordArr.push(letter, 'ay');
let word = wordArr.join("");
newStr.push(word);}
    
   else {
    newStr.push(arr[i])
   }
}
     return newStr.join(" ");
     }