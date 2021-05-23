import Head from "next/head";
import Card from "../component/Card";
import styles from "../styles/dashboard.module.scss";
import jokesData from "../data/jokes.json";
import quotesData from "../data/quotes.json";

export default function Dashboard() {
  const quoteIndex = Math.floor(Math.random() * 6);
  return (
    <div className={styles.container}>
      <Head>
        <title>Dashboard</title>
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <div className={styles.quoteContainer}>
        <p className={styles.quote}>{quotesData[quoteIndex].quote}</p>
        <span className={styles.author}>- {quotesData[quoteIndex].author}</span>
      </div>
      <div className={styles.cardContainer}>
        <Card
          path="./puzzle.svg"
          title="Things to Ask yourself"
          route="/ask-yourself"
          className={styles.askYourself}
        />
        <Card
          path="./tips.svg"
          title="How to care yourself"
          route="/care-yourself"
          className={styles.selfcare}
        />
        <Card
          path="./paint.svg"
          title="How to release stress in One Minute"
          route="/one-minute"
          className={styles.oneMinute}
        />
        <Card
          path="./discuss.svg"
          title="Share thoughts"
          route="/thoughts"
          className={styles.thoughts}
        />
        <Card
          path="./calendar.svg"
          title="Track mood"
          route="/mood-tracker"
          className={styles.moodTracker}
        />
      </div>
      <div className={styles.jokesContainer}>
        <p className={styles.title}>Today’s Punny Joke</p>
        <p className={styles.jokes}>
          {jokesData[Math.floor(Math.random() * 5)]}
        </p>
      </div>
    </div>
  );
}
