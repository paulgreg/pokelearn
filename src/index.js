let pokedex = require('../Pokemon-DB/pokedex.json')

function getImgName(name) {
    return name.replace('♀', '').replace('♂', '').replace('. ', '_').replace(' ', '_').replace('Jr.', 'Jr')
}

let ul = document.createElement('ul')

pokedex.map((pokemon, idx) => {
    let li = document.createElement('li')
    //console.log(pokemon)
    li.innerHTML = `<img ${idx < 10 ? '' : 'data-'}src="../../Pokemon-DB/img/${pokemon.id}${getImgName(pokemon.ename)}.png"><h2>${pokemon.id} ${pokemon.ename}</h2><p>${JSON.stringify(pokemon.base)}</p>`
    ul.appendChild(li)
})

document.body.appendChild(ul)

// Lazy load images
let lazyload = require('lazyload')
let lazy = new lazyload(document.querySelectorAll('[data-src]'))
