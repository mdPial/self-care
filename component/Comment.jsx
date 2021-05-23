import User from "./User";
import styles from "../styles/Comment.module.scss";

export default function Post({ comment }) {
  return (
    <div className={styles.container}>
      <User avatar="favicon.svg" username="ipsum" />
      <p>{comment}</p>
    </div>
  );
}
