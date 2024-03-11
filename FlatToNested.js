// transform flat list to nested list

const flatList = [
  {
    id: 1,
    name: 'lvl 1 item 1',
    parentId: null,
  },
  {
    id: 2,
    name: 'lvl 1 item 2',
    parentId: null, // null parentId makes id top level and lvl 1
  },
  {
    id: 3,
    name: 'lvl 2 item 3', // lvl 2 nested inside and item 3 means id: 3
    parentId: 1,
  },
  {
    id: 4,
    name: 'lvl 3 item 4',
    parentId: 3,
  },
  {
    id: 5,
    name: 'lvl 2 item 5',
    parentId: 2,
  },
]

const res = [
  {
  id: 1,
  children: [
    {
      id: 3,
      children: [
          {
            id: 4,
            children: []
          }
        ]
      }
    ]
},
{
  id: 2,
  children: [
      {
        id: 5,
        children: [],
      }
    ]
  }
]

const addChildren = (item) => {
  // want to add children to every root element
  // console.log(flatList, 'flatList')
  const children = flatList.filter((childItem) => childItem.parentId === item.Id);
  // console.log(children, 'children');

  let nestedChildren = [];
  if (children.length > 0) {
    // loop through each child and call children function with this child
    nestedChildren = children.map((child) => addChildren(child))
  }
  return Object.assign({}, item, { children: nestedChildren });
}

function nested(flatList) {
  // find all elements where parentId is null
  const nestedList = flatList.filter((obj) => {
    return obj.parentId === null
  }).map(addChildren); // calling it recurseively 
  return nestedList;
}

console.log(nested(flatList))