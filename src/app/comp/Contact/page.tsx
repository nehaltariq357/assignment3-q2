import Link from "next/link";
import React from "react";

const Contact = () => {
  return (
    <>
      <main className="flex justify-center items-center h-screen flex-col">
        <button className=" m-10 text-6xl">Contact Us</button>

        <Link href="/">
          <button className="bg-sky-500 hover:bg-sky-700 w-fit rounded-lg text-white hover:underline">
            Go Back
          </button>
        </Link>
      </main>
    </>
  );
};

export default Contact;
