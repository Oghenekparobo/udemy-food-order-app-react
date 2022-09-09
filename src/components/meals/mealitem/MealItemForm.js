import { useRef, useState } from "react";
import Input from "../../ui/Input";
import styles from "./mealitemform.module.css";

const MealItemForm = (props) => {
  const [isValid, setIsValid] = useState(true);
  const amountRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();

    const enteredAmount = amountRef.current.value; // ref is always a string, convert to number
    const enteredAmountNumber = +enteredAmount; //onvert ref string to number

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setIsValid(false);
      return;
    }

    props.onAddToCart(enteredAmountNumber);
  };

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <Input
        ref={amountRef}
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
      {!isValid && <p>please enter a valid amount (1-5)</p>}
    </form>
  );
};
export default MealItemForm;
