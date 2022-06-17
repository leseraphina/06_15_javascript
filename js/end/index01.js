fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then((response) => response.text())
     .then((result) => {
         console.log(result)
     })