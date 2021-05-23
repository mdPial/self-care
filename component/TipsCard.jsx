import styles from "../styles/Tips.module.scss";

export default function TipsCard({ title, description, index, setIndex }) {
  const onClickPreviousHandler = () => {
    if (index != 0) {
      setIndex(index - 1);
    } else {
      setIndex(4);
    }
  };
  const onClickNextHandler = () => {
    if (index != 4) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
    console.log(index);
  };
  return (
    <div className={styles.container}>
      <p className={styles.title}>{title}</p>
      <p className={styles.description}>{description}</p>
      {index > 0 && (
        <div
          className={styles.button}
          onClick={() => {
            onClickPreviousHandler();
          }}
        >
          Previous
        </div>
      )}
      <div
        className={styles.button}
        onClick={() => {
          onClickNextHandler();
        }}
      >
        Next
      </div>
    </div>
  );
}
