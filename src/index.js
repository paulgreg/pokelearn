var pokedex = require('../Pokemon-DB/pokedex.json')

var ol = document.createElement('ol')

pokedex.map(pokemon => {
    var li = document.createElement('li')
    li.innerHTML = `<img src="../../Pokemon-DB/img/${pokemon.id}${pokemon.ename}.png"><h2>${pokemon.ename}</h2>`
    ol.appendChild(li)
})

document.body.appendChild(ol)

