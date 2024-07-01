interface buttonProps {
  text: String;
  type?: "button" | "submit";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

import styles from "@/styles/button.module.css";

export default function Button({
  text,
  type = "submit",
  onClick,
}: buttonProps) {
  return (
    <button type={type} onClick={onClick} className={styles.button}>
      {text}
    </button>
  );
}
