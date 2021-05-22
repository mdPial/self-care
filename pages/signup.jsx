import styles from "../styles/SignInSignUp.module.scss";

export default function SignUp() {
  return (
    <div className={styles.container}>
      <div className={styles.containerWrapper}>
        <div className={styles.leftContainer}>
          <p className={styles.title}>START THE JOURNEY</p>
          <div className={styles.inputContainer}>
            <input
              type="text"
              className={styles.input}
              placeholder="Username"
            />
            <input
              type="password"
              className={styles.input}
              placeholder="Password"
            />
            <input
              type="password"
              className={styles.input}
              placeholder="Confirm Password"
            />
          </div>
          <div className={styles.buttonAndLinkContainer}>
            <button className={styles.button}>SIGN UP</button>
            <p className={styles.link}>
              Already have an account? <a href="/signin">Sign In</a>
            </p>
          </div>
        </div>
        <div className={styles.rightContainer}>
          <img src="./coffee.gif" width="100%" className={styles.image} />
        </div>
      </div>
    </div>
  );
}
