// const addButton = document.getElementById('add-button');
// const inputField = document.getElementById('input-field');
// const listContainer = document.getElementById('list-container');

// addButton.addEventListener('click', function addTask() {
//   if (inputField.value === '') {
//     alert(`you must write something`);
//   } else {
//     let li = document.createElement('li');
//     li.innerHTML = inputField.value;
//     listContainer.appendChild(li);
//     let span = document.createElement('span');
//     span.innerHTML = '\u00d7';
//     li.appendChild(span);
//   }
//   inputField.value = '';
//   saveData();
// });

// listContainer.addEventListener(
//   'click',
//   function (a) {
//     if (a.target.tagName === 'LI') {
//       a.target.classList.toggle('checked');
//       saveData();
//     } else if (a.target.tagName === 'SPAN') {
//       a.target.parentElement.remove();
//       saveData();
//     }
//   },
//   false
// );
// function saveData() {
//   localStorage.setItem('data', listContainer.innerHTML);
// }
// function showTask() {
//   listContainer.innerHTML = localStorage.getItem('data');
// }
// showTask();

const sum = (a, from, to) => a.slice(from, to).reduce((a, b) => a + b, 0);
const findEvenIndex = (a) =>
  a.findIndex((el, i) => sum(a, 0, i) === sum(a, i + 1));

const input = [10, 5, 0, 5, 10];

const outputFindIndex = findEvenIndex(input);
console.log(outputFindIndex);

const person = {
  name: 'Elibaba',
  address: 'Lekki phase 1',
  school: 'Harvard University',
  work: 'Google',
  Todo: {
    todo1: 'Put God first',
    todo2: 'Learn JavaScript in the morning',
    todo3: 'Learn JavaScript in the afternoon',
    todo4: 'Learn JavaScript at night',
  },
};

// Destructure properties from the 'person' object
const { name, address, school, work, Todo1, Todo2, todo3, todo4 } = person;

console.log(name); // Output: 'Elibaba'
console.log(address); // Output: 'Lekki phase 1'

///////////////////////
const multiply = (x) => x * x;

const arr = [1, 2];
const arrMap = arr.map(multiply);
console.log(arrMap);
