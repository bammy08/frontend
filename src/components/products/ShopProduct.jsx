import React from 'react';

import { FaCartShopping, FaEye, FaRegHeart } from 'react-icons/fa6';
import { TbCurrencyNaira } from 'react-icons/tb';
import Rating from '../Rating';

const formatPrice = (price) => {
  return price.toLocaleString('en-NG'); // Formats the price as '1,200'
};

const ShopProduct = ({ styles, products }) => {
  console.log('Products:', products); // Debugging log

  return (
    <div
      className={`w-full grid ${
        styles === 'grid'
          ? 'grid-cols-3 md-lg:grid-cols-2 md:grid-cols-2'
          : 'grid-cols-1 md-lg:grid-cols-2 md:grid-cols-2'
      } gap-3`}
    >
      {products.map((p, i) => (
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
              className="h-[240px] rounded-md md:h-[270px] xs:h-[170px] w-full object-cover"
              src={p.images[0]}
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
                <span>
                  {p.prices && p.prices.length > 0
                    ? p.prices.map((priceObj, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <span className="font-semibold">
                            {priceObj.range}:
                          </span>
                          <span className="flex items-center text-md font-semibold">
                            <TbCurrencyNaira className="mt-[1.5px]" />
                            {formatPrice(priceObj.price)}
                          </span>
                        </div>
                      ))
                    : 'Price not available'}
                </span>
              </span>
            </div>
            <div className="flex mt-1">
              <Rating ratings={p.rating} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShopProduct;
