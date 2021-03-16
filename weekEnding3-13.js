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
