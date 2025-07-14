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
    <div
      className={`show? w-full fixed flex justify-center h-full top-0 ${className}`}
    >
      <div className="flex flex-col justify-center bg-white w-[40%] h-[40%] mt-40 border-1 rounded-lg shadow-2xl gap-5">
        <div className="text-black text-center font-bold">{title}</div>
        <div className="text-black text-center font-semibold">{content}</div>
        <div className="flex justify-center gap-5">
          <Button
            varient="primary"
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
