import styles from "./Card.module.css";

export default function Card({ children, title, className = "" }) {
  return (
    <div className={className}>
      {title && <h2>{title}</h2>}
      {children}
    </div>
  );
}
