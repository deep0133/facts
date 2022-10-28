import React from "react";

export default function RecentCard() {
  return (
    <div className="flex align-baseline ">
      <div className="flex rounded-lg bg-white py-2 px-3">
        <div className=" flex flex-col justify-start">
          <h5 className="font-gentium text-xl font-semibold text-gray-900">
            Spiral fact
          </h5>
          <p className="text-base text-gray-700">
            This is a wider card with supporting text below as a natural lead-in
            to additional content...
          </p>
          <p className="text-end text-xs text-gray-600">
            Last updated 3 mins ago
          </p>
        </div>
      </div>
    </div>
  );
}
