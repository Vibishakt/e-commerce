import { useDispatch, useSelector } from "react-redux";
import Button from "./Button";
import { getShowPopup } from "redux/selector";
import { showPopup } from "redux/slice";

export const Popup = ({ className = "" }) => {
  const {
    title = "",
    content = "",
    show = false,
    type = "",
    onButtonClick = () => {},
  } = useSelector(getShowPopup);

  const dispatch = useDispatch();

  if (!show) return null;
  return (
    <div className="w-full fixed flex justify-center h-full top-0">
      <div
        className={`show? flex flex-col justify-center bg-white w-[60%] md:w-[40%] md:h-[40%] h-[18%] mt-40 border-1 rounded-lg shadow-2xl gap-5 ${className}`}
      >
        <div className="text-black text-[15px] md:text-[20px] text-center font-bold">
          {title}
        </div>
        <div className="text-black text-[10px] md:text-[15px] text-center font-semibold">
          {content}
        </div>
        <div className="flex justify-center gap-5">
          <Button
            varient="primary"
            className="md:w-[20%] w-[30%] md:h-full h-[90%] text-[8px] md:text-[18px]"
            onClick={() =>
              dispatch(
                showPopup({
                  title: null,
                  content: null,
                  show: false,
                  type: null,
                  onButtonClick: () => {},
                })
              )
            }
          >
            Cancel
          </Button>

          {type && (
            <Button
              className="w-[15%]"
              onClick={onButtonClick}
              variant="primary"
            >
              {type}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};
