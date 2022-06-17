fetch('https://jsonplaceholdermmit.typicode.com/users/1')
    .then((response) => response.text())
    .then(
        (result) => {
            console.log('welcome')
            console.log(result)
            throw new Error('test')
            }
        )
    .catch(() => console.log('error 가 발생되었습니다.'))