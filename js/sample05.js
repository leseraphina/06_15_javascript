async function fetchStr(){
    console.log('num02')
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    console.log('num04')
    const result = await response.text()
    console.log(result)
    console.log('num05')
}
console.log('start1')
fetchStr();
console.log('num03')
console.log('num03_1')
console.log('num03_2')
console.log('num03_3')
console.log('num03_4')