import React from "react";
import Image from "next/image";

const Profile = () => {
  return (
    <>
      <main className="flex h-fit">
        <div className=" w-[70%]  flex justify-center items-center">
          <div className=" ">
            <p className="font-serif m-10 text-2xl text-orange-600">
              Next Js Developer.
            </p>
            <h1 className="text-6xl font-bold font-serif m-10 text-blue-800">
              Im Full Stack Developer <br />
              Nehal Tariq{" "}
            </h1>
            <p className="font-serif m-10 text-2xl">
              {" "}
              Hello! Im Nehal Tariq, a passionate Full Stack Developer with a
              love for creating dynamic and responsive web applications. I have
              experience in various technologies including React, Next.js, and
              Tailwind CSS. I enjoy solving complex problems and continuously
              learning new skills to improve my craftt.
            </p>
          </div>
        </div>

        <div className=" w-1/2 flex justify-center items-center ">
          <div className="mr-96 w-fit">
            {" "}
            <Image
              className="max-w-7xl"
              src="/pic.jpg"
              alt="pic"
              width={1200}
              height={750}
            />
            {/* <ul><li className='bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-800 w-fit'> <Link href="/">Go Back</Link></li></ul> */}
          </div>
        </div>
      </main>
    </>
  );
};

export default Profile;
