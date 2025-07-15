import { features } from "./data";
import Card from "../../components/Card";
import Heading from "../../components/Heading";

function Features() {
  return (
    <div className="flex justify-center gap-5 w-full p-5 bg-teal-50">
      <div className="grid justify-center w-[92%]">
        <Heading
          label="Features Products"
          className="text-[12px] md:text-[26px] text-2xl font-bold flex justify-center p-2"
        />
        <div className="grid grid-cols-10 md:gap-3 gap-6 md:m-3 m-3 w-full">
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
    </div>
  );
}

export default Features;
