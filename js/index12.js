fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=> response.text())
.then((result) => {
    const users = JSON.parse(result)
    // console.log(users)
    const {id} = users[0]
    return fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
})
.then((item) => item.text())
.then( (posts) => {
    // console.log(posts)
    const mumber = JSON.parse(posts)
    const str = mumber[0]
    console.log(str.title)
})
