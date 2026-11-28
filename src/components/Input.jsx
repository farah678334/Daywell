"use client";

import styles from "./Input.module.css";

export default function Input({
  label,
  type = "text",
  name,
  placeholder = "",
  value,
  onChange,
  required = false,
  disabled = false,
}) {
  return (
    <div className={styles.container}>
      {label && <label htmlFor={name}>{label}</label>}

      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        disabled={disabled}
        className={styles.input}
      />
    </div>
  );
}