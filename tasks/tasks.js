function fibonacci(indexOfFibonacciSquence) {
  if (indexOfFibonacciSquence < 2) {
    return 1;
  } else {
    return fibonacci(indexOfFibonacciSquence - 2) + fibonacci(indexOfFibonacciSquence - 1);
  }
}

// console.log(fibonacci(10));

function isPalindrome(string) {
  const reversedString = string.split('').reverse().join('');
  if (string === reversedString) {
    return true;
  }
  return false;
}
// or just write return string === string.split('').reverse().join('');

// console.log(isPalindrome('hannah'))

function isAnagram(wordA, wordB) {
  function sortedWord(word) {
    return word.split('').sort().join('').toLowerCase();
  }
  return sortedWord(wordA) === sortedWord(wordB);
}

// console.log(isAnagram('silent', 'listen')); // true
// console.log(isAnagram('silen', 'listen')); // false
// console.log(isAnagram('the eyes', 'they see')); // true

function numVowelsInStr(str) {
  const vowelArr = ['a', 'e', 'i', 'o', 'u'];
  
  // let counter = 0
  // str.split('').map((letter) => {
  //   if (vowelArr.includes(letter)) {
  //     counter += 1;
  //   }
  // })
  // return counter;

  return str
    .toLowerCase()
    .split('')
    .reduce((accumulater, letter) => {
      return vowelArr.includes(letter) ? accumulater + 1 : accumulater;
    }, 0);
}

console.log(numVowelsInStr('elephant')); //3