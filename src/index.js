var pokedex = require('../Pokemon-DB/pokedex.json')

function removeGender (name) {
    return name.replace('♀', '').replace('♂', '')
}

var ul = document.createElement('ul')

pokedex.map(pokemon => {
    var li = document.createElement('li')
    //console.log(pokemon)
    li.innerHTML = `<img src="../../Pokemon-DB/img/${pokemon.id}${removeGender(pokemon.ename)}.png"><h2>${pokemon.id} ${pokemon.ename}</h2><p>${JSON.stringify(pokemon.base)}</p>`
    ul.appendChild(li)
})

document.body.appendChild(ul)

// Lazy load images
let lazyload = require('lazyload')
let lazy = new lazyload(document.querySelectorAll('[data-src]'))
