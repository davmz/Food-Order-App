import HeaderCartButton from "./HeaderCartButton";

import classes from "./Header.module.css"
import mealsImage from "../../assets/meals.jpg";

/**
 * Returns the Header component.
 * 
 * @returns The Header component.
 */
const Header = (props) => {
    function refreshPage() {
        window.location.reload(false);
    }

    return (
        <>
            <header className={classes.header}>
                <h1
                    onClick={refreshPage}
                    style={{cursor: "pointer"}}
                >
                    DibbyMeals
                </h1>
                
                {!props.onOrderProcess && (
                    <HeaderCartButton
                        onClick={props.onShowCart}
                    />
                )}
            </header>

            <div>
                <img
                    src={mealsImage}
                    className={classes["main-image"]}
                    alt="A table full of delicious food!"
                />
            </div>
        </>
    );
};

export default Header;