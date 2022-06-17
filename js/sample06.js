async function str(){
try {    
    const response = await fetch('https://jsonplaceholdermit.typicode.com/todos/1')
    const result = await response.text()
    console.log(result)
}
catch(error){console.log('error입니다.')}
}

str();

//  형식 까지 응용 -> 작업 ->  5:02 프로젝트 