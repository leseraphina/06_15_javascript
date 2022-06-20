fetch('https://jsonplaceholdermmit.typicode.com/users/1')
// .then(fun(){},fun(){})
// .then(실행,error)
    .then(
        (response) => response.text(),(error) => console.log(error)
        )
    .then(
        (result) => console.log(result)
        )