import { features } from "./data";
import Card from "../../components/Card";
import Heading from "../../components/Heading";

function Features() {
  return (
    <div className="mt-2 p-2 grid justify-center w-full bg-teal-50">
      <Heading
        label="Features Products"
        className="text-2xl font-bold flex justify-center"
      />
      <div className="grid grid-cols-10 gap-2 m-3 w-full">
        {features.map((data) => (
          <Card
            key={data.id}
            url={data.url}
            title={data.title}
            description={data.description}
            className="w-[90%] h-auto col-span-2"
          />
        ))}
      </div>
    </div>
  );
}

export default Features;
