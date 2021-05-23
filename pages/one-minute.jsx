import { useState } from "react";
import TipsCard from "../component/TipsCard";
import data from "../data/tips.json";
export default function OneMinute() {
  const [index, setIndex] = useState(0);
  return (
    <div>
      <TipsCard
        title={data[index].title}
        description={data[index].description}
        index={index}
        setIndex={setIndex}
      />
    </div>
  );
}
