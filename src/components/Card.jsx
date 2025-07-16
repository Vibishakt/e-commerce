import { RatingImg } from "assets/icons/Svg";
import { useNavigate } from "react-router-dom";

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
  const navigator = useNavigate();
  if (varient === "product") {
    return (
      <div
        onClick={() => {
          if (navigate) navigator(navigate);
        }}
        className={`relative 
          ${
            navigate ? "cursor-pointer" : ""
          } w-[150px] md:w-[200px] p-2 rounded-xl shadow-md shadow-gray-700 hover:scale-95 transition-all ease-in-out duration-300 bg-white  ${className}`}
      >
        <img
          className=" rounded-lg h-[150px] md:h-[270px] object-cover"
          src={url}
          alt=""
        />
        <div className=" h-[70px] md:h-[120px] bottom-1 md:bottom-0 bg-white rounded-md p-2 md:p-2 left-0 md:left-2">
          <h4 className="text-[8px] md:text-lg align-center text-slate-950 font-bold w-[160px] whitespace-normal overflow-hidden text-ellipsis md:whitespace-nowrap">
            {title}
          </h4>
          <p className="text-[6px] md:text-lg text-center  text-slate-950 font-normal">
            {description}
          </p>
          <p className="text-[6px] md:text-lg text-left  text-teal-800 font-bold">
            ₹{price}
          </p>
          <p className="text-left p-1 justify-center text-[6px] md:text-xs w-[40%] md:w-[55%] text-slate-950 font-bold border rounded-lg bg-slate-400">
            {deliveryStatus}
          </p>
          <div className="flex flex-row md:p-2 md:gap-3 gap-1 items-center">
            <div className="flex px-1 items-center gap-1 text-white border rounded-xl bg-green-700">
              <p className="text-[6px] md:text-xs">{ratings}</p>
              <RatingImg />
            </div>
            &ensp;
            <p className="text-[6px] md:text-xs text-slate-950 font-normal">
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
      className={`sm:h-[150px] relative cursor-pointer md:h-[300px] rounded-lg shadow-md hover:scale-105 transition-all ease-in-out duration-300 bg-white ${className}`}
    >
      <img
        className="sm:h-[100px] sm:p-1 md:p-3 rounded-lg md:h-[270px] object-cover"
        src={url}
        alt=""
      />
      <div className=" absolute z-10 bottom-1 md:text-center text-center sm:p-1 md:p-1 bg-teal-700 rounded-md md:w-[175px] w-[70px] gap-2 md:left-3 left-1 hover:scale-105 transition-all ease-in-out duration-300">
        <h4 className="text-[6px] md:text-[14px] md:items-center items-center font-bold p-1">
          {title}
        </h4>
        <p className="md:text-lg text-[8px] text-center font-normal">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Card;
