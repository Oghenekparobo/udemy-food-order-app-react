import classes from "./header.module.css";
import mealsImg from "../../assets/meals.jpg";
import HeaderCartBtn from "./HeaderCartBtn";

const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>fakeMeals</h1>
        <HeaderCartBtn onClick={props.onShowcart}/>
      </header>
      <div className={classes['main-image']}>
          <img src={mealsImg} alt="a buffet of snacks and food" />
      </div>
    </>
  );
};

export default Header;
