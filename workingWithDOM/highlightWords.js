// Highlight all words above 8 characters in HTML paragraph:
const paragraph = document.querySelector('p');
// Not getElemendById
// Once you have innerHTML use normal JS:
paragraph.innerHTML.split(' ')
  .map(word => {
    return word.length > 8 ?
      `<span style=“background-colour: yellow’> ${word}</span>`
      : word
  }).join(' ');

// add link back to the source of the text after paragraph tag:
const link = document.createElement('a');
link.href = 'https://forcemipsum.com/';
link.innerText = 'text generated from lorem ipsum';

// split each new sentence on a separate line in the paragraph text.

const theParagraph = document.querySelector('p');
theParagraph.innerHTML =
  theParagraph.innerHTML.split('.').join('.</p><p>') + ('</p>');

//implement a click on todo item asap
const items = document.querySelecftorAll('.item');
items.forEach((item) => {
  return item.addEventListener('click', () => {
    console.log('you clicked on item: ' + item.innerText);
  })
})

// forEach is not good for performance if list was massive, so instead:
// find parent of your list:
const app = document.querySelector('.todo-app');
app.addEventListener('click', (e) => {
  if (e.target && e.target.classList.contains('item')) {
    console.log('you clicked on item: ' + e.target.innerText);
  }
})
// this is way faster as not generating loads of listeners per item, but just
//one listener on the parent item of the list instead
