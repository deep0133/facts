import React, { useState } from "react";
import { ToastContainer, toast } from "react-toast";

export default function AllFact({
  fId,
  admin,
  title,
  catg,
  imgUrl,
  desc,
  len,
  setOldFact,
  setShowUpdatePage,
}) {
  const [show, setShow] = useState(false);

  const mouseEnter = () => {
    setShow(true);
  };

  const mouseLeave = () => {
    setShow(false);
  };

  const deleteFact = async () => {
    const url = `http://localhost:3005/api/admin/deletefact/${fId}`;

    let data = {
      id: "6333151e2954982264b7fc8c",
    };

    data = await JSON.stringify(data);

    const req = await fetch(url, {
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      method: "DELETE",
      body: data,
    })
      .then(async (response) => {
        response = await response.json();
        toast.success("Successfully Deleted Fact 👋");
      })
      .catch((err) => {
        toast.error("Sorry! Some Error Occured : ");
      });
  };

  return (
    <>
      <ToastContainer />
      <div
        onMouseEnter={mouseEnter}
        onMouseLeave={mouseLeave}
        className={`flex w-full scale-90 justify-center transition-all hover:shadow-lg `}>
        <div className="relative z-10 w-full rounded-lg bg-white shadow-lg">
          <img
            className="mx-auto w-full scale-90 rounded-t-lg"
            src={`data:${imgUrl.contentType};base64,${btoa(imgUrl)}`}
            loading="lazy"
            alt=""
          />
          <div className="p-4">
            <h5 className="font-gentium mb-2 text-xl font-bold text-gray-900 ">
              {title ? title.slice(0, 12) + "..." : ""}
            </h5>
            <p className="mb-4 text-base text-gray-700">
              {desc ? desc.slice(0, len) : "Not description added"}...
            </p>
          </div>

          <div
            className={`${
              show
                ? "opacity-100 transition duration-300"
                : "opacity-0 transition duration-300"
            } relative`}>
            <button
              onClick={async () => {
                await setOldFact({
                  factId: fId,
                  author: admin,
                  title: title,
                  category: catg,
                  imgUrl: imgUrl,
                  desc: desc,
                });
                await setShowUpdatePage(true);
              }}
              className={`update-function  absolute left-[20px] z-10 w-[80%] -translate-y-32 rounded-lg bg-gradient-to-r from-cyan-300 to-cyan-500 p-2 text-center text-xl font-bold shadow-lg transition delay-200 duration-300 hover:shadow-2xl`}>
              Update
            </button>

            <button
              // status
              onClick={deleteFact}
              className={`update-function absolute left-[20px] z-10  w-[80%] -translate-y-20 rounded-lg bg-gradient-to-r from-cyan-300 to-cyan-500 p-2 text-center text-xl font-bold shadow-lg transition duration-300 hover:shadow-2xl`}>
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
