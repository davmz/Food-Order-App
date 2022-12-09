import React, { useRef, useState } from "react";

import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";

/**
 * Returns the Meal Item Form component.
 * 
 * @returns The Meal Item Form component.
 */
const MealItemForm = (props) => {
    const [amountIsValid, setAmountIsValid] = useState(true);
    const amountInputRef = useRef();

    const submitHanlder = (event) => {
        event.preventDefault();

        const enteredAmount = amountInputRef.current.value;
        const enteredAmountNumber = +enteredAmount;
        
        if (enteredAmount.trim() === 0 ||
            enteredAmountNumber < 1 ||
            enteredAmountNumber > 5
        ) {
            setAmountIsValid(false);
            return;
        }

        props.onAddToCart(enteredAmountNumber);
    };

    return (
        <>
            <form className={classes.form} onSubmit={submitHanlder}>
                <Input
                    ref={amountInputRef}
                    label="Amount"
                    input={{
                        min: "1",
                        max: "5",
                        step: "1",
                        id: 'amount_' + props.id,
                        type: "number",
                        defaultValue: "1",
                    }}
                />

                <button>Add</button>
                {!amountIsValid && <p>Please enter a valid amount (1-5)!</p>}
            </form>
        </>
    );
};

export default MealItemForm;