import React, { useContext } from "react";

import Card from "../UI/Card.js";
import CartContext from "../../store/cart-context.js";

import classes from "./Receipt.module.css";
import ReceiptItem from "./ReceiptItem.js";

/**
 * Returns the Receipt component.
 * 
 * @returns The Receipt component.
 */
const Receipt = (props) => {
    const cartCtx = useContext(CartContext);

    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;

    function refreshPage() {
        window.location.reload(false);
    }

    return (
        <>
            <section className={classes.order}>
                <Card>
                    <h2>Order Complete</h2>
                    <p>
                        Your order has been processed.
                    </p>

                    {cartCtx.items.map((item) => (
                        <ReceiptItem
                            key={item.id}
                            name={item.name}
                            price={item.price}
                            amount={item.amount}
                        />
                    ))}

                    <div className={classes.total}>
                        <span>Total Amount</span>
                        <span>{totalAmount}</span>
                    </div>

                    <button
                        onClick={refreshPage}
                    >
                        Make Another Purchase
                    </button>
                </Card>
            </section>
        </>
    );
};

export default Receipt;