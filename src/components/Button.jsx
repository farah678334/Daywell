"use client";

import styles from "./Button.module.css";

export default function Button({
  children,
  type = "button",
  variant = "primary",
  onClick,
  disabled = false,
}) {
  return (
    <button
      type={type}
      className={`${styles.button} ${styles[variant]}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}