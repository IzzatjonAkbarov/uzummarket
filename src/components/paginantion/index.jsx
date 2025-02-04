import React, { useEffect, useState } from "react";
import Card from "../carditem";
import ButtonPagination from "../paginationbutton";

const PaginationSide = ({ data }) => {
  return (
    <>
      <div className="grid grid-cols-3 px-5 gap-5">
        {data.map((value, index) => (
          <Card key={value.id} {...value} />
        ))}
      </div>
    </>
  );
};

export default PaginationSide;
