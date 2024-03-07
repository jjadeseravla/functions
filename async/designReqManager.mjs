// design a util which takes URL and a value to attempt
// a fetch req. if on failure it tries again with increasing
// delay for number of times which user has requested.
import fetch from 'node-fetch';


// const reqManager = async (url, value) => {
//   try {
//     const res = await fetch(url);
//     const data = res.json();
//   } catch (e) {
//     console.log(e);
//     let counter = 0;
//     reqManager(url, counter + 1 )
//   }
// }

const reqManager = (url, options = {}, attempts = 3) => { // curly brackets for get, post etc
  return new Promise((resolve, reject) => {
    fetch(url, options)
      .then(resolve)
      .catch((e) => {
        if (attempts === 1) {
          return reject(e);
        }
        setTimeout(() => {
          reqManager(url, options, attempts - 1)
            .then(resolve)
              .catch(reject);
        }, 3000)
      })
  })
}

const url1 = 'https://foo.com'
const url = 'https://api.github.com/users/gaearon/repos';
reqManager(url1).then((response) => {
  console.log(response);
}).catch(e => {(console.log(e))})