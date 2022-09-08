import styles from "./modal.module.css";
import ReactDOM  from "react-dom";

const BackDrop = (props) => {
  return <div className={styles.backdrop} onClick={props.onClose}></div>;
};

const OverLay = (props) => {
  return (
    <div className={styles.modal}>
      <div className={styles.content}>{props.children}</div>
    </div>
  );
};

const Modal = (props) => {
  const portalElement = document.getElementById("overlays");
  return (
    <>
      {ReactDOM.createPortal(<BackDrop onClose={props.onClose} />, portalElement)}
      {ReactDOM.createPortal(
        <OverLay>{props.children}</OverLay>,
        portalElement
      )}
    </>
  );
};

export default Modal;
