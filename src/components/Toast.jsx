import { CloseIcon } from "assets/icons/Svg";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getToaster } from "redux/selector";
import { toaster } from "redux/slice";

export const Toast = () => {
  const {
    show = false,
    message = "",
    varient = "success",
  } = useSelector(getToaster);
  const dispatch = useDispatch();

  useEffect(() => {
    if (show) {
      setTimeout(
        () =>
          dispatch(toaster({ show: false, message: "", varient: "success" })),
        3000
      );
    }
  }, [show]);

  const getBg = (varity) => {
    if (varity === "info") return "bg-blue-300";
    if (varity === "error") return "bg-red-300";
    if (varity === "warning") return "bg-orange-300";
    return "bg-teal-300";
  };

  if (!show) return null;
  return (
    <div
      className={`fixed top-16 right-4 z-50 w-[220px] h-max border border-teal-800 ${getBg(
        varient
      )} rounded-lg`}
    >
      <div className="flex justify-around align-middle p-2">
        <span className="text-teal-800 text-[15px] font-bold">{message}</span>
        <CloseIcon
          onClose={() =>
            dispatch(toaster({ show: false, message: "", varient: "success" }))
          }
        />
      </div>
    </div>
  );
};
