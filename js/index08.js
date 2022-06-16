
const member = {
    "userId": 1,
    "title": "title",
    "completed": true
}

fetch('https://jsonplaceholder.typicode.com/todos',{
    method:'POST',
    headers:{
        'Content-Type' : 'application/json'
    },
    body: JSON.stringify(member)
})
    .then( (response) => response.text() )
    .then( (result) => {console.log(result)} )