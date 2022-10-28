import React from "react";
import FactRemaingCard from "./FactRemaingCard";
import FactCard from "./FactCard";
export default function DetailFact({ factArray, showObj, changeStateHandler }) {
  return (
    <div>
      <div className="bg-light m-5 mx-auto grid w-full grid-cols-12 gap-8 align-baseline md:w-[90%] lg:w-[80%]">
        <div className="col-span-12 md:col-span-8">
          <FactCard
            title={showObj.title}
            img={showObj.img}
            desc={showObj.desc}
            contentType={showObj.contentType}
          />
        </div>
        <div className="hidden pt-12 md:col-span-4 md:flex">
          <div className="ad-box-1 flex h-[600px] w-full items-center justify-center rounded-lg bg-gray-200">
            Ad-Box-1
          </div>
        </div>

        <div className="col-span-12 mt-6 px-3 py-2 font-sans text-2xl font-bold">
          Related Facts
        </div>
        <div className="col-span-12 grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
          {factArray
            ? factArray.map((ele, index) => {
                var binary = "";
                var bytes = new Uint8Array(ele.imageUrl.data.data);
                var len = bytes.byteLength;
                for (var i = 0; i < len; i++) {
                  binary += String.fromCharCode(bytes[i]);
                }

                return (
                  <FactRemaingCard
                    changeState={() => {
                      changeStateHandler(ele.title, binary, ele.desc);
                    }}
                    id={index}
                    key={index}
                    imgUrl={binary}
                    contentType={ele.imageUrl.contentType}
                    title={ele.title ? ele.title : "Not added yet title"}
                    desc={ele.desc ? ele.desc : "not added yet"}
                    len="60"
                  />
                );
              })
            : ""}
        </div>
        <div className="col-span-12 mx-auto border-2">
          <button className="text-md font-serif-pro w-40 rounded-full border-2 bg-gray-700 py-1 font-bold text-white">
            Load More
          </button>
        </div>
      </div>
    </div>
  );
}
