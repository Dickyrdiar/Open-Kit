import React from 'react';
import HeroAssets from '../../assets/assets_hero.png';
import { useHistory } from 'react-router-dom';

const HeroSection = () => {
  const history = useHistory();

  const handleClickLogin = () => {
    history.push('/Login');
    console.log('click');
  };

  return (
    <div className="bg-white border-gray-300 px-2 h-[800px] mb-[30px]">
      <div className="container mx-auto sm:my-20">
        <div className=" mx-auto sm:mt-8 sm:px-6 md:mt-10 lg:mt-16 lg:px-8">
          <div className="flex flex-col md:flex-row w-full items-start justify-between md:justify-start md:h-1/2">
            <div className="text-left z-20 md:z-30 w-full md:w-1/2 flex flex-col items-center md:items-start justify-start md:justify-center h-full">
              <h1 className="tracking-tight font-extrabold text-gray-900 titleHome text-6xl ">
                <span className="flex w-full m-auto text-indigo-600">Open-Kit</span>
                <span className="block font-bold xl:inline">
                  <span className="absolute">Contribute</span>
                  <br />
                  for Open Source Program
                </span>
              </h1>

              <h2 className="mt-3  text-gray-500 sm:mt-5 text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Tail-kit gives you access to over
                <span className="text-gray-700 font-bold">200</span>
                fully coded and responsive components and templates, based on Tailwind CSS 2.0.
                It&#x27;s all free and open-source.
              </h2>

              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start w-full">
                <div className="rounded-md shadow">
                  <a
                    className="w-full flex items-center justify-center px-8 py-3  text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 px-4 py-2"
                    onClick={handleClickLogin}>
                    Get started
                  </a>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    // href="https://github.com/Charlie85270/tail-kit"
                    className="w-full flex items-center justify-center px-8 py-3  text-base font-medium rounded-md text-gray-800 bg-gray-100 hover:bg-gray-200 px-4 py-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      className="ml-2"
                      viewBox="0 0 1792 1792">
                      <path d="M896 128q209 0 385.5 103t279.5 279.5 103 385.5q0 251-146.5 451.5t-378.5 277.5q-27 5-40-7t-13-30q0-3 .5-76.5t.5-134.5q0-97-52-142 57-6 102.5-18t94-39 81-66.5 53-105 20.5-150.5q0-119-79-206 37-91-8-204-28-9-81 11t-92 44l-38 24q-93-26-192-26t-192 26q-16-11-42.5-27t-83.5-38.5-85-13.5q-45 113-8 204-79 87-79 206 0 85 20.5 150t52.5 105 80.5 67 94 39 102.5 18q-39 36-49 103-21 10-45 15t-57 5-65.5-21.5-55.5-62.5q-19-32-48.5-52t-49.5-24l-20-3q-21 0-29 4.5t-5 11.5 9 14 13 12l7 5q22 10 43.5 38t31.5 51l10 23q13 38 44 61.5t67 30 69.5 7 55.5-3.5l23-4q0 38 .5 88.5t.5 54.5q0 18-13 30t-40 7q-232-77-378.5-277.5t-146.5-451.5q0-209 103-385.5t279.5-279.5 385.5-103zm-477 1103q3-7-7-12-10-3-13 2-3 7 7 12 9 6 13-2zm31 34q7-5-2-16-10-9-16-3-7 5 2 16 10 10 16 3zm30 45q9-7 0-19-8-13-17-6-9 5 0 18t17 7zm42 42q8-8-4-19-12-12-20-3-9 8 4 19 12 12 20 3zm57 25q3-11-13-16-15-4-19 7t13 15q15 6 19-6zm63 5q0-13-17-11-16 0-16 11 0 13 17 11 16 0 16-11zm58-10q-2-11-18-9-16 3-14 15t18 8 14-14z"></path>
                    </svg>
                    <span className="ml-2">Github</span>
                  </a>
                </div>
              </div>

              <div className="mt-4">
                Need specific or new component ?
                <span className="underline cursor-pointer">Make a request</span>
              </div>
            </div>

            <div className="grid grid-rows-2 grid-flow-col gap-2">
              <img src={HeroAssets} alt="herro image" className="sm:mx-24 z-10 sm:my-2.5" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
