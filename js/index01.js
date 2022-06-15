fetch('https://jsonplaceholder.typicode.com/todos')
    .then((response) => response.text())
    .then((result) => {
        console.log(result)
    })