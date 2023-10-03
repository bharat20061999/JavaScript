let gameName = "bharat"
const gameId = new String ('bh1234-1213');

const newString = gameName.substring(0,4);
// console.log(newString);

const url = "https://bharat.com/bharat%10choudhary"

console.log(url.replace('%10','-'))


console.log(gameId.split('-'));