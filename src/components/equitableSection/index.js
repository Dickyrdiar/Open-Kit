import React from 'react';
import { ReactComponent as Equitable } from '../../assets/icons/equitable.svg';

const equitableSection = () => {
  return (
    <>
      <div className="bg-white border-white px-2 mt-[200px] h-[600px]">
        <div className="container mx-auto sm:my-20">
          <div className="mx-auto sm:mt-8 sm:px-6 md:mt-10 lg:mt-16 lg:px-8">
            <div className="flex flex-col md:flex-row w-full items-start justify-between md:justify-start md:h-1/2">
              <div className="text-left z-20 md:z-30 w-full md:w-1/2 flex flex-col items-center md:items-start justify-start md:justify-center h-full">
                <h2 className="mt-3  text-gray-500 sm:mt-5 text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  For Contributed and Access Open Source
                </h2>

                <h1 className="tracking-ligth font-bold text-gray-900 text-6xl mt-[40px]">
                  <span className="flex w-full m-auto text-indigo-600">
                    Equitable Contribution for Open Source Ecosystem{' '}
                  </span>
                </h1>

                <h2 className="mt-3  text-gray-500 sm:mt-5 text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Login with github and gitlab account with Open-Kit you can share your project open
                  source,
                </h2>
              </div>

              <div className="grid">
                <Equitable />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default equitableSection;
