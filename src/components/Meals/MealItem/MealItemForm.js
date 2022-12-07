import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";

/**
 * Returns the Meal Item Form component.
 * 
 * @returns The Meal Item Form component.
 */
const MealItemForm = (props) => {
    return (
        <>
            <form className={classes.form}>
                <Input
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
            </form>
        </>
    );
};

export default MealItemForm;