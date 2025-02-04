import React, { useEffect, useState } from "react";
import Aside from "../aside/inex";
import { myAxios } from "../../..";

const Mainside = () => {
  let [valueoftherange, setvalueoftherange] = useState(1);
  let [data, setdata] = useState([]);
  let [limit, setlimit] = useState(10);
  const handleChange = (event) => {
    setvalueoftherange(event.target.value);
  };

  useEffect(() => {
    myAxios
      .get(`limitproducts?_start=0&_end=1`)
      .then(({ data }) => setdata(data));
  }, []);
  console.log(data);

  return (
    <>
      <div className="flex">
        <div className="w-[20%]">
          <Aside
            valueoftherange={valueoftherange}
            setvalueoftherange={setvalueoftherange}
            handleChange={handleChange}
          />
        </div>
        <div className="w-[80%]"></div>
      </div>
    </>
  );
};

export default Mainside;
