let isLoading = true;
const url = 'https://jsonplaceholder.typicode.com/users/1'
fetch(url)
    .then((response) => {
        const contentType = response.headers.get('content-type')
        if(contentType.includes('application/json')){
            // return response.json()
            return response.text()
        }
        throw new Error('data파일이 없습니다.')
    })
    .then((result) => {console.log(result)})
    .catch((error) => {
        // console.log('에러입니다.')
        console.log(error)
    })
    .finally( () => {
        isLoading = false;
        console.log(isLoading)
    })