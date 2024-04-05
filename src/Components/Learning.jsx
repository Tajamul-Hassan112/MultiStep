import React from "react";
import Build from  "/Images/build.jpg"
import Math from  "/Images/math.jpg"
const Learning = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-2xl font-bold">
          Learning paths based on your answers
        </h1>
        <p>Choose one to get started. You can switch anytime.</p>
        <div className="flex justify-center items-center">
          <div className="max-w-md m-4 bg-gray-200 p-4 rounded-lg flex hover:cursor-pointer">
            <div className="flex flex-col justify-center max-w-xs">
              <div className="mb-4">
                <p className="text-xs uppercase font-bold text-gray-600 bg-yellow-300 px-1 rounded-full ml-20 w-[50%] py-2">
                  MOST POPULAR
                </p>
              </div>
              <h1 className="text-lg font-bold">Foundational Math Build</h1>
              <p className="text-sm">
                Build your foundational skills in algebra, geometry, and
                probability.
              </p>
            </div>
            <div className="ml-4">
              <img
                src={Build}
                alt=""
                className="w-48 h-48 rounded-lg"
              />
            </div>
          </div>
          <div className="max-w-md m-4 bg-gray-200 p-4 rounded-lg flex hover:cursor-pointer">
            <div className="flex flex-col justify-center">
              <h1 className="text-lg font-bold">Mathematical Thinking</h1>
              <p className="text-sm">
                Build your foundational skills in algebra, geometry, and
                probability
              </p>
            </div>
            <div className="ml-4">
              <img
                src={Math}
                alt=""
                className="w-48 h-48 rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Learning;
