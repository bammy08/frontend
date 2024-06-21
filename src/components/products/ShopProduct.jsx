import React from 'react';
import { category } from '../../data';
import { FaCartShopping, FaEye, FaRegHeart } from 'react-icons/fa6';
import { TbCurrencyNaira } from 'react-icons/tb';
import Rating from '../Rating';

const ShopProduct = ({ styles }) => {
  return (
    <div
      className={`w-full grid ${
        styles === 'grid'
          ? 'grid-cols-3 md-lg:grid-cols-2 md:grid-cols-2'
          : 'grid-cols-1 md-lg:grid-cols-2 md:grid-cols-2'
      } gap-3`}
    >
      {category.map((p, i) => (
        <div
          key={i}
          className={`flex transition-all duration-1000 hover:shadow-md hover:-translate-y-3 ${
            styles === 'grid'
              ? 'flex-col justify-start items-start'
              : 'justify-start items-center md-lg:flex-col md-lg:justify-start md-lg:items-start'
          } w-full gap-4 bg-white p-1 rounded-md`}
        >
          <div
            className={
              styles === 'grid'
                ? 'w-full relative group h-[210px] md:h-[270px] xs:h-[170px] overflow-hidden'
                : 'md-lg:w-full relative group h-[210px] md:h-[270px] overflow-hidden'
            }
          >
            <img
              className=""
              // style={{ width: '100%', height: '185px' }}
              src={p.img}
              alt={`${p.name}`}
            />
            <ul className="flex transition-all duration-700 -bottom-10 justify-center items-center gap-2 absolute w-full group-hover:bottom-3">
              <li className="w-[38px] h-[38px] flex justify-center items-center bg-gray-200 cursor-pointer rounded-full hover:bg-green-500 hover:text-white hover:rotate-[720deg] transition-all">
                <FaRegHeart />
              </li>
              <li className="w-[38px] h-[38px] flex justify-center items-center bg-gray-200 cursor-pointer rounded-full hover:bg-green-500 hover:text-white hover:rotate-[720deg] transition-all">
                <FaCartShopping />
              </li>
              <li className="w-[38px] h-[38px] flex justify-center items-center bg-gray-200 cursor-pointer rounded-full hover:bg-green-500 hover:text-white hover:rotate-[720deg] transition-all">
                <FaEye />
              </li>
            </ul>
          </div>
          <div className="py-3 text-gray-500 px-2">
            <h2 className="font-bold">{p.name} </h2>
            <div className="flex justify-start items-center gap-3">
              <span className="flex text-md font-semibold justify-center items-center gap-0">
                <span className="mt-[1.5px]">
                  <TbCurrencyNaira />
                </span>

                <span>{p.price ? p.price.toLocaleString() : 'N/A'}</span>
              </span>
              <div className="flex">
                <Rating ratings={4.5} />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShopProduct;
