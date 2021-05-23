import Head from "next/head";
import Card from "../component/Card";
import styles from "../styles/dashboard.module.scss";

export default function Dashboard() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Dashboard</title>
      </Head>
      <Card
        path="./puzzle.svg"
        title="Things to Ask yourself"
        route="/ask-yourself"
      />
      <Card path="./tips.svg" title="How to care yourself" route="/tips" />
      <Card
        path="./paint.svg"
        title="How to release stress in One Minute"
        route="/one-minute"
      />
      <Card path="./discuss.svg" title="Share thoughts" route="/thoughts" />
      <Card path="./calendar.svg" title="Track mood" route="/mood-tracker" />
    </div>
  );
}
