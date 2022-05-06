import React from 'react';
// import PropTypes from 'prop-types'

const CardSection = ({ label, desc, icons }) => {
  // Text.prototype = {
  //   label: PropTypes.node.isRequired,
  //   desc: PropTypes.node.isRequired
  // }

  return (
    <>
      <div className="shadow-lg rounded-2xl p-4  w-80 h-60 m-auto realtive">
        <div className="w-full h-full text-centner">
          <div className="flex h-full flex-col justify-between">
            <div className="mt-4 w-20 m-auto text-gray-800 h-40 w-40">{icons}</div>

            {/* <p className="absolute text-sm italic dark:text-white text-gray-800 ">{label}</p> */}

            <p className="text-gray-900  text-lg mt-4 text-center mt-30">{label}</p>
            <p className="text-gray-700 text-xs font-thin py-2 px-6 text-center">{desc}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardSection;
