import { useContext } from "react";

import MealItemForm from "./MealItemForm";
import CartContext from "../../../store/cart-context";

import classes from "./MealItem.module.css";

/**
 * Returns the Meal Item component.
 * 
 * @returns The Meal Item component.
 */
const MealItem = (props) => {
    const cartCtx = useContext(CartContext);

    const price = `$${props.price.toFixed(2)}`;

    const addToCartHandler = (amount) => {
        cartCtx.addItem({
            id: props.id,
            name: props.name,
            amount: amount,
            price: props.price,
        });
    };

    return (
        <>
            <li className={classes.meal}>
                <div>
                    <h3>{props.name}</h3>

                    <img src={props.image} alt={`Jollibee - ${props.name}`}/>

                    <div className={classes.description}>{props.description}</div>

                    <div className={classes.price}>{price}</div>
                </div>

                <div>
                    <MealItemForm
                        id={props.id}
                        onAddToCart={addToCartHandler}
                    />
                </div>
            </li>
        </>
    );
};

export default MealItem;