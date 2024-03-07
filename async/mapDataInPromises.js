// you have 2 fns which return promises.
// map data from users to userStatuses, to get arr of users
// with id, name and isActive.

const users = [
  {
    id: 1, 
    name: 'jack',
  },
  {
    id: 2, 
    name: 'john',
  },
  {
    id: 3, 
    name: 'mike',
  }
]

const userStatuses = [
  {
    id: 1,
    isActive: true,
  },
  {
    id: 2,
    isActive: true,
  },
  {
    id: 3,
    isActive: false,
  },
]

const getUsers = () => {
  return new Promise(((resolve) => {
    resolve(users);
  }));
};

const getUserStatuses = () => {
  return new Promise((resolve) => {
    resolve(userStatuses);
  })
}

// // solution1: fetch 1 and then fetch the other
// getUsers().then(users => {
//   getUserStatuses().then(userStatuses => {
//     const mappedUsers = users.map((user) => {
//       const isActive = userStatuses.find(
//         (userStatus) => userStatus.id === user.id
//       ).isActive;
//       return { ...user, isActive };
//     });
//     console.log(mappedUsers);
//   })
// });

// // solution 2: call both promises in parallel, but using Promise.all, and remember must be in arr and spits back arr
// Promise.all([getUsers(), getUserStatuses()]).then(([users, userStatuses]) => {
//   const mappedUsers = users.map((user) => {
//     const isActive = userStatuses.find(
//       (userStatus) => userStatus.id === user.id
//     ).isActive;
//     return { ...user, isActive };
//   });
//   console.log(mappedUsers);
// });

// // solution 3: remove const out and call it in
// const mapUsers = (users, userStatuses) => {
//   return users.map((user) => {
//     const isActive = userStatuses.find((userStatus) => {
//       return userStatus.id === user.id
//     }).isActive;
//     return { ...users, isActive };
//   })
// }

// Promise.all([getUsers(), getUserStatuses()]).then([users, userStatuses]) => {
//   const mappedUsers = mapUsers(users, userStatuses);
//   console.log(mappedUsers);
// }

//write previous fn as an async await fn
// async function getMappedUsers() {
//   const getU = await getUsers();
//   const getUS = await getUserStatuses();
//       const mappedUsers =  getU.map((user) => {
//         const isActive = getUS.find(
//           (userStatus) => userStatus.id === user.id
//         ).isActive;
//         return { ...user, isActive };
//       });
//   console.log(mappedUsers); 

// }

const getMappedUsers = async () => {
  try {
    const users = await getUsers();
    const userStatuses = await getUserStatuses();
        const mappedUsers =  users.map((user) => {
          const isActive = userStatuses.find(
            (userStatus) => userStatus.id === user.id
          ).isActive;
          return { ...user, isActive };
        });
    console.log(mappedUsers); 
  } catch (e) {
    console.log(e)
  }

}

console.log(getMappedUsers());
// Promise { <pending> }
// [
//   { id: 1, name: 'jack', isActive: true },
//   { id: 2, name: 'john', isActive: true },
//   { id: 3, name: 'mike', isActive: false }
// ]