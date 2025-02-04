import React from "react";

const ButtonPagination = ({
  totalpost,
  postperpage,
  setcurrentpage,
  currentpage,
}) => {
  let pages = [];

  for (let i = 1; i < Math.ceil(totalpost / postperpage); i++) {
    pages.push(i);
  }
  return (
    <div
      className="flex items-center justify-center w-[70%] mx-auto gap-10 mt-4
     ">
      {pages.map((value, idx) => {
        return (
          <button
            key={idx}
            onClick={() => setcurrentpage(value)}
            className={`px-4 py-2 rounded-2xl border transition-all duration-300 ${
              currentpage === value
                ? "bg-blue-500 text-white border-blue-500"
                : "bg-white text-gray-700 border-gray-300 hover:bg-blue-100 hover:border-blue-300"
            }`}>
            {value}
          </button>
        );
      })}
    </div>
  );
};

export default ButtonPagination;
