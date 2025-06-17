import { CloseIcon } from "assets/icons/Svg";
import { useDispatch, useSelector } from "react-redux";
import { getToaster } from "redux/selector";
import { toaster } from "redux/slice";

export const Toast = () => {
  const { show = false, message = "" } = useSelector(getToaster);
  const dispatch = useDispatch();

  if (!show) return null;
  return (
    <div className="fixed top-16 right-4 z-50 w-[220px] h-max border border-teal-800 bg-teal-300 rounded-lg">
      <div className="flex justify-around align-middle p-2">
        <span className="text-teal-800 text-[15px] font-bold">{message}</span>
        <CloseIcon
          onClose={() => dispatch(toaster({ show: false, message: "" }))}
        />
      </div>
    </div>
  );
};
