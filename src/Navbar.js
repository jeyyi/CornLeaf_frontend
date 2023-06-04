import React from "react";
import Logo from "./Images/Logo.png";
function Navbar() {
  return (
    <div className="navbar bg-transparent px-5 lg:px-64 py-5 absolute">
      <div className="flex-1 justify-between">
        <a href="/" className="flex items-center">
          <img src={Logo} width={70} height={70} alt="Logo" />
          <span className="text-xl font-bold tracking-wide">
            CORNLEAF DISEASE
          </span>
        </a>
        <button className="btn btn-primary">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M7.5 7.5h-.75A2.25 2.25 0 004.5 9.75v7.5a2.25 2.25 0 002.25 2.25h7.5a2.25 2.25 0 002.25-2.25v-7.5a2.25 2.25 0 00-2.25-2.25h-.75m0-3l-3-3m0 0l-3 3m3-3v11.25m6-2.25h.75a2.25 2.25 0 012.25 2.25v7.5a2.25 2.25 0 01-2.25 2.25h-7.5a2.25 2.25 0 01-2.25-2.25v-.75"
              />
            </svg>
          </span>
          Upload File
        </button>
      </div>
    </div>
  );
}

export default Navbar;
