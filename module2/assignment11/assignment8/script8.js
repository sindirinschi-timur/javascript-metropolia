function concat(strings) {
  let result = '';
  for (let str of strings) {
      result += str;
  }
  return result;
}

let strings = ['Hello', 'world', 'from', 'JavaScript'];
let result = concat(strings);
document.write(`<h1>${result}</h1>`);