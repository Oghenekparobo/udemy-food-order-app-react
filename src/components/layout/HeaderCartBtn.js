import CartIcon from "../cart/CartIcon";
import styles from "./headerCartBtn.module.css";

const HeaderCartBtn = () => {
  return (
    <>
      <button className={styles.button}>
        <span className={styles.icon}>
          <CartIcon />
        </span>
        <span>your cart</span>
        <span className={styles.badge}>3</span>
      </button>
    </>
  );
};

export default HeaderCartBtn;
