const ex01 = new Promise((resolve,reject) => {
 setTimeout( () => {
    resolve('welcome')
 } , 2000)
})

ex01.then((value) => {
 console.log(value)
})

console.log(ex01)
// 32