// find local items 

const getItemCart = () => {
    const storedCartString = localStorage.getItem('cart');
    if (storedCartString) {
        return JSON.parse(storedCartString);
    }
    return [];
}

const savedCartToLS = cart => {
    const cartStrinfied = JSON.stringify(cart);
    localStorage.setItem('cart', cartStrinfied)

}

const addToLs = id => {
    const cart = getItemCart();
    cart.push(id)
    savedCartToLS(cart)
}

export { addToLs, getItemCart }

// const checkItem = () => {
//     const checkItemCart = localStorage.getItem('cart');
//     if (checkItem) {
//         return JSON.parse(checkItem);
//     }
//     return [];
// }
// const SavedItem = cart => {
//     const cartStringfy = JSON.stringify(cart)
//     localStorage.setItem('cart', cartStringfy)
// }
// const addToCheckItem = id => {
//     const cart = getItemCart();
//     cart.push(id);
//     SavedItem(cart)
// }

