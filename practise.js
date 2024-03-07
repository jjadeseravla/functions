const users = [
  {
    id: 1, 
    name: 'jack',
    isActive: true,
    age:20,
  },
  {
    id: 2, 
    name: 'john',
    isActive: true,
    age: 18,
  },
  {
    id: 3, 
    name: 'mike',
    isActive: false,
    age: 30,
  }
]

const books = [
  {
    name: 'Harry Potter',
    author: 'Joanne Rowling',
  },
  {
    name: 'Warcross',
    author: 'Marie Lu',
  },
  {
    name: 'The Hunger Games',
    author: 'Suzanne Collins',
  },
  {
    name: 'Tales of Proust',
    author: 'Alain DeBotton',
  },
]


function arrOfNames(users) {
  return users.map((user => user.name));

  // const names = [];
  // for (let i = 0; i < users.length; i++) {
  //   names.push(users[i].name)
  // }
  //return names;

  // const names = [];
  // users.forEach(user => {
  //    names.push(user.name)
  // });
  // return names;
}

// console.log(arrOfNames(users));

function onlyActiveUsers(users) {
   return users.filter((user) => {
    return  user.isActive
  }).map(user => user.name)
}

// console.log(onlyActiveUsers(users));

function sortUsersByAgeDescending(users) {
  const sorted = users.sort((a, b) => {
    return b.age - a.age
  });
  return sorted.map((user) => user.name)
}

//console.log(sortUsersByAgeDescending(users));


function getArrAndElement(arr, element) {
  return [...arr, element];
}

//console.log(getArrAndElement([1, 2, 3], 'g'))

function concatenateArrs(arr1, arr2, arr3) {
  return arr1.concat(arr2, arr3);
  // return [...arr1, ...arr2];
  // return arr1.push(..arr2); push mutates array so not best approach
}

// console.log(concatenateArrs([1, 2, 3], [4, 5, 6], [7, 8, 9]))

function userWithGivenName(userName, users) {
 const checkForName = users.filter((user) => {
    return user.name === userName
  })
  return checkForName.length !== 0;

  // let exists = false;
  // for (let i = 0; i < users.length; i++) {
  //   if (users[i].name === userName) {
  //     exists = true
  //   }
  // }
  // return exists;

  // users.some((user) => { // BOOLEAN: returns true if at least some have name
  //   return user.name === userName
  // })

  // const user = users.find((user) => {
  //   return user.name === userName
  // });
  // return Boolean(user);

  // const index = users.findIndex((user) => {
  //   return user.name === userName;
  // });
  // return index >= 0;
}

// console.log(userWithGivenName('jon', users));

function removeDuplicates(arr) {
  return [...new Set(arr)]; // to give you a new arr use spread, othersiw you get a set

  // const res = [];
  // arr.forEach(item => {
  //   if (!res.includes(item)) {
  //     res.push(item);
  //   }
  // });
  //return res;

  // arr.reduce((acc, el) => { /// LEARN REDUCEEEEE
  //   return acc.includes(el) ? acc : [...acc];
  // }, []);
}

// console.log(removeDuplicates([1, 1, 2, 3, 4, 4, 1, 2, 5]))

function sortArrOfNums(arr) {
  return arr.sort((a, b) => {
    return a - b;
  })
}

// console.log(sortArrOfNums([5, 2, 1, 4, 7, 8, 7]));

function sortArrOfObjByAuthorsLastname(books) {
  const arrOfNames = books.map((book) => {
    return book.author.split(' ')[1];
    // [ 'Rowling', 'Lu', 'Collins' ]
  })
  return arrOfNames.sort(); // for sorting alphabetically, its fine
  //for sorting numerically need .sort(a, b) => a-b
}

// console.log(sortArrOfObjByAuthorsLastname(books))

function range(start, end) {
  // const res = [];
  // for (let i = start; i <= end; i++) {
  //   res.push(i);
  // }
  // return res;

  return [...Array(end - start).keys()].map(el => el + start); 
  // need map as start begins with 0;
  // this gives arr of [1, 2, 3... 49] not including the 50
}

// console.log(range(1, 50));

function shuffle(arr) {
  // make arr into obj
  // return arr.indexOf(elem => Math.random(elem))
  const arrToObj = arr.map((item) => {
    return { sort: Math.random(), value: item };
  }).sort((item1, item2) => item1.sort - item2.sort);
  // turning obj to array
  return arrToObj.map((item) => item.value)
}
// [ 3, 3, 'work', 'hello', 2, 'good' ] <--- shuffled

// console.log(shuffle(['hello', 3, 'good', 3, 2, 'work']))

function minValueAndFrequencyOfIt(arr) {
  // const sortedArr = arr.sort((a, b) => a - b);
  // let counter = 0;
  //  sortedArr.map((num) => {
  //   if (num === sortedArr[0])
  //     counter += 1;
  // });
  // return counter;

 const minValue =  Math.min(...arr); // min value of arr, Math.min cant pass the [], so use spread
  return arr.filter(el => el === minValue).length;
}

// console.log(minValueAndFrequencyOfIt([5, 2, 4, 7, 8, 7, 2, 2, 2]));
