import {createContext, useContext, useState } from 'react'

const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext)



const CartProvider = ({ children }) => {

    //work with cart

    const [cart, setCart] = useState([]);

    //add product to cart
    const addProduct = (item, quantity) => {
        let replaceCart;
        let product = cart.find(product => product.id === item.id)
        if (product) {
            product.quantity += quantity;
            replaceCart = [...cart]
        } else {
            replaceCart = [...cart, {...item, quantity: quantity }]
        }
        setCart(replaceCart);
    }



    //clear cart
    const clearCart = () => setCart([]);

    //not duplicated
    const inCart = (id) => {
        return cart.find(product => product.id === id) ? true : false;
    }
    //remove cart
    const removeProductInCart = (id) => {
        return setCart(cart.filter(product => product.id !== id))
    }

    return (

        <CartContext.Provider value={{cart, clearCart, inCart, removeProductInCart, addProduct}}>
            {children}
        </CartContext.Provider>

    )
}

export default CartProvider