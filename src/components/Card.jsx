import { RatingImg } from "assets/icons/Svg";

const Card = ({
  url,
  title,
  description,
  className,
  price,
  deliveryStatus,
  reviews,
  ratings,
  navigate = "",
  varient = "",
}) => {
  if (varient === "product") {
    return (
      <div
        onClick={() => {
          if (navigate) window.location.href = navigate;
        }}
        className={`relative 
          ${
            navigate ? "cursor-pointer" : ""
          } w-[200px] p-2 rounded-xl shadow-md shadow-gray-700 hover:scale-95 transition-all ease-in-out duration-300 bg-white  ${className}`}
      >
        <img className=" rounded-lg h-[270px] object-cover" src={url} alt="" />
        <div className=" h-[120px] bottom-3 bg-white rounded-md p-2 left-2">
          <h4 className="text-center text-slate-950 font-bold w-[160px] overflow-hidden text-ellipsis whitespace-nowrap">
            {title}
          </h4>
          <p className="text-center  text-slate-950 font-normal">
            {description}
          </p>
          <p className="text-left  text-teal-800 font-bold">₹{price}</p>
          <p className="text-left p-1 justify-center text-xs w-[55%] text-slate-950 font-bold border rounded-lg bg-slate-400">
            {deliveryStatus}
          </p>
          <div className="flex flex-row p-2 g-3 items-center">
            <div className="flex px-1 items-center gap-1 text-white border rounded-xl bg-green-700">
              <p className="text-xs">{ratings}</p>
              <RatingImg />
            </div>
            &ensp;
            <p className="text-xs text-slate-950 font-normal">
              <span className="font-bold text-slate-700">{reviews} </span>{" "}
              Review
            </p>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div
      onClick={() => (window.location.href = navigate)}
      className={`relative cursor-pointer h-[300px] rounded-lg shadow-md hover:scale-105 transition-all ease-in-out duration-300 bg-white ${className}`}
    >
      <img className="p-3 rounded-lg h-[270px] object-cover" src={url} alt="" />
      <div className="absolute z-20 bottom-3 bg-fuchsia-400 rounded-md p-2 left-3 hover:scale-105 transition-all ease-in-out duration-300">
        <h4 className="text-center font-bold">{title}</h4>
        <p className="text-center font-normal">{description}</p>
      </div>
    </div>
  );
};

export default Card;
