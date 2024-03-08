function strToTitleCase(str) { // my way did not work :((((
  // const wordArr = str.split(' ');
  // return wordArr.map((word) => {
  //   const letters = word.split('');
  //   letters[0] = letters[0].toUpperCase();
  //   return letters.join('');
  // }).join(' ');

  // const arr = str.toLowerCase().split(' ');
  // for (var i = 0; i < arr.length; i++) {
  //   arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
  // }
  // return arr.join(' ')

  // fn above is not great as each time you are rewriting  new arr,
  // not creating a new one.  
  return str.toLowerCase()
    .split(' ')
    .map((word) => {
      return word.charAt(0)
        .toUpperCase() + word.slice(1)
    }).join(' ');
  // charAt and slice are not mutuating fns.
}

// console.log(strToTitleCase('I\'m a little tea pot'));
// console.log(strToTitleCase('sHoRt AnD sToUt'));
// console.log(strToTitleCase('HERE IS MY HANDLE HERE IS MY SPOUT'));

function convertTo24Hours(timeStr) {
  // const arr = timeStr.split('');
  // if (arr[-2] === 'a') {
  //   return timeStr;
  // } else {
  //   const firstTwoElements = arr.slice(0, 2);
  //   const restOfElements = arr.slice(2, -1);
  //   const firstNumber = parseInt(firstTwoElements.join(''), 10);
    
  // }

  const timeTextLower = timeStr.toLowerCase();
  let [hours, mins] = timeTextLower.split(':'); // this is how you name 2 variables, or you can write it like this:
  // with a let hours = '', and let mins = ''
  if (timeTextLower.endsWith('am')) {
    hours = hours === '12' ? '0' : hours;
  } else if (timeTextLower.endsWith('pm')) {
    hours = hours === '12' ? hours : String(+hours + 12); // the +hours, converts the str hours immediately to a number with the + infront of it
  }
  console.log('convertTo24Hours', timeStr, hours.padStart(2, 0));
  // if num is not 2 digits like eg 5 it will write 05, but 2 sigits already like 20 it will leave as 20
  return hours.padStart(2, 0) + ':' + mins.slice(0, -2).padStart(2, 0);
}

console.log(convertTo24Hours('12:10AM'));