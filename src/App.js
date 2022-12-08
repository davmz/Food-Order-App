import { useState } from "react";

import Cart from "./components/Cart/Cart";
import Meals from "./components/Meals/Meals";
import Header from "./components/Layout/Header";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <>
      {cartIsShown && <Cart onClose={hideCartHandler} />}

      <Header
        onShowCart={showCartHandler}
      />

      <main>
        <Meals />
      </main>
    </>
  );
}

export default App;
