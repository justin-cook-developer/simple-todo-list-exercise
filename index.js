// group the elements
const homeLink = document.getElementById('home-link');
const form = document.getElementsByTagName('form')[0];
const list = document.getElementById('list');

// helper functions
function makeListItem(text) {
  const listItem = document.createElement('li');
  listItem.textContent = text;
  return listItem;
}

// add listeners
homeLink.addEventListener('click', _ => {
  alert('You are already on the home page.');
});

form.addEventListener('submit', e => {
  e.preventDefault();

  const input = e.target.elements[0];
  const inputVal = input.value;

  if (inputVal && inputVal.length) {
    list.appendChild(makeListItem(inputVal));
    input.value = '';
  }
});

list.addEventListener('click', e => {
  const { target } = e;

  if (target.tagName === 'LI') {
    target.parentNode.removeChild(target);
  }
});
