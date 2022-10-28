import React from "react";
import { useState } from "react";

export default function NavBar({ setSeletedCategory }) {
  const [menu, setMenu] = useState(false);

  const showMenu = () => {
    if (menu) {
      setMenu(false);
    } else {
      setMenu(true);
    }
  };

  return (
    <section className="w-full bg-gray-900">
      <nav className="container mx-auto justify-between py-3 align-baseline text-gray-200 shadow-lg sm:flex md:px-2 lg:w-[85%] lg:px-0">
        <div
          className={`hamburger-icon ${
            menu ? "hidden" : "block"
          } float-left ml-3 sm:hidden`}>
          <svg
            onClick={showMenu}
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="bars"
            className="w-6"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512">
            <path
              fill="currentColor"
              d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path>
          </svg>
        </div>

        <div className="logo text-center font-serif text-xl font-bold sm:flex sm:items-center sm:text-left">
          Facts
        </div>

        {/* for sm */}
        <div
          className={`navbar-nav ${
            menu ? "block" : "hidden"
          } fixed top-0 left-0 z-10 h-screen w-[70%] bg-gray-700 pt-16`}>
          <div className="cross-icon fixed top-3 right-[35%]">
            <svg
              onClick={showMenu}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2.5"
              stroke="currentColor"
              className="h-8 w-8">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
          <ul className="font-serif-pro flex flex-col text-xl font-bold">
            <li></li>
            <li className="nav-item mx-auto w-fit py-2 hover:underline">
              <a
                onClick={() => {
                  setSeletedCategory("General");
                }}
                className="nav-link text-white"
                href="#">
                Random
              </a>
            </li>
            <li className="nav-item mx-auto w-fit py-2 hover:underline">
              <a
                onClick={() => {
                  setSeletedCategory("science");
                }}
                className="nav-link p-0 text-white opacity-60 hover:opacity-80 focus:opacity-80"
                href="#">
                Science
              </a>
            </li>
            <li className="nav-item mx-auto w-fit py-2 hover:underline">
              <a
                onClick={() => {
                  setSeletedCategory("food");
                }}
                className="nav-link p-0 text-white opacity-60 hover:opacity-80 focus:opacity-80"
                href="#">
                Food
              </a>
            </li>
            <li className="nav-item mx-auto w-fit py-2 hover:underline">
              <a
                onClick={() => {
                  setSeletedCategory("tech");
                }}
                className="nav-link p-0 text-white opacity-60 hover:opacity-80 focus:opacity-80"
                href="#">
                Tech
              </a>
            </li>
            <li className="nav-item mx-auto w-fit py-2 hover:underline">
              <a
                onClick={() => {
                  setSeletedCategory("universe");
                }}
                className="nav-link p-0 text-white opacity-60 hover:opacity-80 focus:opacity-80"
                href="#">
                Universe
              </a>
            </li>
            <li className="nav-item mx-auto w-fit py-2 hover:underline">
              <a
                onClick={() => {
                  setSeletedCategory("political");
                }}
                className="nav-link p-0 text-white opacity-60 hover:opacity-80 focus:opacity-80"
                href="#">
                Political
              </a>
            </li>
          </ul>
        </div>

        {/* for md */}
        <ul className="navbar-nav hidden space-x-5 pl-0 sm:flex md:space-x-6 lg:space-x-8">
          <li className="nav-item mx-auto w-fit py-2 hover:underline">
            <a
              onClick={() => {
                setSeletedCategory("general");
              }}
              className="nav-link text-white"
              href="#">
              General
            </a>
          </li>
          <li className="nav-item mx-auto w-fit py-2 hover:underline">
            <a
              onClick={() => {
                setSeletedCategory("science");
              }}
              className="nav-link p-0 text-white opacity-60 hover:opacity-80 focus:opacity-80"
              href="#">
              Science
            </a>
          </li>
          <li className="nav-item mx-auto w-fit py-2 hover:underline">
            <a
              onClick={() => {
                setSeletedCategory("food");
              }}
              className="nav-link p-0 text-white opacity-60 hover:opacity-80 focus:opacity-80"
              href="#">
              Food
            </a>
          </li>
          <li className="nav-item mx-auto w-fit py-2 hover:underline">
            <a
              onClick={() => {
                setSeletedCategory("tech");
              }}
              className="nav-link p-0 text-white opacity-60 hover:opacity-80 focus:opacity-80"
              href="#">
              Tech
            </a>
          </li>
          <li className="nav-item mx-auto w-fit py-2 hover:underline">
            <a
              onClick={() => {
                setSeletedCategory("universe");
              }}
              className="nav-link p-0 text-white opacity-60 hover:opacity-80 focus:opacity-80"
              href="#">
              Universe
            </a>
          </li>
          <li className="nav-item mx-auto w-fit py-2 hover:underline">
            <a
              onClick={() => {
                setSeletedCategory("political");
              }}
              className="nav-link p-0 text-white opacity-60 hover:opacity-80 focus:opacity-80"
              href="#">
              Political
            </a>
          </li>
        </ul>
      </nav>
    </section>
  );
}
