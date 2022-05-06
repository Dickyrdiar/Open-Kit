/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import dataMenu from './data';
import { useHistory } from 'react-router-dom';

const Navbar = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [isLogged] = useState(false);
  const { history } = useHistory();

  const toggle = () => {
    setOpenDrawer(!openDrawer);
    console.log('buka', openDrawer);
  };

  // console.log('datamenu', dataMenu);

  return (
    <>
      <nav className="bg-white  border-gray-200 px-2 sm:px-4 py-2.5 sm:mx-0 dark:bg-gray-800">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <a href="/" className="flex items-center">
            <span className="self-center text-xl font-semibold whitespace-nowrap text-white">
              Open-kit
            </span>
          </a>

          <div className="flex md:order-2">
            <div className="flex md:order-2">
              <button
                onClick={() => history.push('/')}
                type="button"
                className="text-white bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                {' '}
                get started
              </button>
            </div>

            <button
              onClick={toggle}
              data-collapse-toggle="mobile-menu-4"
              type="button"
              className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="mobile-menu"
              aria-expanded="false">
              <span className="sr-only">Open Main Menu</span>
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"></path>
              </svg>
              <svg
                className="hidden w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"></path>
              </svg>
            </button>
          </div>

          <div className="hidden justify-between items-center w-full md:flex md:w-auto md:order">
            <ListMenu data={isLogged ? dataMenu.isLogged : dataMenu.notLogin} />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

const ListMenu = ({ data }) => {
  return (
    <>
      <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
        {data.map((item) => {
          return (
            <li key={item.id}>
              <a
                href={item.path}
                className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                {item.label}
              </a>
            </li>
          );
        })}
      </ul>
    </>
  );
};
