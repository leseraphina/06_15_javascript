const people = {
    "userId": 9,
    "title": "title19",
    "completed": false
}

fetch('https://jsonplaceholder.typicode.com/todos/178',
        {method:'PUT',
        body: JSON.stringify(people)}
      )
    .then(
        (response) => response.text()
    )
    .then(
        (result) => {console.log(result)}
    )