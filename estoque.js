let estoque = {
    'joao': [
        {'tipo': 'maca', 'qtd': 1},
        {'tipo': 'pera', 'qtd': 2}
    ],
    'maria': [
        {'tipo': 'maca', 'qtd': 2},
        {'tipo': 'pera', 'qtd': 4}
    ]
}

function getEstoque(){
    return structuredClone(estoque)
}

export {getEstoque}