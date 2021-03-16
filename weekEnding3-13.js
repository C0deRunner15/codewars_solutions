//March 7: (6Kyu)Detect whether or not a string is a pangram(uses the entire alphabet at least once). Return True if it is, False if not. 
function isPangram(string){
    string = string.toLowerCase();
    return "abcdefghijklmnopqrstuvwxyz".split("").every(function(x){
      return string.indexOf(x) !== -1;
    });
  }

//March 8: (8Kyu)Define a function hello that returns "Hello, Name!" to a given name, or says Hello, World! if name is not given (or passed as an empty String). 
function hello(name) {
    if(name == '' || name === undefined){
      return 'Hello, World!'
    }else{
      name = name.toLowerCase();
      return `Hello, ${name.charAt(0).toUpperCase() + name.slice(1)}!`;    
    }
  }

//March 10: (8Kyu)Write a function 'detect' that will check if a string starts with 'Can someone explain', case sensitive. Return true or false.
const detect = comment => comment.startsWith('Can someone explain');

//March 11: (8Kyu)Find the Maximum and Minimum Values of a List
const min = list => Math.min(...list);

const max = list => Math.max(...list);

//March 12: (6Kyu)Write a function that takes a string of one or more words, and returns the same string, but with all five or more letter words reversed. testCase = ('Hey fellow warriors') => returns 'Hey wollef sroirraw'
function spinWords(str){
  let wordsSplit = str.split(' ')
  for(let i = 0; i < wordsSplit.length; i++){
    let splitStr = wordsSplit[i];
    if(splitStr.length >= 5){
      splitStr = splitStr.split('').reverse().join('');
      wordsSplit.splice(i, 1, splitStr); 
    }
  }
  return wordsSplit.join(' ');
}

//March 13: (8Kyu)Write a function that takes a number, and returns the number of litres that a person will drink in that time, rounded down. For every hour, a person drinks 0.5 litres of water. 
const litres = time => Math.floor(time * 0.5);
