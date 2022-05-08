/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import data from './data';
import { useHistory } from 'react-router-dom';

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [isLogged] = useState(false);

  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 dark:bg-gray-800 mb-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a className="self-center text-xl font-semibold whitespace-nowrap text-white" href="#">
              Open-Kit
            </a>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}>
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <div
            className={'lg:flex flex-grow items-center' + (navbarOpen ? ' flex' : ' hidden')}
            id="example-navbar-danger">
            <MenuList
              data={isLogged ? data.isLogged : data.notLogin}
              isLoggin={isLogged ? data.isLogged : data.notLogin}
            />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

const MenuList = ({ data, isLoggin }) => {
  // const history = useHistory();

  // const onClickMenu = ({ path }) => {
  //   window.location.assign(path);
  // };

  return (
    <>
      <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium lg:flex-row list-none lg:ml-auto md:font-medium">
        {data.map((item) => {
          console.log('path', item.path);
          return (
            <li className="nav-item" key={item.id}>
              {isLoggin ? (
                <a
                  className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  onClick={item.path}>
                  <span className="ml-2">{item.label}</span>
                </a>
              ) : (
                <div className="rounded-full text-white">this is picture</div>
              )}
            </li>
          );
        })}
      </ul>
    </>
  );
};
