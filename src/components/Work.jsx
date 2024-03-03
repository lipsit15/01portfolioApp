import React from "react";
import Project1 from '../assets/proj7.png'
import Project2 from '../assets/proj8.png'
import Project3 from '../assets/proj9.png'



const Work = () => {
  return (
    <div name="work" className=" w-full md:h-screen text-gray-300 bg-[#0a192f]">
      <div className=" max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className=" pb-8">
          <p className=" text-4xl border-b-4 text-gray-300 inline border-pink-600">
            Work
          </p>
          <p className=" py-6">Check out some of my recent works</p>
        </div>

        {/*Container*/}
        <div className=" grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/*Grid Item*/}
                  <div style={{ backgroundImage: `url(${Project1})` }} className=" shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
            {/* Hover Effects*/}
            <div className=" opacity-0 group-hover:opacity-100">
              <span className=" text-2xl font-bold text-white tracking-wider">
                RecipeStore
              </span>
              <div className=" pt-8 text-center">
                {/* <a href="/">
                  <button className=" text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a> */}
                <a href="https://github.com/lipsit15/Recipe_Vault-MERN">
                  <button className=" text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/*Grid Item*/}
          <div style={{ backgroundImage: `url(${Project2})` }} className=" shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
            {/* Hover Effects*/}
            <div className=" opacity-0 group-hover:opacity-100">
              <span className=" text-2xl font-bold text-white tracking-wider">
                News Headline
              </span>
              <div className=" pt-8 text-center">
                {/* <a href="/">
                  <button className=" text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a> */}
                <a href="https://github.com/lipsit15/NewsApp_project">
                  <button className=" text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/*Grid Item*/}
          <div style={{ backgroundImage: `url(${Project3})` }} className=" shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
            {/* Hover Effects*/}
            <div className=" opacity-0 group-hover:opacity-100">
              <span className=" text-2xl font-bold text-white tracking-wider">
                ChatApp
              </span>
              <div className=" pt-8 text-center">
                {/* <a href="/">
                  <button className=" text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a> */}
                <a href="https://github.com/lipsit15/my-simplechat">
                  <button className=" text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
