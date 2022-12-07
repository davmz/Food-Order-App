import MealsSummary from "./MealsSummary";
import AvailableMeals from "./AvailableMeals";

/**
 * Returns the Meals component.
 * 
 * @returns The Meals component.
 */
const Meals = () => {
    return (
        <>
            <MealsSummary />

            <AvailableMeals />
        </>
    );
};

export default Meals;