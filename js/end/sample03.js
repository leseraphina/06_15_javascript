fetch('https://jsonplaceholder.typicode.com/users/2')
    .then((response) => response.text())
    .then( (result) => { console.log(result)})
    .catch(() => console.log('error 가 발생되었습니다.'))
    .finally(() => console.log('작업 끝났습니다.'))
    