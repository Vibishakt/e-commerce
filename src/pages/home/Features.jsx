import { features } from "./data";
import Card from "../../components/Card";
import Heading from "../../components/Heading";

function Features() {
  return (
    <div className="p-5 grid justify-center w-full bg-teal-50">
      <Heading
        label="Features Products"
        className="text-[12px] md:text-[26px] text-2xl font-bold flex justify-center"
      />
      <div className="grid grid-cols-10 gap-4 m-2 w-full">
        {features.map((data) => (
          <Card
            key={data.id}
            url={data.url}
            title={data.title}
            description={data.description}
            className="w-[90%] h-auto md:col-span-2 col-span-3"
          />
        ))}
      </div>
    </div>
  );
}

export default Features;
