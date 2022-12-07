import classes from "./Card.module.css";

/**
 * Returns the Card component.
 * 
 * @returns The Card component.
 */
const Card = (props) => {
    return (
        <>
            <div className={classes.card}>{props.children}</div>
        </>
    );
};

export default Card;