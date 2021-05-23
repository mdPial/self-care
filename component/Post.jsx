import styles from "../styles/Post.module.scss";

export default function Post() {
  return (
    <div className={styles.container}>
      <h4>Share your thoughts</h4>
      <textarea type="text" className={styles.textarea} rows="9" cols="70" />
      <buton className={styles.button}>Post</buton>
    </div>
  );
}
