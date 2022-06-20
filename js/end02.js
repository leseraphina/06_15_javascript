async function ex1(a,b){
    return a+b
}

console.log(ex1(2,5));
// 
 const ex2 = async function (a,b){
    return a+b
}
console.log(ex2(2,5));
//
const ex3 = async (a,b)=>{
    return a+b
}
console.log(ex3(2,5));
//
const ex4 = async (a,b)=>a+b

console.log(ex4(2,5));