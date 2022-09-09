import { useContext, useEffect, useState } from "react";
import CartContext from "../../store/cart-context";
import CartIcon from "../cart/CartIcon";
import styles from "./headerCartBtn.module.css";

const HeaderCartBtn = (props) => {
  const [btnBump, setBtnBump] = useState(false);
  const cartCtx = useContext(CartContext);
  const btnClasses = `${styles.button} ${btnBump ? styles.bump : ""}`;

  // also cartCtx.items
  const { items } = cartCtx;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnBump(true);

    setTimeout(() => {
      setBtnBump(false);
    }, 300);

    // clean up functiom
    return ()=>{ 

    }
  }, [items]);

  // gotten from cartCtx.items
  const numberOfItems = items.reduce((currNo, item) => {
    return currNo + item.amount;
  }, 0);

  return (
    <>
      <button className={btnClasses} onClick={props.onClick}>
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
