/* eslint-disable no-unused-vars */
import React from 'react';
import CardSection from '../cardSection';
import { CardData } from './data';

const FitureSection = () => {
  console.log('data card ', CardData);

  return (
    <>
      <div className="bg-white border-gray-300 px-2 mt-[200px]">
        <div className="container mx-auto sm:my-20">
          <div className="container text-center">
            <h3 className="tracking-tight font-extrabold text-gray-900 titleCard text-6xl">
              <span className="w-full m-auto text-indigo-300">Our Fiture</span>
            </h3>

            <h2 className="mt-3 text-gray-400 text-lg">this is fitur in Open-Kit</h2>
          </div>
          <div className="mt-10 mx-auto sm:mt-12 sm:px-6 lg:mt-20 lg:px-8 h-full flex flex-col md:flex-row justify-between md:grid-row-3">
            {CardData?.map((value) => {
              console.log('value', value);
              return (
                <div key={value.id} className="flex flex-col md:flex-row justify-between">
                  <CardSection label={value.label} desc={value.desc} icons={value.icons} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default FitureSection;
