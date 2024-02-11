import React, { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Card = () => {
  const [detail, setDetail] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://randomuser.me/api/?page=1&results=1&seed=abc"
    );

    const json = await data.json();
    console.log(json);

    setDetail(json?.results[0]);
  };

  return detail.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="p-8 border w-[600px] shadow-md bg-gray-100 mx-auto mt-28">
      <div className="flex border py-12 px-8 w-[525px] shadow bg-gray-50">
        <div className="shadow-sm border">
          <img src={detail.picture.large} className="w-40 shadow-lg" />
        </div>

        <div className="pl-4 mt-3 mx-10 font-bold">
          <p className="mb-2">
            <span>{detail.name.first}</span> <span>{detail.name.last}</span>
          </p>
          <p className="mb-2">
            {detail.gender.charAt(0).toUpperCase() + detail.gender.substring(1)}
          </p>
          <p>{detail.phone}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
