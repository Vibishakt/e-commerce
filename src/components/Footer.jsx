import { Facebook, Instagram, Whatsapp } from "../assets/icons";

const Footer = () => {
  return (
    <div className="w-full bg-teal-500 p-1">
      <div className="flex flex-row justify-evenly p-2 text-teal-900">
        <div className="flex flex-col text-teal-900 p-3 text-center">
          <h3 className="font-bold">USEFULL LINKS</h3>
          <p>Shop</p>
          <p>About Us</p>
          <p>Contact Us</p>
        </div>
        <div className="flex flex-col text-teal-900 p-3 text-center">
          <h3 className="font-bold">CATEGORY</h3>
          <p>Mens</p>
          <p>Womens</p>
          <p>Footwear</p>
          <p>Bags</p>
          <p>Beauty Products</p>
        </div>
        <div className="flex flex-col text-teal-900 p-3 text-center">
          <h3 className="font-bold">SOCIAL</h3>
          <p>Facebook</p>
          <p>Whatsapp</p>
          <p>Instagram</p>
        </div>
      </div>
      <ul className="flex gap-2 justify-center p-2">
        <Facebook className=" bg-white rounded-md p-1" />
        <Whatsapp className=" bg-white rounded-md p-1" />
        <Instagram className=" bg-white rounded-md p-1" />
      </ul>
      <hr className="p-1 w-full" />
      <p className="text-[10px] pb-1 text-center  text-zinc-600">
        CopyRight @2025. All Right Reserverd
      </p>
    </div>
  );
};

export default Footer;
