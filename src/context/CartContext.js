import React from 'react'

export const CartContext = React.createContext();
export const useCartContext = () => React.useContext(CartContext);

export const CartComponentContext = props => {

    const [cart, setCart] = React.useState([]);

    const isInCart = (id) => {
        return cart.find(item => { return item.item.id === id });
    }

    const addItem = (item) => {

        return isInCart(item.item.id) ? updateRepeatedItem(item) : setCart([...cart, item]);

    }

    const updateRepeatedItem = (item) => {

        const updatedItem = cart.map(element => {
            if (element.item.id === item.item.id) {
                return { ...element, quantity: item.quantity + element.quantity }
            }
            return element;
        });

        return setCart(updatedItem);
        
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

