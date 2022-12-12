import Card from "../UI/Card.js";

import classes from "./Receipt.module.css";

/**
 * Returns the Receipt component.
 * 
 * @returns The Receipt component.
 */
const Receipt = (props) => {
    return (
        <>
            <section className={classes.order}>
                <Card>
                    <h2>Order Complete</h2>
                    <p>
                        In ut nostrud irure mollit amet enim Lorem occaecat
                        pariatur officia et duis cupidatat proident.
                    </p>
                    
                    {/* List out all of the items */}
                    {/* NEED name, amount, price of each item(s) */}


                    <div>
                        <p>Total Amount: </p>
                        <p>$40.00</p>
                    </div>

                    <button>
                        Make Another Purchase
                    </button>
                </Card>
            </section>
        </>
    );
};

export default Receipt;