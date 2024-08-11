let url = 'https://api.jikan.moe/v4/top/anime'
let main = document.querySelector('.main-container')

async function animeapi(){
    try{
        let fetchs = await fetch(url)
        let response = await fetchs.json()
        for(let i = 0; i < response.data.length; i++){
            let createDiv = document.createElement('div')
            createDiv.classList.add('container')
            createDiv.innerHTML = `
                    <h3>${response.data[i].title}</h3>
                    <img class="img" src="${response.data[i].images.jpg.large_image_url}" alt="${response.data[i].title}">
                    <p class="details">Genre:${response.data[i].genres[0].name}</p>
                    <p class="details">Episodes:${response.data[i].episodes}</p>
                    <p class="details">Year:${response.data[i].year}</p>
                    `
             main.append(createDiv)
        }
    }
    catch(err){
        console.log(err)
    }
}
animeapi()