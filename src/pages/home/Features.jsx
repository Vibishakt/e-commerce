import React from "react";
import { features } from "./data";
import Card from "../../components/Card";
import Heading from "../../components/Heading";

function Features() {
  return (
    <div className="mt-2 p-2 grid justify-center w-full">
      <Heading label="Features Products" className="text-2xl font-bold" />
      <div className="grid grid-cols-12 gap-3 m-3 w-full">
        {features.map((data) => (
          <Card
            key={data.id}
            url={data.url}
            title={data.title}
            description={data.description}
          />
        ))}
      </div>
    </div>
  );
}

export default Features;
