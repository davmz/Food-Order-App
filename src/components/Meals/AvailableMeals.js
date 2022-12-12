import MealItem from "./MealItem/MealItem.js";

import Card from "../UI/Card.js";
import { DUMMY_MEALS } from "./dummy-meals.js";
import classes from "./AvailableMeals.module.css";

/**
 * Returns the Available Meals component.
 * 
 * @returns The Available Meals component.
 */
const AvailableMeals = () => {
    const mealsList = DUMMY_MEALS.map((meal) => (
        <MealItem
            id={meal.id}
            key={meal.id}
            name={meal.name}
            image={meal.src}
            price={meal.price}
            description={meal.description}
        />
    ));

    return (
        <>
            <section className={classes.meals}>
                <Card>
                    <ul>
                        {mealsList}
                    </ul>
                </Card>
            </section>
        </>
    );
};

export default AvailableMeals;