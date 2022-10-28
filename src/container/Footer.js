import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-center lg:text-left">
      <div
        className="p-4 text-center text-gray-600"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
        © 2021 Copyright :{" "}
        <a className="text-gray-600" href="https://tailwind-elements.com/">
          facts.in
        </a>
      </div>
    </footer>
  );
}
