// 1
// const p = Promise.resolve('welcome');
// console.log(p)

// 2
// const p2 = Promise.reject(new Error('fail'))
// console.log(p2)

// 3
const p3  = new Promise((resolve,reject) => {
 setTimeout(() => {resolve('welcome')},2000)
})
p3.then((result) =>{
    console.log(result)
},
(error)=>{
    console.log('error')
}
)
setTimeout(() => {
    p3.then((result) => {console.log(result)})
},5000)


