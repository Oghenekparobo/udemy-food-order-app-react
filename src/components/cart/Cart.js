import Modal from "../ui/Modal";
import styles from "./cart.module.css";


const Cart = (props) => {
  const cartItems = (
    <ul className={styles["cart-items"]}>
      {[{ id: "clsksksksk", name: "beans", amount: 12, price: 4124.09 }].map(
        (item) => (
          <li key={item.id}>{item.name}</li>
        )
      )}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={styles.total}>
        <span>total amount</span>
        <span>35.444</span>
      </div>
      <div className={styles.actions}>
        <button className={styles["button--alt"]} onClick={props.onClose}>close</button>
        <button className={styles.button}>order</button>
      </div>
    </Modal>
  );
};

export default Cart;
