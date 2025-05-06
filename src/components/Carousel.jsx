import React, { useState } from "react";

const Carousel = () => {
  const [current, setCurrent] = useState(2);

  const images = [
    "https://t4.ftcdn.net/jpg/03/20/46/13/360_F_320461388_5Snqf6f2tRIqiWlaIzNWrCUm1Ocaqhfm.jpg",
    "https://t3.ftcdn.net/jpg/04/38/59/88/360_F_438598896_D9pyLmbMZ02CrxURfHxU4nG5UlzXv6Dy.jpg",
    "https://t4.ftcdn.net/jpg/03/06/69/49/360_F_306694930_S3Z8H9Qk1MN79ZUe7bEWqTFuonRZdemw.jpg",
    "https://t4.ftcdn.net/jpg/03/48/05/47/360_F_348054737_Tv5fl9LQnZnzDUwskKVKd5Mzj4SjGFxa.jpg",
  ];

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="mt-[50px] h-[400px] relative w-full px-2 mx-auto overflow-hidden rounded-2xl shadow-lg">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Slide ${index}`}
            className="w-full flex-shrink-0"
          />
        ))}
      </div>

      {/* Navigation buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white p-2 rounded-full shadow"
      >
        ❮
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white p-2 rounded-full shadow"
      >
        ❯
      </button>

      {/* Indicators */}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full ${
              current === index ? "bg-white" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
