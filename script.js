const addButton = document.getElementById('add-button');
const inputField = document.getElementById('input-field');
const listContainer = document.getElementById('list-container');

addButton.addEventListener('click', function addTask() {
  if (inputField.value === '') {
    alert(`you must write something`);
  } else {
    let li = document.createElement('li');
    li.innerHTML = inputField.value;
    listContainer.appendChild(li);
    let span = document.createElement('span');
    span.innerHTML = '\u00d7';
    li.appendChild(span);
  }
  inputField.value = '';
  saveData();
});

listContainer.addEventListener(
  'click',
  function (a) {
    if (a.target.tagName === 'LI') {
      a.target.classList.toggle('checked');
      saveData();
    } else if (a.target.tagName === 'SPAN') {
      a.target.parentElement.remove();
      saveData();
    }
  },
  false
);
function saveData() {
  localStorage.setItem('data', listContainer.innerHTML);
}
function showTask() {
  listContainer.innerHTML = localStorage.getItem('data');
}
showTask();
