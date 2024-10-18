//assinaturas dos codigos
/*
quais ações meu carrinho pode fazer (casos de uso)
-> adicionar um item
-> deletar item do carrinho
-> remover item do carrinho
-> calcular o total
-> mostrar o que tem dentro do carrinho
*/

// ✅ adicionar um item
async function addItem(userCart, item) {
    userCart.push(item)
}

// calcular o total
async function calculateTotal(userCart){
    console.log("\nShopee cart total is")
    const result = userCart.reduce( (total, item) => total + item.subTotal(), 0 )
    console.log(`🎁Total: ${result}`)
}

// deletar item do carrinho
async function deleteItem(userCart, name) {
    const index = userCart.findIndex( (item) => item.name === name)

    if (index !== - 1){
        userCart.splice(index, 1)
    }clear
}

// mostrar o que tem dentro do carrinho
async function displayCart(userCart) {
    console.log("\nShopee cart list:")
    userCart.forEach((item, index) => {
        console.log(`${index + 1}. ${item.name} - R$ ${item.price} | ${item.quantity}x | ${item.subTotal()}`)
    });
}

// remover item do carrinho
// async function removeItem(userCart, index) {
//     //coloca o indice viusla do usuario para o backend
//     const deleteIndex = index -1

//     if(index >= 0 && index < userCart.length) {
//         userCart.splice(deleteIndex, 1)
//     }
// }

// remover item do carrinho
async function removeItem(userCart, item) {
    // 1. encontrar o indice do item
    const indexFound = userCart.findIndex( ( p ) => p.name === item.name )
    // console.log("Item encontrado no index: " + indexFound)

    // 2. caso não encontre o item
    if (indexFound == -1){
        console.log("Item não encontrado")
        return
    }

    // 3. item > 1 subtrair 1 item, 
    if (userCart[indexFound].quantity > 1){
        userCart[indexFound].quantity -= 1
        return
    }

    // 4. item = 1 deletar item
    if (userCart[indexFound].quantity == 1){
        // deleteItem(userCart, item.name)
        userCart.splice(indexFound, 1)
        return
    }

}

export { addItem, calculateTotal, deleteItem, removeItem, displayCart }