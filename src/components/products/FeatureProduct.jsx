import React from 'react';
import { category } from '../../data';
import { TbCurrencyNaira } from 'react-icons/tb';
import { FaCartShopping, FaEye, FaRegHeart } from 'react-icons/fa6';
import Rating from '../Rating';

const FeatureProduct = () => {
  return (
    <div className="w-[85%] flex flex-wrap mx-auto">
      <div className="w-full">
        <div className=" text-center flex justify-center items-center flex-col text-4xl text-gray-600 font-bold relative pb-[35px]">
          <h2>Feature products</h2>
          <div className="w-[100px] h-[2px] bg-green-400 mt-4"></div>
        </div>
      </div>
      <div className="w-full grid grid-cols-4 md-lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6">
        {category.map((p, i) => (
          <div
            key={i}
            className="border group transition-all duration-500 hover:shadow-md hover:mt-3"
          >
            <div className="relative overflow-hidden">
              <div className="flex justify-center items-center absolute text-white w-[38px] h-[38px] rounded-full bg-orange-500 font-semibold text-sm left-2 top-2">
                5%
              </div>
              <img
                className="sm:w-full w-full h-[240px]"
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

                  <span>{p.price}</span>
                </span>
                <div className="flex">
                  <Rating ratings={4.5} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureProduct;
