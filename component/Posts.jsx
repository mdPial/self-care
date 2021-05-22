import Thought from "./Thought";
import User from "./User";
import Comment from "./Comment";
import styles from "../styles/Posts.module.scss";

export default function Posts() {
  return (
    <div className={styles.container}>
      <User avatar="favicon.svg" username="lorem" />
      <Thought thought="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentia" />
      <h4>Comments</h4>
      <Comment comment="It is a long established fact that a reader will be distracted by the readable content of a p ppppp" />
    </div>
  );
}
