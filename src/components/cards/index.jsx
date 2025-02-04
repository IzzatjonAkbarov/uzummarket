import { useEffect, useState } from "react";
import Card from "../carditem";
import { myAxios } from "../../..";

const Cards = () => {
  let [data, setdata] = useState([]);
  useEffect(() => {
    myAxios.get(`Products`).then(({ data }) => setdata(data));
  }, []);
  console.log(data);

  return (
    <div className="grid grid-cols-4 gap-5">
      {data.map((value) => {
        return <Card key={value.id} {...value} />;
      })}
    </div>
  );
};

export default Cards;
