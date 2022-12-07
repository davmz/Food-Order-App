import classes from "./Input.module.css";

/**
 * Returns the Input component.
 * 
 * @returns The Input component.
 */
const Input = (props) => {
    return (
        <>
            <div className={classes.input}>
                <label htmlFor={props.input.id}>{props.label}</label>
                <input {...props.input} />
            </div>
        </>
    );
};

export default Input;