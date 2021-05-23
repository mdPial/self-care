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
      <div className={styles.titleContainer}>
        <div className={styles.serial}>
          <p>
            Tips <br /> {index + 1}
          </p>
        </div>
        <p className={styles.title}>{title}</p>
      </div>
      <p className={styles.description}>{description}</p>
      <div className={styles.buttonContainer}>
        {index > 0 && (
          <div
            className={styles.button}
            onClick={() => {
              onClickPreviousHandler();
            }}
          >
            PREVIOUS
          </div>
        )}
        <div
          className={styles.button}
          onClick={() => {
            onClickNextHandler();
          }}
        >
          NEXT
        </div>
      </div>
    </div>
  );
}
