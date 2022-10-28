import React from "react";

export default function FactCard({ title, img, desc, contentType }) {
  return (
    <div className="flex justify-center rounded-md px-4 py-3 shadow-md">
      <div className="rounded-lg ">
        <h5 className="mb-3 text-xl font-medium text-gray-900">
          {title ? title : "About Mountain"}
        </h5>
        <a href="#">
          <img
            className="h-[400px] w-full rounded-t-lg"
            src={
              img
                ? `data:${contentType};base64,${btoa(img)}`
                : require("./Images/mountains.jpg")
            }
            loading="lazy"
            alt=""
          />
        </a>
        <div className="p-6 pl-2">
          <p className="mb-4 text-base text-gray-700">
            {desc
              ? desc
              : "A Spiral is the shape of an ongoing curving line that forms circles around a centre point. The spiral pattern is one of the most common in nature. For example, snail shells, whirlpools and complete galaxies. Spirals are some of the oldest geometric shapes in age-old artwork dating going back at least to the Neolithic period. This period is thousands of years before writing. As of now, we know very little about their religious beliefs. However, we can only guess about the common meanings of the symbols."}
          </p>
        </div>
      </div>
    </div>
  );
}
