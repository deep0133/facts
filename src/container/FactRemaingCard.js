import React from "react";
import { Link } from "react-router-dom";

export default function FactRemaingCard({
  imgUrl,
  title,
  desc,
  len,
  id,
  changeState,
  contentType,
}) {
  return (
    <Link
      to="/read"
      id={id}
      className="flex w-full scale-90 justify-center transition-all hover:scale-100 hover:shadow-lg">
      <div
        onClick={() => {
          changeState(title, imgUrl, desc, contentType);
        }}
        className="w-full rounded-lg bg-white shadow-lg">
        <img
          className="mx-auto w-full scale-90 rounded-t-lg"
          src={`data:${imgUrl.contentType};base64,${btoa(imgUrl)}`}
          alt=""
        />
        <div className="p-4">
          <h5 className="font-gentium mb-2 text-xl font-bold text-gray-900 ">
            {title ? title.slice(0, 20) + "..." : ""}
          </h5>
          <p className="mb-4 text-base text-gray-700">
            {desc ? desc.slice(0, len) : "Not description added"}
          </p>
        </div>
      </div>
    </Link>
  );
}
