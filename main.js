import { getEstoque } from "./estoque.js"

const olJoao = document.querySelector('#joao')
const olMaria = document.querySelector('#maria')

document.entrada.addEventListener('submit', leFormulario)

function leFormulario(event) {
    event.preventDefault()
    const quantidade = document.entrada.quantidade.valueAsNumber
    const fruta = document.entrada.fruta.value
    const origem = document.entrada.origem.value
    const destino = document.entrada.destino.value

    console.log()
}

function atualizaTela() {
    const estoque = getEstoque()
    olJoao.innerHTML = ""
    for(let i=0; i < estoque.joao.length; i++) {
        const monte = estoque.joao[i]
        const li = document.createElement('li')
        li.textContent = `${monte.tipo}: ${monte.qtd}`
        olJoao.appendChild(li)
    }

    olMaria.innerHTML = ""
    for(let i=0; i < estoque.maria.length; i++) {
        const monte = estoque.maria[i]
        const li = document.createElement('li')
        li.textContent = `${monte.tipo}: ${monte.qtd}`
        olMaria.appendChild(li)
    }
}