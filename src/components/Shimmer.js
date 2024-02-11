import React from "react";

function Shimmer() {
  return (
    <div className="p-8 border w-[600px] bg-gray-100 shadow-md mx-auto text-center mt-28">
      <div className="flex border py-12 px-8 w-[525px] bg-gray-50 shadow-sm">
        <div className="w-40 h-40 bg-gray-100 shadow-md"></div>

        <div className="pl-4 mt-3 mx-10">
          <div className="mb-2 flex">
            <p className="bg-gray-100 w-24 h-6 mr-4 shadow-sm"></p>{" "}
            <p className="bg-gray-100 w-24 h-6 shadow-sm"></p>
          </div>
          <p className="mb-2 bg-gray-100 w-24 h-6 shadow-sm"></p>
          <p className="bg-gray-100 w-24 h-6 shadow-sm"></p>
        </div>
      </div>
    </div>
  );
}

export default Shimmer;
