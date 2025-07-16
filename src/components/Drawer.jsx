import { useDispatch, useSelector } from "react-redux";
import Heading from "./Heading";
import { CloseIcon } from "assets/icons/Svg";
import { getShowDrawer } from "redux/selector";
import { showDrawer } from "redux/slice";
import Address from "pages/components/Stepper/Address";

function Drawer() {
  const {
    content = "",
    title = "",
    className = "",
    show = false,
    addressData = {},
  } = useSelector(getShowDrawer);

  const drawerMap = {
    address: Address,
  };
  const dispatch = useDispatch();
  const Map = drawerMap[content];
  if (!show) return null;
  return (
    <div
      className={`fixed p-2 z-10 top-[5rem] rounded-md w-[100px] md:[400px] right-0 bg-white shadow-lg h-[50%] md:h-[80%] delay-200 transition-transform ${className} transform ${
        show ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <CloseIcon
        onClick={() =>
          dispatch(
            showDrawer({
              show: false,
              content: "",
              title: null,
              className: null,
              addressData: null,
            })
          )
        }
        className="cursor-pointer"
      />
      <Heading
        label={title}
        className="text-[10px] md:text-[15px] text-center font-bold pb-3"
      />
      <div className="flex w-full md:w-full overflow-y-auto h-[78%]">
        {Map ? <Map addressData={addressData} /> : null}
      </div>
    </div>
  );
}

export default Drawer;
