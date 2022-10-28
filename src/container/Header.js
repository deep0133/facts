import React from "react";

export default function Header() {
  return (
    <header>
      <div
        className="relative overflow-hidden bg-cover bg-no-repeat"
        style={{
          backgroundPosition: "50%",
          backgroundImage:
            "url('https://mdbcdn.b-cdn.net/img/new/slides/146.webp')",
          height: "350px",
        }}>
        <div
          className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.75)" }}>
          <div className="flex h-full items-center justify-center">
            <div className="px-6 text-center text-white md:px-12">
              <h1 className="mt-0 mb-6 text-5xl font-bold">Heading</h1>
              <h3 className="mb-8 text-3xl font-bold">Subeading</h3>
              <button
                type="button"
                className="inline-block rounded border-2 border-white px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light">
                Get started
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
