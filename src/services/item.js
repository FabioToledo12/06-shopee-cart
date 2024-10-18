//assinaturas dos codigos
/*
quais ações do item, o que ele pode fazer (casos de uso)
-> criar item com subTotal certo
*/

// criar item com subTotal certo
async function createItem(name, price, quantity) {
    return {
        name,
        price,
        quantity,
        subTotal: () => price * quantity
    }
}

export default createItem
