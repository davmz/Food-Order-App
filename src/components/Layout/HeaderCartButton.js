import { useContext, useEffect, useState } from "react";

import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";
import classes from "./HeaderCartButton.module.css";

/**
 * Returns the Header Cart Button component.
 *
 * @returns The Header Cart Button component.
 */
const HeaderCartButton = (props) => {
    const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);

    const cartCtx = useContext(CartContext);
    const { items } = cartCtx;

    const numberOfCartItems = items.reduce((curNumber, item) => {
        return curNumber + item.amount;
    }, 0);

    const btnClasses = `${classes.button} ${btnIsHighlighted ? classes.bump : ""}`;

    useEffect(() => {
        if (items.length === 0) {
            return;
        }

        setBtnIsHighlighted(true);

        const timer = setTimeout(() => {
            setBtnIsHighlighted(false);
        }, 300);

        return () => {
            clearTimeout(timer);
        };
    }, [items]);

    return (
        <>
            <button
                onClick={props.onClick}
                className={btnClasses}
            >
                <span className={classes.icon}>
                    <CartIcon />
                </span>

                <span>Your Cart</span>

                <span className={classes.badge}>{numberOfCartItems }</span>
            </button>
        </>
    );
};

export default HeaderCartButton;
