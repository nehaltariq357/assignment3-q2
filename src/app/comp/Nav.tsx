import React from "react";
const Nav = () => {
  return (
    <>
      <main className="flex justify-evenly items-center">
        <div className="font-bold text-5xl">Nehal</div>
        <div className="flex ">
          <ul className="flex space-x-7 font-bold">
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Blog</li>
            <li>FeedBack</li>
            <li>SignIn</li>
          </ul>
        </div>
        <button className=" bg-purple-400 text-white rounded-lg hover:bg-violet-700 text-xs px-8 py-3">
            Contact Me
          </button>
      </main>
    </>
  );
};

export default Nav;
