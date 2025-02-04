import React, { useEffect, useState } from "react";
import Aside from "../aside/inex";
import { myAxios } from "../../..";
import PaginationSide from "../paginantion";
import ButtonPagination from "../paginationbutton";
const Mainside = () => {
  let [valueoftherange, setvalueoftherange] = useState(100000);

  const handleChange = (event) => {
    setvalueoftherange(event.target.value);
  };
  //pagination for ui

  let [data, setdata] = useState([]);
  let [limit, setlimit] = useState(10);
  let [currentpage, setcurrentpage] = useState(1);
  let [postperpage, setpostperpage] = useState(12);
  const lastpostindex = currentpage * postperpage;
  const firstpostindex = lastpostindex - postperpage;
  let [alldata, setalldata] = useState([]);
  useEffect(() => {
    myAxios.get(`limitproducts`).then(({ data }) => setalldata(data));
  }, []);
  useEffect(() => {
    let newdata = alldata.filter(
      (value) => value.total_price > valueoftherange
    );
    setdata(newdata);
    console.log(newdata);
  }, [valueoftherange]);
  useEffect(() => {
    myAxios
      .get(`limitproducts?_start=${firstpostindex}&_end=${lastpostindex}`)
      .then(({ data }) => setdata(data));
  }, [currentpage]);

  return (
    <>
      <div className="flex">
        <div className="w-[20%] h-screen sticky top-3">
          <Aside
            valueoftherange={valueoftherange}
            setvalueoftherange={setvalueoftherange}
            handleChange={handleChange}
          />
        </div>
        <div className="w-[80%]">
          <PaginationSide data={data} />
          <ButtonPagination
            totalpost={alldata.length}
            postperpage={postperpage}
            setcurrentpage={setcurrentpage}
          />
        </div>
      </div>
    </>
  );
};

export default Mainside;
