fetch('https://jsonplaceholder.typicode.com/photos')
    .then((response) => response.text())
    .then((result)=>{
        const level = JSON.parse(result)
        const basic = level.filter((str) => 
            str.albumId === 1
        )
        for(let i of basic){
            document.write(
            `
            <figure>
            <img src="${i.thumbnailUrl}" alt="${i.title}">
            <figcaption>${i.title}</figcaption>
            </figure>
            `
        )}
     })