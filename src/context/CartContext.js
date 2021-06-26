import React from 'react'

export const CartContext = React.createContext();
export const useCartContext = () => React.useContext(CartContext);

export const CartComponentContext = props => {
    const [cart, setCart] = React.useState([]);

    const isInCart = (id) => {
        return cart.find(item => { return item.item.id === id });
    }

    const updateRepeatedItem = (item) => {
       
        const repeatedItem = isInCart(item.item.id)
        const newQuantity = repeatedItem.quantity + item.quantity;
        const updateItem = {item, quantity: newQuantity};
        const index = cart.indexOf(repeatedItem);
        cart.splice(index, 1)
        return updateItem;
    }

   

    const addItem = (item) => {

        return isInCart(item.item.id) ? setCart([...cart, updateRepeatedItem(item)]) : setCart([...cart, item]);

    }

    const removeItem = (id) => {
        return cart.filter(item => { return item.id !== id });

    }

    const clear = () => {
        setCart([]);
    }
   
    console.log(cart)
    return <CartContext.Provider value={{ cart, addItem, removeItem, clear }}>
        {props.children}
    </CartContext.Provider>
}

