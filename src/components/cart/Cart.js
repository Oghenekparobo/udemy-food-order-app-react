import { useState } from "react";
import { useContext } from "react";
import CartContext from "../../store/cart-context";
import Checkout from "../checkout/Checkout";
import Modal from "../ui/Modal";
import styles from "./cart.module.css";
import CartItem from "./CartItem";


const Cart = (props) => {
  const [checkout, setCheckout] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submit, setSubmit] = useState(false);
  const cartCtx = useContext(CartContext);
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 })
  };

  const orderHandler = () => {
    setCheckout(true);
  }

  const confirmOrderHandler = async (userData) => {
    setSubmitting(true);
    await fetch('https://react-8f26a-default-rtdb.firebaseio.com/order.json', {
      body: JSON.stringify({
        user: userData,
        orderedItems: cartCtx.items
      }),
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }

    });

    setSubmitting(false);
    setSubmit(true);
  }

  const cartItems = (
    <ul className={styles["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
     
      {cartItems}
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>

      </div>
      <div className={styles.checkout}>
        {checkout && <Checkout onConfirm={confirmOrderHandler} onClose={props.onClose} />}
      </div>

      {!checkout && <div className={styles.actions}>
        <button className={styles["button--alt"]} onClick={props.onClose}>
          close
        </button>
        {hasItems && <button className={styles.button} onClick={orderHandler} >order</button>}
      </div>}

      

    </Modal>
  );
};

export default Cart;
