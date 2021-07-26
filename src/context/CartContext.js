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

    const totalPrice = (cart) => {
        let count = 0;
        for (let i = 0; i < cart.length; i++) {
            let currency = cart[i].item.precio;
            let priceNumber = Number(currency.replace(/[^0-9-,]+/g, "")) * cart[i].quantity;
            count += priceNumber;
        };
        return count;
    }

    const totalItems = (cart) => {
        let count = 0;

        for (let i = 0; i < cart.length; i++) {
            count += cart[i].quantity;
        };
        return count;
    };

    const removeItem = (id) => {
        const removableItem = cart.find(item => { return  id === item.item.id });
        return setCart(cart.filter( item => { return item !== removableItem}));

    }


    return <CartContext.Provider value={{ cart, removeItem, addItem, clear, isInCart, totalItems, totalPrice }}>
        {props.children}
    </CartContext.Provider>
}

