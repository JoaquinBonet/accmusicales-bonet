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



    const clear = () => {
        setCart([]);
    }


    return <CartContext.Provider value={{ cart, setCart, addItem, clear }}>
        {props.children}
    </CartContext.Provider>
}

