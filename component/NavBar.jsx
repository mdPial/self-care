import Link from "next/link";
import styles from "../styles/NavBar.module.scss";

export default function NavBar({ signInStatus }) {
  return (
    <div className={styles.navBarContainer}>
      <Link href="/">
        <img src="./logo.svg" className={styles.logo} />
      </Link>
      <div className={styles.routeContainer}>
        {signInStatus ? (
          <>
            <Link href="/signin">
              <div className={styles.signIn}>SIGN IN</div>
            </Link>
            <Link href="/signup">
              <div className={styles.signUp}>SIGN UP</div>
            </Link>
          </>
        ) : (
          <Link href="/signout">
            <div className={styles.signUp}>SIGN OUT</div>
          </Link>
        )}
      </div>
    </div>
  );
}
