import { useState } from "react";

import Cart from "./components/Cart/Cart";
import Meals from "./components/Meals/Meals";
import Header from "./components/Layout/Header";
import CartProvider from "./store/CartProvider";
import Receipt from "./components/Receipt/Receipt";

const App = () => {
  const [isOrder, setIsOrder] = useState(false);
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  const cartOnOrder = () => {
    setIsOrder(true);
    setCartIsShown(false);
  };

  return (
    <>
      <CartProvider>
        {cartIsShown && (
          <Cart
            onClose={hideCartHandler}
            onOrderProcess={cartOnOrder}
          />
        )}

        <Header
          onOrderProcess={isOrder}
          onShowCart={showCartHandler}
        />

        <main>
          {!isOrder ? (
            <Meals />
          ) : (
            <Receipt />
          )}
        </main>
      </CartProvider>
    </>
  );
}

export default App;
