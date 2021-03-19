// 3-17: (8Kyu) Write a function that converts boolean values to the strings 'Yes' or 'No'.
function boolToWord( bool ){
  return bool === true ? 'Yes':'No';
}

//3-18: (8Kyu) Write a function that determines whether number n is divisible by two other numbers, x and y.
function isDivisible(n, x, y) {
  return n % x === 0 && n % y === 0
}
