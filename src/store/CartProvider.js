import CartContext from "./cart-context";

/**
 * Returns the Cart Provider component.
 * 
 * @returns The Cart Provider component.
 */
const CartProvider = (props) => {
    const addItemToCartHandler = (item) => {

    };

    const removeItemFromCartHandler = (id) => {

    };

    const cartContext = {
        items: [],
        totalAmount: 0,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler
    }

    return ( 
        <>
            <CartContext.Provider value={cartContext}>
                {props.children}
            </CartContext.Provider>
        </>
    );
};
 
export default CartProvider;