console.log('Start');

fetch('https://jsonplaceholder.typicode.com/todos/2')
    .then((item) => item.text())
    .then((result) => {console.log(result)})

console.log('END')