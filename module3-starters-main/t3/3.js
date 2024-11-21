'use strict';
const names = ['John', 'Paul', 'Jones'];

let listHTML = '';
names.forEach(name => {
  listHTML += `<li>${name}</li>`;
});
target.innerHTML = listHTML;