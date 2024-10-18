import * as cartService from "./services/cart.js"
import createItem from "./services/item.js" 

const myCart = []
const myWishList = []

console.log("Welcome to the your shopee cart!")

const item1 = await createItem("hotwhells ferrari", 20.99, 1 )
const item2 = await createItem("hotwhells lamborghini", 39.99, 3)

await cartService.addItem(myCart, item1)
await cartService.addItem(myCart, item2)

// await cartService.removeItem(myCart, 2)
await cartService.removeItem(myCart, item2)
await cartService.removeItem(myCart, item2)

// await cartService.deleteItem(myCart, item2.name)
// await cartService.deleteItem(myCart, item1.name)

await cartService.displayCart(myCart)

await cartService.calculateTotal(myCart)