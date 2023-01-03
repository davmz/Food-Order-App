import { useEffect, useState } from "react";

import MealItem from "./MealItem/MealItem.js";

import Card from "../UI/Card.js";
// import { DUMMY_MEALS } from "./dummy-meals.js";
import classes from "./AvailableMeals.module.css";

/**
 * Returns the Available Meals component.
 * 
 * @returns The Available Meals component.
 */
const AvailableMeals = () => {
    const [meals, setMeals] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchMeals = async() => {
            const reponse = await fetch("https://udemy-react-http-7113e-default-rtdb.firebaseio.com/meals.json");
            const responseData = await reponse.json();

            const loadedMeals = [];

            for (const key in responseData) {
                loadedMeals.push({
                    id: key,
                    name: responseData[key].name,
                    description: responseData[key].description,
                    price: responseData[key].price,
                    src: responseData[key].src
                })
            }

            setMeals(loadedMeals);
            setIsLoading(false);
        };

        fetchMeals();
    }, []);

    if (isLoading) {
        return (
            <>
                <section className={classes.MealsLoading}>
                    <p>Loading...</p>
                </section>
            </>
        );
    }

    const mealsList = meals.map((meal) => (
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