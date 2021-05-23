import styles from "../styles/User.module.scss";

export default function User({ avatar, username }) {
  return (
    <div className={styles.container}>
      <img src={avatar} width="3%" className={styles.image} />
      <p>{username}</p>
    </div>
  );
}
