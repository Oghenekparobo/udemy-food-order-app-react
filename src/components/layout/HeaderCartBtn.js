import { useContext } from "react";
import CartContext from "../../store/cart-context";
import CartIcon from "../cart/CartIcon";
import styles from "./headerCartBtn.module.css";

const HeaderCartBtn = (props) => {
  const cartCtx = useContext(CartContext);
  const numberOfItems = cartCtx.items.reduce((currNo, item) => {
    return currNo + item.Amount;
  }, 0);
  return (
    <>
      <button className={styles.button} onClick={props.onClick}>
        <span className={styles.icon}>
          <CartIcon />
        </span>
        <span>your cart</span>
        <span className={styles.badge}>{numberOfItems}</span>
      </button>
    </>
  );
};

export default HeaderCartBtn;
