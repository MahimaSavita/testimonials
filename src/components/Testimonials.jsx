import React from "react";
import { useState } from "react";
import Card from "./Card";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

export function Testimonials(props) {
  let reviews = props.reviews;
  const [index, setIndex] = useState(0);

  function LeftShiftHandler() {
    if (index - 1 < 0) {
      setIndex(reviews.length - 1);
    } else {
      setIndex(index - 1);
    }
  }

  function rightShiftHandler() {
    if (index + 1 >= reviews.length) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  }

  function shuffleHandler() {
    let randomInd = Math.floor(Math.random() * reviews.length);
    setIndex(randomInd);
  }

  return (
    <div className="w-[85vw] h-[80vh] md:w-[700px] bg-white flex flex-col justify-center items-center mt-10 p-10 transition-all duration-700 hover:shadow-xl rounded-md">
      <Card review={reviews[index]}></Card>

      <div className="flex text-3xl mt-10 gap-3 text-pink-300 font-bold mx-auto">
        <button
          onClick={LeftShiftHandler}
          className="cursor-pointer hover:text-pink-300"
        >
          <FiChevronLeft />
        </button>
        <button
          onClick={rightShiftHandler}
          className="cursor-pointer hover:text-pink-300"
        >
          <FiChevronRight />
        </button>
      </div>

      <div className="mt-6">
        <button
          onClick={shuffleHandler}
          className="bg-pink-300 hover:bg-pink-300 transition-all duration-200 cursor-pointer px-10 py-2 rounded-md font-bold text-white text-lg"
        >
          suffle
        </button>
      </div>
    </div>
  );
}

export default Testimonials;
