// import Posts from "../component/Posts";
import Post from "../component/Post";
import Head from "next/head";

export default function Thoughts() {
  return (
    <div>
      <Head>
        <title>Thoughts</title>
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <Post />
      {/* <Posts /> */}
    </div>
  );
}
