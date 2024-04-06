import React from "react";
import { CSSTransition } from "react-transition-group";
import classnames from "classnames";
import styles from "./toast.module.css";

function Toast({ message, width, type, timer, position, active, setActive }) {
  const ToastClassNames = {
    [styles.error]: type === "error",
    [styles.warning]: type === "warning",
    [styles.success]: type === "success",
    [styles.bleft]: position === "bleft",
    [styles.bright]: position === "bright",
    [styles.tright]: position === "tright",
    [styles.tleft]: position === "tleft",
    [styles.tcenter]: position === "tcenter",
    [styles.bcenter]: position === "bcenter",
    [styles.bcenter]: position === "bcenter",
    [styles.fullWidth]: width === "full",
    [styles.smallWidth]: width === "small",
    [styles.mediumWidth]: width === "medium",
    [styles.largeWidth]: width === "large",
  };

  const timeout = parseInt(timer);

  return (
    <CSSTransition
      in={active}
      timeout={timeout}
      classNames="toast"
      unmountOnExit
      onExit={() => setActive(false)}
    >
      <div className={classnames(styles.toast, ToastClassNames)}>
        <div className={styles.toastMessage}>{message}</div>
        <button
          className={styles.toastDismiss}
          onClick={() => setActive(false)}
        >
          &#10005;
        </button>
      </div>
    </CSSTransition>
  );
}

export default Toast;
