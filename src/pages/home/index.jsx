import Carousel from "../../components/Carousel";
import Features from "./Features";
import ProductsCategory from "./ProductsCategory";

function Home() {
  return (
    <div className="bg-teal-50">
      <Carousel />
      <ProductsCategory />
      <Features />
    </div>
  );
}

export default Home;
