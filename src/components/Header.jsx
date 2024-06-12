import { MdEmail } from 'react-icons/md';
import {
  FaArrowDown,
  FaCartShopping,
  FaFacebookF,
  FaHeart,
  FaInstagram,
  FaList,
  FaLock,
  FaSquarePhone,
  FaTwitter,
  FaUser,
} from 'react-icons/fa6';
import { FaArrowCircleDown, FaListAlt } from 'react-icons/fa';
import logo from '../images/logo.png';

import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { category } from '../data';

const Header = () => {
  const { pathname } = useLocation();
  const user = false;
  const [sidebar, setSidebar] = useState(true);
  const [showCat, setShowCat] = useState(true);
  const [searchValue, setSearchValue] = useState('');
  const [categories, setCategories] = useState('');
  const wishlist = 3;

  return (
    <div className="w-full bg-white">
      {/* header top bar */}
      <div className="bg-green-300 md-lg:hidden">
        <div className="w-[85%] lg:w-[90%] mx-auto">
          <div className="flex w-full justify-between items-center h-[50px] text-gray-600">
            <ul className="flex justify-start items-center gap-8 font-semibold text-gray-800">
              <li className="flex relative justify-center items-center gap-2 text-sm after:absolute after:h-[18px] after:w-[1px] after:bg-green-700 after:-right-[16px]">
                <span>
                  <MdEmail />
                </span>
                <span>support@farmconnect.com</span>
              </li>
              <li className="flex relative justify-center items-center gap-2 text-sm after:absolute after:h-[18px] after:w-[1px] after:bg-green-700 after:-right-[16px]">
                <span>
                  <FaSquarePhone />
                </span>
                <span>+234-704-724-5849</span>
              </li>
            </ul>
            <div>
              <div className="flex justify-center items-center gap-10">
                <div className="flex justify-center items-center gap-4 text-gray-600">
                  <a href="http://facebook.com">
                    <FaFacebookF />
                  </a>
                  <a href="http://x.com">
                    <FaTwitter />
                  </a>
                  <a href="http://instagram.com">
                    <FaInstagram />
                  </a>
                </div>
                <div className="flex group cursor-pointer relative justify-center items-center gap-1 text-sm after:absolute after:h-[18px] after:w-[1px] after:bg-green-700 after:-right-[16px] before:absolute before:h-[18px] before:bg-green-700 before:w-[1px] before:-left-[20px]">
                  {user ? (
                    <Link
                      className="flex cursor-pointer justify-center items-center gap-2 text-sm text-gray-700"
                      to="/dashboard"
                    >
                      <span>
                        <FaUser />
                      </span>
                      <span className="font-semibold">Bamidele</span>
                    </Link>
                  ) : (
                    <Link
                      className="flex cursor-pointer justify-center items-center gap-2 text-sm text-gray-700"
                      to="/login"
                    >
                      <span>
                        <FaLock />
                      </span>
                      <span className="font-semibold">Login</span>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* header top bar  end*/}

      {/* navigation menus */}
      <div>
        <div className="w-[85%] lg:w-[90%] mx-auto">
          <div className="h-[80px] md-lg:h-[100px] flex justify-between items-center flex-wrap">
            <div className="md-lg:w-full w-3/12 md-lg:pt-4">
              <div className="flex justify-between items-center">
                <Link to={'/'}>
                  <img className="w-36" src={logo} alt="logo" />
                </Link>
                <div
                  onClick={() => setSidebar(false)}
                  className="justify-center items-center w-[30px] h-[30px] bg-white text-gray-600 border-gray-700 rounded-sm cursor-pointer lg:hidden md-lg:flex xl:hidden hidden"
                >
                  <span className="text-green-700">
                    <FaListAlt size={25} />
                  </span>
                </div>
              </div>
            </div>
            <div className="md-lg:w-full w-9/12">
              <div className="flex justify-between md-lg:justify-center flex-wrap pl-8">
                <ul className="flex justify-start items-start gap-8 text-sm font-bold uppercase md-lg:hidden">
                  <li>
                    <Link
                      className={`px-2 py-1 rounded block ${
                        pathname === '/'
                          ? ' bg-green-600 text-white'
                          : 'text-gray-600'
                      }`}
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={`px-2 py-1 rounded block ${
                        pathname === '/shop'
                          ? ' bg-green-600 text-white'
                          : 'text-gray-600'
                      }`}
                    >
                      Shop
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={`px-2 py-1 rounded block ${
                        pathname === '/about'
                          ? ' bg-green-600 text-white'
                          : 'text-gray-600'
                      }`}
                    >
                      about us
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={`px-2 py-1 rounded block ${
                        pathname === '/contact'
                          ? ' bg-green-600 text-white'
                          : 'text-gray-600'
                      }`}
                    >
                      contact us
                    </Link>
                  </li>
                </ul>
                <div className="flex md-lg:hidden justify-center items-center gap-5">
                  <div className="flex justify-center gap-5">
                    <div className="relative flex justify-center items-center cursor-pointer w-[35px] h-[35px] rounded-full bg-orange-100">
                      <span className="text-xl text-green-600">
                        <FaHeart />
                      </span>
                      <div className="w-[20px] h-[20px] absolute bg-red-500 rounded-full text-white flex justify-center items-center -top-[3px] -right-[5px]">
                        {wishlist}
                      </div>
                    </div>
                    <div className="relative flex justify-center items-center cursor-pointer w-[35px] h-[35px] rounded-full bg-orange-100">
                      <span className="text-xl text-green-600">
                        <FaCartShopping />
                      </span>
                      <div className="w-[20px] h-[20px] absolute bg-red-500 rounded-full text-white flex justify-center items-center -top-[3px] -right-[5px]">
                        {wishlist}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* navigation menus end */}

      {/* responsive navigation menus  */}
      <div className="hidden md-lg:block">
        <div
          onClick={() => setSidebar(true)}
          className={`fixed duration-200 transition-all ${
            sidebar ? 'invisible' : 'visible'
          } hidden md-lg:block w-screen h-screen bg-[rgba(0,0,0,0.5)] top-0 left-0 z-20`}
        ></div>
        <div
          className={`w-[300px] z-50 transition-all duration-200 fixed ${
            sidebar ? '-left-[300px]' : 'left-0 top-0'
          } overflow-auto bg-white h-screen py-6 px-8`}
        >
          <div className="flex justify-center items-center flex-col gap-6">
            <Link to={'/'}>
              <img className="w-36" src={logo} alt="logo" />
            </Link>
          </div>
          <hr className="my-4" />
          <div className="flex justify-start mt-5">
            {user ? (
              <Link
                className="flex cursor-pointer justify-center items-center gap-2 text-sm text-gray-700"
                to="/dashboard"
              >
                <span>
                  <FaUser />
                </span>
                <span className="font-semibold">Bamidele</span>
              </Link>
            ) : (
              <Link
                className="flex cursor-pointer justify-center items-center gap-2 text-sm text-gray-700"
                to="/login"
              >
                <span>
                  <FaLock />
                </span>
                <span className="font-semibold">Login</span>
              </Link>
            )}
          </div>
          <hr className="my-4" />
          <ul className="flex flex-col mt-5 justify-start items-start  text-sm font-bold uppercase">
            <li>
              <Link
                className={`px-2 py-1 rounded block ${
                  pathname === '/'
                    ? ' bg-green-600 text-white'
                    : 'text-gray-600'
                }`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className={`px-2 py-1 rounded block ${
                  pathname === '/shop'
                    ? ' bg-green-600 text-white'
                    : 'text-gray-600'
                }`}
              >
                Shop
              </Link>
            </li>
            <li>
              <Link
                className={`px-2 py-1 rounded block ${
                  pathname === '/about'
                    ? ' bg-green-600 text-white'
                    : 'text-gray-600'
                }`}
              >
                about us
              </Link>
            </li>
            <li>
              <Link
                className={`px-2 py-1 rounded block ${
                  pathname === '/contact'
                    ? ' bg-green-600 text-white'
                    : 'text-gray-600'
                }`}
              >
                contact us
              </Link>
            </li>
          </ul>
          <hr className="my-4" />
          <div className="flex justify-start items-start mt-5 gap-4 text-gray-600">
            <a href="http://facebook.com">
              <FaFacebookF />
            </a>
            <a href="http://x.com">
              <FaTwitter />
            </a>
            <a href="http://instagram.com">
              <FaInstagram />
            </a>
          </div>
          <hr className="my-4" />
          <div className="w-full mt-5 flex justify-end md-lg:justify-start gap-3 items-center">
            <div className="w-[30px] h-[30px] rounded-full flex bg-orange-400 justify-center items-center ">
              <span className="text-white">
                <FaSquarePhone />
              </span>
            </div>
            <div className="flex justify-end flex-col gap-1">
              <h2 className="text-sm font-medium text-gray-600">
                +234-704-724-5849
              </h2>
            </div>
          </div>
          <hr className="my-4" />
          <ul className="flex flex-col justify-start items-start gap-3 mt-5 text-gray-500">
            <li className="flex justify-start items-center gap-2 text-sm">
              <span className="mt-1">
                <MdEmail />
              </span>
              <span>support@farmconnect.com</span>
            </li>
          </ul>
        </div>
      </div>
      {/* responsive navigation menus end */}

      <div className="w-[85%] lg:w-[90%] mx-auto">
        <div className="flex w-full flex-wrap md-lg:gap-8">
          <div className="w-3/12 md-lg:w-full">
            <div className="bg-white relative">
              <div
                onClick={() => setShowCat(!showCat)}
                className="h-[50px] bg-orange-400 rounded text-white flex justify-center md-lg:justify-between md-lg:px-6 items-center gap-3 font-bold text-md cursor-pointer"
              >
                <div className="flex justify-center items-center gap-3">
                  <span>
                    <FaList />
                  </span>
                  <span>All Categories</span>
                </div>
                <span className="pt-1">
                  <FaArrowCircleDown />
                </span>
              </div>
              <div
                className={`${
                  showCat ? 'h-0' : 'h-[400px]'
                } overflow-hidden transition-all md-lg:relative duration-500 absolute z-50 bg-orange-200 rounded w-full border-x`}
              >
                <ul className="py-2 text-gray-700 font-medium">
                  {category.map((c, i) => {
                    return (
                      <li
                        className="flex justify-start items-center gap-2 px-[24px] py-[6px]"
                        key={i}
                      >
                        <Link className="text-sm block">{c.name}</Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>

          <div className="w-9/12 pl-8 md-lg:pl-0 md-lg:w-full">
            <div className="flex flex-wrap w-full justify-between items-start md-lg:gap-6">
              <div className="w-8/12 md-lg:w-full">
                <div className="flex border h-[50px] items-center relative gap-6">
                  <div className="relative after:absolute after:h-[25px] after:w-[1px] after:bg-orange-300 after:-right-[15px] md:hidden">
                    <select
                      className="w-[150px] text-gray-600 font-semibold bg-transparent px-1 h-full outline-0 border-none "
                      name=""
                      id=""
                      onChange={(e) => setCategories(e.target.value)}
                    >
                      <option value="">Select Category</option>
                      {category.map((c, i) => (
                        <option value={c}>
                          <Link className="text-sm block">{c.name}</Link>
                        </option>
                      ))}
                    </select>
                  </div>
                  <input
                    className="w-full relative bg-transparent outline-0 px-3 h-full text-gray-600"
                    onChange={(e) => setSearchValue(e.target.value)}
                    type="text"
                    name=""
                    id=""
                    placeholder="what do you want?"
                  />
                  <button className="bg-orange-400 rounded right-0 absolute px-8 h-full font-semibold uppercase text-white">
                    Search
                  </button>
                </div>
              </div>
              <div className="w-4/12 block md-lg:hidden md-lg:w-full pl-2 md-lg:pl-0">
                <div className="w-full flex justify-end md-lg:justify-start gap-3 items-center">
                  <div className="w-[30px] h-[30px] rounded-full flex bg-orange-400 justify-center items-center ">
                    <span className="text-white">
                      <FaSquarePhone />
                    </span>
                  </div>
                  <div className="flex justify-end flex-col gap-1">
                    <h2 className="text-sm font-medium text-gray-600">
                      +234-704-724-5849
                    </h2>
                    <span className="text-sm pl-2">available 24/7</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
