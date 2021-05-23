import Head from "next/head";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <main className={styles.main}>
        <div className={styles.heroContainer}>
          <div className={styles.leftContainer}>
            <p className={styles.title}>Heal Yourself</p>
            <p className={styles.description}>
              You are not only one suffering. Share your thoughts with people
              like you anonymously. Build healthy habbit with us and conquer the
              happiness.
            </p>
            <div className={styles.button}>SIGN UP</div>
          </div>
          <div className={styles.rightContainer}>
            <img src="levitate.gif" width="100%" />
          </div>
        </div>
        <div className={styles.importanceContainer}>
          <div className={styles.leftContainer}>
            <h2 className={styles.title}>Importance Of Self Care</h2>
            <p className={styles.description}>
              Practicing self-care promotes a healthy relationship with yourself
              to the benefit of your physical, mental, and emotional health.
              When you are unable to care for yourself, it is nearly impossible
              to care for others. Therefore, self-care allows you to establish a
              positive mindset that will translate to good feelings and emotions
              for others around you. By making the time to let yourself
              recharge, you will improve the outlook of yourself and others as
              well as develop significantly lower unhealthy amounts of stress.
            </p>
          </div>
          <div className={styles.rightContainer}>
            <img src="doggie.gif" width="100%"/>
          </div>
        </div>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
