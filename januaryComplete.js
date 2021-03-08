//7 Kyu: create a function that filters a list of non-negative ints and strings and returns a new list with the strings filtered out
function filter_list(l) {
    return l.filter(Number.isFinite)// Return a new array with the strings filtered out
  }

//7 Kyu: Return the number count of vowels in a given string of lower case letters (do not include y)
function getCount(str) {
    var vowelsCount = 0;
    var vowels = ["a", "e", "i", "o", "u"];
    for(let i = 0; i < str.length; i++){
      for(let v = 0; v < vowels.length; v++){
        if(str[i] == vowels[v]){
          vowelsCount++
        }
      }
    }
    return vowelsCount;
  }

//6 Kyu: Given an array of integers, find the one that appears an odd number of times
function findOdd(A) {
    var dupeNum = 0; //created a variable to count how many times A[i] shows up in the rest of the array, A[f]
    for(i = 0; i < A.length; i++){  //first loop is to go through the entire array
      for(f = 0; f < A.length; f++){  //second loop is to cross reference A[i] with the rest of the array
        if(A[i] == A[f]){
          dupeNum = dupeNum + 1;
        }      
      }  
      if(dupeNum % 2 != 0){
          return A[i];
        }
    }
  }

//8 Kyu: Find the smallest int in an array
class SmallestIntegerFinder {
    findSmallestInt(args) {
      return Math.min(...args);
    }
  }

//8 Kyu: Create a function that takes a string s, and repeat it n number of times
function repeatStr (n, s) {
    return s.repeat(n);
  }

//8 Kyu: Find the average of an array of grade scores (integers), rounded down
function getAverage(marks){
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    var cumGrades = marks.reduce(reducer);
    return Number((cumGrades / marks.length)|0);
  }