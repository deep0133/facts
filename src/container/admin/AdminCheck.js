import React, { useEffect, useState } from "react";
import AddFact from "./AddFact";
import AdminLoginForm from "./AdminLoginForm";
import AllFact from "./AllFact";
import UpdateFact from "./UpdateFact";
export default function AdminCheck({ selectedCategory }) {
  // admin id store here:
  const [admin, setAdmin] = useState("");

  // forms:
  const [addPage, setShowAddPage] = useState(false);
  const [updatePage, setShowUpdatePage] = useState(false);

  // facts:
  const [factArray, setFactArray] = useState([]);

  // count number of facts:
  const [count, setCount] = useState(0);

  //Fact Data to be updated:
  const [oldFact, setOldFact] = useState({});

  useEffect(() => {
    const fetchFact = async () => {
      const url = `http://localhost:3005/api/user/getfacts/${selectedCategory}`;
      let response = await fetch(url);
      response = await response.json();
      await setFactArray(response);
      await setCount(response.length);
    };
    fetchFact();
  }, [selectedCategory]);

  return (
    <>
      {admin === "" ? (
        <div className="container mx-auto">
          <AdminLoginForm setAdmin={setAdmin} />
        </div>
      ) : (
        <div className="my-5 w-full bg-[#f3f3f3]">
          <div className="container mx-auto grid grid-cols-8 gap-4 p-5 shadow-md">
            <div className="order-last col-span-full h-[72vh] bg-[#f3f4f3] p-3 md:order-first md:col-span-3 lg:col-span-2">
              <h2 className="admin-panel font-mulish text-2xl font-bold">
                Admin Panel
              </h2>
              <div className="list mt-6">
                <ul className="list-none space-y-6">
                  <li
                    onClick={() => {
                      setShowAddPage(false);
                      setShowUpdatePage(false);
                    }}
                    className="font-mulish scale-95 rounded-md py-3 px-4 text-xl font-medium shadow-lg transition-all hover:scale-100 hover:cursor-pointer hover:bg-[#dedbdb]">
                    View
                  </li>
                  <li
                    onClick={() => {
                      setShowAddPage(addPage ? false : true);
                      setShowUpdatePage(false);
                    }}
                    className="font-mulish scale-95 rounded-md py-3 px-4 text-xl font-medium shadow-lg transition-all hover:scale-100 hover:cursor-pointer hover:bg-[#dedbdb]">
                    Add
                  </li>
                  <li className="font-mulish scale-95 rounded-md py-3 px-4 text-xl font-medium shadow-lg transition-all hover:scale-100 hover:cursor-pointer hover:bg-[#dedbdb]">
                    Category
                  </li>
                  <li className="font-mulish flex scale-95 items-center justify-between rounded-md py-3 px-4 text-xl font-medium shadow-lg transition-all hover:scale-100 hover:cursor-pointer hover:bg-[#dedbdb]">
                    <span>Total facts</span>{" "}
                    <span className="rounded-full border-2 bg-gray-300 px-2 py-1 text-end">
                      {count}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            {!addPage && !updatePage ? (
              <div
                className="col-span-full h-[72vh] rounded-md p-5 shadow-md shadow-red-300 md:col-span-5 lg:col-span-6"
                style={{
                  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)), url(${require("../Images/mountains.jpg")})`,
                }}>
                <h3 className="font-mulish text-4xl font-bold text-white">
                  View Fact
                </h3>
                <div className="scroll-bar-hidden relative h-[95%] overflow-auto">
                  <div className="All-facts my-2 grid grid-cols-2 gap-1 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 ">
                    {factArray.length > 0 ? (
                      factArray.map((ele, index) => {
                        // converting the buffer data into string formate : store in binary variable
                        var binary = "";
                        var bytes = new Uint8Array(ele.imageUrl.data.data);
                        var len = bytes.byteLength;
                        for (var i = 0; i < len; i++) {
                          binary += String.fromCharCode(bytes[i]);
                        }

                        return (
                          <AllFact
                            key={index}
                            setShowUpdatePage={setShowUpdatePage}
                            fId={ele._id}
                            setOldFact={setOldFact}
                            admin={ele.author}
                            imgUrl={binary}
                            title={ele.title}
                            desc={ele.desc ? ele.desc : "not added yet"}
                            catg={ele.category}
                            len="25"
                          />
                        );
                      })
                    ) : (
                      <h3 className="px-2 font-medium text-gray-200">
                        Nothing Is Here
                      </h3>
                    )}
                  </div>
                </div>
              </div>
            ) : addPage ? (
              <AddFact admin={admin} />
            ) : "" || updatePage ? (
              <UpdateFact oldFact={oldFact} admin={admin} />
            ) : (
              ""
            )}
          </div>
        </div>
      )}
    </>
  );
}
