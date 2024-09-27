import React from "react";
import Image from "next/image";
import Nav from "../Nav";

const Profile = () => {
  return (
    <>
      <main className="bg-gradient-to-r from-slate-600 via-black to-slate-600 text-white h-screen">
        <Nav />
        <div className="flex">
          <div className="w-1/2 h-screen flex justify-evenly">
            <main className="ml-20">
              <h1 className="text-7xl font-bold tracking-widest font-mono mt-24 mb-4">
                Hay im <br />
                <span>Nehal</span>
              </h1>

              <p className="w-[400px] text-sm mb-12">
                Im a web developer, and Im very passionate and dedicated to my
                work. I have acquired the skills and knowledge necessary to make
                your project a success.
              </p>
              <div className="mb-32">
                <button className="bg-purple-400 cursor-pointer text-white rounded-lg hover:bg-violet-700 text-xs px-4 py-3 mr-6">
                  About Me
                </button>
                <button className="bg-black text-white rounded-lg hover:bg-slate-700 text-xs px-4 py-3">
                  My Work
                </button>
                
              </div>
              <div className="flex justify-items-start">
                <ul className="flex gap-[90px]">
                  <li className="font-extralight text-sm">
                    Born in <br />
                    <span className="font-bold">Pakistan</span>
                  </li>
                  <li className="font-extralight text-sm">
                    Experience <br />
                    <span className="font-bold">5 years</span>
                  </li>
                  <li className="font-extralight text-sm">
                    Date of Birth <br />
                    <span className="font-bold">19 November 2005</span>
                  </li>
                </ul>
              </div>
            </main>
          </div>

          {/* right side  ********************************/}

          <div className="w-1/2 flex justify-center items-center">
            <div className="relative rotate-90">
              <div
                className="w-[480px] h-[420px] bg-amber-300"
                style={{
                  clipPath:
                    "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
                }}
              ></div>
            </div>
            <Image
              className="absolute w-[1200px] mr-[575px] h-[750px] mb-[110px]"
              src="/pic.jpg"
              alt="pic"
              width={1200}
              height={750}
            />

            <div className="ml-10">
              <ul className="mb-5">
                <li>
                  <Image
                    className="rounded-full w-8 mb-3"
                    src="/facebookIcon.png"
                    alt="facebook"
                    width={32}
                    height={32}
                  />
                </li>
                <li>
                  <Image
                    className="rounded-full w-8 mb-3"
                    src="/twitterIcon.png"
                    alt="twitter"
                    width={32}
                    height={32}
                  />
                </li>
                <li>
                  <Image
                    className="rounded-full w-8 mb-3"
                    src="/linkdeinIcon.png"
                    alt="linkedin"
                    width={32}
                    height={32}
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Profile;
