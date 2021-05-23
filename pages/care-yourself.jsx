import { useState } from "react";
import TipsCard from "../component/TipsCard";
import data from "../data/careTips.json";
import Head from "next/head";

export default function OneMinute() {
  const [index, setIndex] = useState(0);
  return (
    <div>
       <Head>
        <title>Care Yourself</title>
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
