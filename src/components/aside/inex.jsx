import React from "react";

const Aside = ({ valueoftherange, handleChange }) => {
  return (
    <div className="w-full">
      <h2 className="text-lg font-semibold text-gray-900  mb-3">Категории</h2>
      <ul className="space-y-2 bg-white ">
        <li className="mx-2 text-black  hover:bg-[#E9EBEE] px-3 py-2 rounded-lg cursor-pointer">
          <span className="text-whitw  text-sm">← Все категории</span>
        </li>
        <li className="mx-5 bg-gray-200  font-semibold px-3 py-2 rounded-lg">
          Бытовая техника
        </li>
        <li className="mx-5 text-black  hover:bg-[#E9EBEE] px-3 py-2 rounded-lg cursor-pointer">
          Климатическая техника
        </li>
        <li className="mx-5 text-black  hover:bg-[#E9EBEE] px-3 py-2 rounded-lg cursor-pointer">
          Крупная бытовая техника
        </li>
        <li className="mx-5 text-black  hover:bg-[#E9EBEE] px-3 py-2 rounded-lg cursor-pointer">
          Прочие аксессуары и запчасти для бытовой техники
        </li>
        <li className="mx-5 text-black  hover:bg-[#E9EBEE] px-3 py-2 rounded-lg cursor-pointer">
          Техника для дома
        </li>
        <li className="mx-5 text-black  hover:bg-[#E9EBEE] px-3 py-2 rounded-lg cursor-pointer">
          Техника для красоты
        </li>
        <li className="mx-5 text-black  hover:bg-[#E9EBEE] px-3 py-2 rounded-lg cursor-pointer">
          Техника для кухни
        </li>
      </ul>

      <div>
        <h2 className="text-lg font-semibold text-gray-900  mb-3">Цена, сум</h2>
        <p>tovar narxi: {valueoftherange} so'm</p>
        <input
          type="range"
          min="0"
          max="100"
          className="w-full"
          value={valueoftherange}
          onChange={(event) => handleChange(event)}
        />
      </div>
    </div>
  );
};

export default Aside;
