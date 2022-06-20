async function postUser(){
    const userJSON = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await userJSON.json();
    const lastUser = users[users.length - 1]
    const {id} = lastUser
    const postJSON = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
// return postJSON;
    const posts = await postJSON.json();
    const lastPost = posts[posts.length - 1]
    return lastPost
}

console.log(postUser())