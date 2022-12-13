import classes from "./ReceiptItem.module.css";

/**
 * Returns the Receipt Item component.
 * 
 * @returns The Receipt Item component.
 */
const ReceiptItem = (props) => {
    const price = `$${props.price.toFixed(2)}`;
    const itemTotalPrice = `$${(props.price * props.amount).toFixed(2)}`;

    return ( 
        <>
            <li className={classes['cart-item']}>
                <div className={classes.itemInfo}>
                    <div>
                        <h3>{props.name}</h3>

                        <div className={classes.summary}>
                            <span className={classes.price}>{price}</span>
                            <span className={classes.amount}>x {props.amount}</span>

                        </div>
                        
                    </div>
                    
                    <div className={classes.totalItemPrice}>
                        <span>{itemTotalPrice}</span>
                    </div>
                </div>

            </li>
        </>
    );
};
 
export default ReceiptItem;