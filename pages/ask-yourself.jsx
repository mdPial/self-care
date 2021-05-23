import { useState } from "react";
import TipsCard from "../component/TipsCard";
import data from "../data/question.json";
import Head from "next/head";

export default function AskYourself() {
  const [index, setIndex] = useState(0);
  return (
    <div>
    <Head>
        <title>Ask Yourself</title>
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <TipsCard
        title={data[index].title}
        description={data[index].description}
        index={index}
        setIndex={setIndex}
        dataSize={data.length}
      />
    </div>
  );
}
