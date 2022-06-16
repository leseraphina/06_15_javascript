fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=> response.text())
.then((result) => {
    const users = JSON.parse(result)
    const {id} = users[0]
    //console.log(id) //id: 1 -> userID : 1 -> 내용 부분 가져오기
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
    .then((response) => response.text())
    .then((posts) => {
        console.log(posts)
    })
})