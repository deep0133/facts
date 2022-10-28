import React, { useState } from "react";

export default function AdminLoginForm({ setAdmin }) {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const adminVerifyHandler = async (e) => {
    e.preventDefault();

    const url = "http://localhost:3005/api/admin/verify";

    let data = {
      name: id,
      password: password,
    };

    data = JSON.stringify(data);

    const response = await fetch(url, {
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      method: "POST",
      body: data,
    });

    const admin_id = await response.json();
    if (admin_id.status) {
      await setAdmin(admin_id.id);
    } else {
      window.location.reload();
    }
  };

  return (
    <section className="min-h-full py-8 sm:px-5 lg:py-[55px]">
      <div className="h-full px-6 text-gray-800">
        <div className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between xl:justify-center">
          <div className="shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
              className="w-full"
              alt="Sample image"
            />
          </div>
          <div className="mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:ml-20 xl:w-5/12">
            <form action="#" onSubmit={adminVerifyHandler} method="POST">
              <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-gray-300 after:mt-0.5 after:flex-1 after:border-t after:border-gray-300">
                <p className="mx-4 mb-0 text-center font-sans font-semibold uppercase text-gray-500">
                  Enter Your Id And passwaord
                </p>
              </div>

              {/* <!-- Email input --> */}
              <div className="mb-6">
                <input
                  type="text"
                  value={id}
                  onChange={(e) => {
                    setId(e.target.value);
                  }}
                  className="form-control m-0 block w-full rounded border border-solid border-gray-300 bg-white px-4 py-2 text-xl font-normal text-gray-700 transition ease-in-out focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none"
                  placeholder="Id ex : 24A05f16"
                />
              </div>

              {/* <!-- Password input --> */}
              <div className="mb-6">
                <input
                  type="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  className="form-control m-0 block w-full rounded border border-solid border-gray-300 bg-white bg-clip-padding px-4 py-2 text-xl font-normal text-gray-700 transition ease-in-out focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none"
                  placeholder="Password"
                />
              </div>

              <div className="text-center lg:text-left">
                <button
                  type="submit"
                  className="inline-block rounded bg-blue-600 px-7 py-3 text-sm font-medium uppercase leading-snug text-white shadow-md transition duration-150 ease-in-out hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
