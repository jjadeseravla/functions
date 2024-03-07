// eg of fetching data with fetch API
import fetch from 'node-fetch';

async function fetchData () {
  const res = await fetch('https://api.github.com/users/gaearon/repos');
  const data = await res.json();
  return data;
}

async function fetchDataAndLog() {
  try {
    const res = await fetchData();
    console.log(res);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

// console.log(fetchDataAndLog());

//async fn which executes a callback after finishing its async task

const asyncFn = (callback) => {
  setTimeout(() => {
    callback('done')
  }, 2000)
};

asyncFn((message) => {
  console.log('callback', message)
});


//callback allows us to wait for some async data.
//providing fn from outside and be called later


// turn this fn into a promise fn to be able to use callback fn via a promise
const asyncFunc = (callback) => {
 setTimeout(() => {
    callback(1);
  }, 3000)
} 

const promisifyAsyncFunc = () => {
  return new Promise(resolve => {
    asyncFunc((data) => {
      resolve(data);
    })
  })
}
promisifyAsyncFunc().then((result) => console.log(result));


// eg of fetching data with XMLHttpRequest

// does NOT work in node environments, you need to get axios

// const xhr = new XMLHttpRequest();

// xhr.open('GET', 'https://api.github.com/users/gaearon/repos');

// xhr.send();

// xhr.onload = function() {
//   if (xhr.status !== 200) {
//     console.log('Error' + xhr.status + xhr.statusText);
//   } else {
//     console.log('success', xhr.response);
//   }
// }

// xhr.onerror = function () {
//   console.log('xhr request failed');
// }