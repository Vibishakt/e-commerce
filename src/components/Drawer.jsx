import Heading from "./Heading";
import { CloseIcon } from "assets/icons/Svg";

function Drawer({
  content = "",
  title = "",
  width = "400px",
  open = false,
  setOpen = () => {},
}) {
  return (
    <div
      className={`fixed p-2 top-[4rem] right-0 bg-white shadow-lg w-[${width}] h-full delay-200 transition-transform transform ${
        open ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <CloseIcon onClick={() => setOpen(!open)} className="cursor-pointer" />
      <Heading
        label={title}
        className="text-[15px] text-center font-bold pb-3"
      />
      <div className="flex w-full overflow-y-auto h-[78%]">{content}</div>
    </div>
  );
}

export default Drawer;
