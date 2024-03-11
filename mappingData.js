// map data to frontend format. the main element is location key and we need
//to map all data to it, having 5 objects at the end

const loc = [
  {
    location_key: [32, 22, 11],
    autoassign: 1,
  },
  {
    location_key: [41, 42],
    autoassign: 1,
  },
];

const bulkConfig = [
  {
    data_values: {
      config_key: 100,
    },
  },
  {
    data_values: {
      config_key: 200,
    },
  },
];

// [{config_key: 100, location_key: 32, autoassign: 1}, {config_key:100, location_key: 22, autoassign: 1}] .. etc
// get an array with 5 objects

function mapData(loc, bulkConfig) {
  // return [...loc[0].Object.values(location_key), ...bulkConfig[0].Object.values(data_values)
  // ];
  const result = loc.map((locEl, index) => {
    return locEl.location_key.map((locationKey) => {
      return {
        location_key: locationKey,
        config_key: bulkConfig[index].data_values.config_key,
        autoassign: locEl.autoassign,
      }
    })
  });
  return result.reduce((arr, acc) => {
    return arr.concat(acc) // flatten array
  }, []);
}

// console.log(mapData(loc, bulkConfig));

function replaceParametersInUrl(urlStr, arrOfObjects) {
//   let res = urlStr;
//   arrOfObjects.forEach(obj => {
//     const param = `:${obj.from}`
//     while (res.includes(param)) {
//       res = res.replace(param, obj.to);
//     }
// });
  // return res;

  //mutating reduce too much
  return arrOfObjects.reduce((acc, replacement) => {
    return acc.replace(':' + replacement.from, replacement.to);
  }, urlStr)
}

console.log(replaceParametersInUrl(
  '/posts/:postId/comments/:commentId', [
  {from: 'postId', to: '1'},
  {from: 'commentId', to: '3'}, ,
]));