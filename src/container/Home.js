import React, { useEffect, useState } from "react";
import FactCard from "./FactCard";
import RecentCard from "./RecentCard";
import Header from "./Header";
import FactRemaingCard from "./FactRemaingCard";

export default function Home({
  factArray,
  showObj,
  changeStateHandler,
  selectedCategory,
}) {
  return (
    <>
      <Header />
      <div className="home-page relative mx-auto h-auto w-full lg:w-[95%]">
        <div className="m-0 grid  grid-cols-12 sm:m-5 md:p-2 lg:p-5">
          <div className="col-span-12 w-full space-y-5 px-5 md:col-span-7 md:space-y-3 lg:col-span-8">
            <div className="one-fact">
              <FactCard
                title={showObj.title}
                img={showObj.img}
                desc={showObj.desc}
              />
            </div>
            <div className="remaing-fact-and-heading pt-5 pb-3">
              <h3 className="font-serif-pro pl-3 text-2xl font-semibold uppercase ">
                {selectedCategory} Facts
              </h3>

              <div className="remaing-fact-card relative grid h-auto grid-cols-1 gap-2 xs:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {/* only 9 card render other: */}
                {factArray.length > 0 ? (
                  factArray.map((ele, index) => {
                    var binary = "";
                    var bytes = new Uint8Array(ele.imageUrl.data.data);
                    var len = bytes.byteLength;
                    for (var i = 0; i < len; i++) {
                      binary += String.fromCharCode(bytes[i]);
                    }

                    return (
                      <FactRemaingCard
                        changeState={() => {
                          changeStateHandler(ele.title, ele.imageUrl, ele.desc);
                        }}
                        key={index}
                        id={index}
                        imgUrl={binary}
                        title={ele.title ? ele.title : "Not added yet title"}
                        desc={ele.desc ? ele.desc : "not added yet"}
                        len="60"
                      />
                    );
                  })
                ) : (
                  <p className="ml-3">0 Fact Found</p>
                )}
              </div>
              <div className="pagination flex w-full justify-center">
                <nav className="Page navigation">
                  <ul className="list-style-none flex">
                    <li className="page-item disabled">
                      <a
                        className="page-link pointer-events-none relative block rounded-full bg-transparent py-1.5 px-3 text-gray-500 outline-none transition-all duration-300 focus:shadow-none"
                        href="#">
                        Previous
                      </a>
                    </li>
                    <li className="page-item">
                      <a
                        className="page-link relative block rounded-full bg-transparent py-1.5 px-3 text-gray-800 outline-none transition-all duration-300 hover:bg-gray-200 hover:text-gray-800 focus:shadow-none"
                        href="#">
                        1
                      </a>
                    </li>
                    <li className="page-item active">
                      <a
                        className="page-link relative block rounded-full bg-blue-600 py-1.5 px-3 text-white shadow-md outline-none transition-all duration-300 hover:bg-blue-600 hover:text-white focus:shadow-md"
                        href="#">
                        2
                      </a>
                    </li>
                    <li className="page-item">
                      <a
                        className="page-link relative block rounded-full bg-transparent py-1.5 px-3 text-gray-800 outline-none transition-all duration-300 hover:bg-gray-200 hover:text-gray-800 focus:shadow-none"
                        href="#">
                        3
                      </a>
                    </li>
                    <li className="page-item">
                      <a
                        className="page-link relative block rounded-full bg-transparent py-1.5 px-3 text-gray-800 outline-none transition-all duration-300 hover:bg-gray-200 hover:text-gray-800 focus:shadow-none"
                        href="#">
                        Next
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
          <div className="col-span-12 space-y-5 md:col-span-5 lg:col-span-4">
            <div className="recent-added space-y-2">
              <h2 className="font-serif-pro pl-1 text-lg font-bold">
                Most Recent Added Facts
              </h2>
              <RecentCard />
              <RecentCard />
              <RecentCard />
              <RecentCard />
            </div>

            <div className="top-rated space-y-2">
              <h2 className="font-serif-pro pl-1 text-lg font-bold">
                Top 5 Facts
              </h2>
              <RecentCard />
              <RecentCard />
              <RecentCard />
              <RecentCard />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
