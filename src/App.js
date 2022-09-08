import { useState } from "react";
import Cart from "./components/cart/Cart";
import Header from "./components/layout/Header";
import Meals from "./components/meals/Meals";
import CartProvider from "./store/CartProvider";

function App() {
  const [showcart, setShowcart] = useState(false);

  const showcartHandler = () => {
    setShowcart(true);
  };

  const hidecartHandler = () => {
    setShowcart(false);
  };

  return (
    <CartProvider>
      {showcart && <Cart onClose={hidecartHandler} />}
      <Header onShowcart={showcartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
