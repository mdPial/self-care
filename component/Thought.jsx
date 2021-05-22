import styles from "../styles/Thought.module.scss";

export default function Thought({ thought }) {
  return <div className={styles.thought}>{thought}</div>;
}
