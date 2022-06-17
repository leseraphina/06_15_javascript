fetch('https://jsonplaceholder.typicode.com/todos')
    .then((response) => response.text())
    .then( (result) => {
        const level = JSON.parse(result)
        const basic = level.filter((str) => 
            str.userId === 4
        )
        for(let i of basic){
            document.write(
                `
                ${i.id} : ${i.title} <br>
                `
            )
        }
        // console.log(basic)
    })