import { CloseIcon } from "assets/icons/Svg";

export const Toast = ({ message, show, onClose }) => {
  if (!show) return null;
  return (
    <div className="fixed top-16 right-4 z-50 w-[220px] h-max border border-teal-800 bg-teal-300 rounded-lg">
      <div className="flex justify-around align-middle p-2">
        <span className="text-teal-800 text-[15px] font-bold">{message}</span>
        <CloseIcon onClick={onClose} />
      </div>
    </div>
  );
};
