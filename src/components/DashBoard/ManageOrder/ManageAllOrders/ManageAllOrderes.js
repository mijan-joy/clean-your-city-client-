import React from "react";

const ManageAllOrderes = ({ order }) => {
  const { img, serviceName, price, description } = order.info;
  return (
    <div className=" m-4 flex justify-center text-center px-6 md:px-2 lg:px-2 shadow-lg  rounded-lg py-4 mx-6 lg:mx-2 md:mx-2 bg-pink-200">
      <div>
        <div className="flex justify-between items-center px-4 my-4">
          <div className="bg-pink-300 rounded-full w-24 h-24 flex justify-center items-center">
            <img className="w-16" src={img} alt="" />
          </div>
          <div className="flex flex-col justify-end">
            <button className="bg-pink-100 text-green-600 rounded-md my-1 py-2 text-sm px-4">
              update
            </button>
            <button className="bg-red-500 text-white my-1 rounded-md py-2 text-sm px-4">
              Delete
            </button>
          </div>
        </div>
        <h2 className="text-lg font-bold">{serviceName}</h2>
        <p className="text-pink-600 font-semibold">${price}</p>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  );
};

export default ManageAllOrderes;
