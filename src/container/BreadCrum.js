import React from "react";

export default function BreadCrum() {
  return (
    <div>
      <nav className="hover:text-white-100 sticky top-0 z-10 flex w-fit flex-wrap items-center justify-between rounded-md py-3 text-white shadow-lg">
        <div className="container-fluid flex w-full flex-wrap items-center justify-between px-6">
          <nav
            className="bg-grey-light w-full rounded-md"
            aria-label="breadcrumb">
            <ol className="list-reset flex">
              <li>
                <a href="#" className="text-gray-500 hover:text-gray-600">
                  Home
                </a>
              </li>
              <li>
                <span className="mx-2 text-gray-500">/</span>
              </li>
              <li>
                <a href="#" className="text-gray-500 hover:text-gray-600">
                  Library
                </a>
              </li>
              <li>
                <span className="mx-2 text-gray-500">/</span>
              </li>
              <li>
                <a href="#" className="text-gray-500 hover:text-gray-600">
                  Data
                </a>
              </li>
            </ol>
          </nav>
        </div>
      </nav>
    </div>
  );
}
