import React from 'react';
import { TbCurrencyNaira } from 'react-icons/tb';
import { FaCartShopping, FaEye, FaRegHeart } from 'react-icons/fa6';
import Rating from '../Rating';
import { Link } from 'react-router-dom';

const formatPrice = (price) => {
  return price.toLocaleString('en-NG'); // Formats the price as '1,200'
};

const FeatureProduct = ({ products = [] }) => {
  if (!products.length) {
    return <div>No products available</div>;
  }

  return (
    <div className="w-[85%] flex flex-wrap mx-auto">
      <div className="w-full">
        <div className="text-center flex justify-center items-center flex-col text-4xl text-gray-600 font-bold relative pb-[35px]">
          <h2>Feature products</h2>
          <div className="w-[100px] h-[2px] bg-green-400 mt-4"></div>
        </div>
      </div>
      <div className="w-full grid grid-cols-4 md-lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6">
        {products.map((p, i) => (
          <div
            key={i}
            className="border group transition-all duration-500 hover:shadow-md hover:mt-3"
          >
            <div className="relative overflow-hidden">
              {p.discount ? (
                <div className="flex justify-center items-center absolute text-white w-[38px] h-[38px] rounded-full bg-orange-500 font-semibold text-sm left-2 top-2">
                  {p.discount}%
                </div>
              ) : (
                ''
              )}
              <img
                className="sm:w-full w-full h-[240px]"
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
                <Link
                  to={`/product-details/${p._id}`}
                  className="w-[38px] h-[38px] flex justify-center items-center bg-gray-200 cursor-pointer rounded-full hover:bg-green-500 hover:text-white hover:rotate-[720deg] transition-all"
                >
                  <FaEye />
                </Link>
              </ul>
            </div>
            <div className="py-3 text-gray-500 px-2">
              <h2 className="font-bold">{p.name} </h2>
              <div className="flex flex-col justify-start items-start gap-1">
                {p.prices && p.prices.length > 0
                  ? p.prices.map((priceObj, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <span className="font-semibold">{priceObj.range}:</span>
                        <span className="flex items-center text-md font-semibold">
                          <TbCurrencyNaira className="mt-[1.5px]" />
                          {formatPrice(priceObj.price)}
                        </span>
                      </div>
                    ))
                  : 'Price not available'}
                <div className="flex">
                  <Rating ratings={p.rating || 0} />
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
