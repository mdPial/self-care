import Head from "next/head";
import styles from "../styles/SignInSignUp.module.scss";

export default function SignIn() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Sign In</title>
      </Head>
      <div className={styles.containerWrapper}>
        <div className={styles.leftContainer}>
          <p className={styles.title}>
            Hello! <br /> Sign in to your account
          </p>
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
          </div>
          <div className={styles.buttonAndLinkContainer}>
            <button className={styles.button}>SIGN IN</button>
            <p className={styles.link}>
              Don't have an account? <a href="/signup">Sign Up</a>
            </p>
          </div>
        </div>
        <div className={styles.rightContainer}>
          <img src="./sprinting.gif" width="100%" className={styles.image} />
        </div>
      </div>
    </div>
  );
}
