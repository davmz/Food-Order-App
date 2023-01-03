import React, { useContext } from "react"

import CartItem from "./CartItem";

import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartContext from "../../store/cart-context";

/**
 * Returns the Cart component.
 * 
 * @returns The Cart component.
 */
const Cart = (props) => {
    const cartCtx = useContext(CartContext);

    const totalAmount = `${cartCtx.totalAmount.toFixed(2)}`;
    const hasItems = cartCtx.items.length > 0;

    const cartItemRemoveHandler = (id) => {
        cartCtx.removeItem(id);
    };

    const cartItemAddHandler = (item) => {
        cartCtx.addItem({
            ...item,
            amount: 1
        });
    };

    const cartItems = (
        <ul className={classes["cart-items"]}>
            {cartCtx.items.map((item) => (
                <CartItem
                    key={item.id}
                    name={item.name}
                    price={item.price}
                    amount={item.amount}
                    onRemove={cartItemRemoveHandler.bind(null, item.id)}
                    onAdd={cartItemAddHandler.bind(null, item)}
                />
            ))}
        </ul>
    );

    return (
        <>
            <Modal onClose={props.onClose}>
                {cartItems}

                <div className={classes.total}>
                    <span>Total Amount</span>
                    <span>{totalAmount}</span>
                </div>

                <div className={classes.actions}>
                    <button
                        onClick={props.onClose}
                        className={classes.button}
                    >
                        Close
                    </button>

                    {hasItems && (
                        <button
                            className={classes.button}
                            onClick={props.onOrderProcess}
                        >
                            Order
                        </button>)}
                </div>
            </Modal>
        </>
    );
};

export default Cart;