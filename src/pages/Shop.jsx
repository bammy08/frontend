import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { FaChevronRight } from 'react-icons/fa6';
import { category } from '../data';
import { Range } from 'react-range';
import { AiFillStar } from 'react-icons/ai';
import { CiStar } from 'react-icons/ci';
import Products from '../components/products/Products';
import { BsGrid, BsListUl } from 'react-icons/bs';
import ShopProduct from '../components/products/ShopProduct';
import Pagination from '../components/Pagination';

const Shop = () => {
  const [filter, setFilter] = useState(true);
  const [state, setState] = useState({ values: [50, 200000] });
  const [rating, setRating] = useState('');
  const [styles, setStyles] = useState('grid');
  const [pageNumber, setPageNumber] = useState(1);
  const [parPage, setParPage] = useState(1);

  return (
    <div className="bg-gray-100">
      <Header />
      <section
        className="h-[300px] mt-6 bg-cover bg-no-repeat relative bg-left"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/images/shop.jpg)`,
        }}
      >
        <div className="absolute left-0 top-0 w-full h-full bg-[#2422228a]">
          <div className="w-[85%] md:w-[80%] sm:w-[90%] lg:w-[90%] h-full mx-auto">
            <div className="flex flex-col justify-center gap-1 items-center h-full w-full text-white">
              <h2 className="text-3xl font-semibold">Shop page</h2>
              <div className="flex justify-center items-center gap-2 text-2xl w-full">
                <Link to="/">Home</Link>
                <span className="pt-2">
                  <FaChevronRight />
                </span>
                <span className="">Shop</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="w-[85%] md:w-[80%] sm:w-[90%] lg:w-[90%] h-full mx-auto">
          <div className={`md:block hidden ${!filter ? 'mb-6' : 'mb-0'}`}>
            <button
              onClick={() => setFilter(!filter)}
              className="text-center w-full py-2 px-3 bg-orange-400 rounded text-white"
            >
              Filter Product
            </button>
          </div>
          <div className="w-full flex flex-wrap">
            <div
              className={`w-3/12 md-lg:w-4/12 md:w-full pr-8 ${
                filter
                  ? 'md:h-0 md:overflow-hidden md:mb-6'
                  : 'md:h-auto md:overflow-auto md:mb-0'
              }`}
            >
              <div className="bg-white p-4 shadow-md rounded-md">
                <h2 className="text-2xl font-semibold text-gray-500">
                  Category
                </h2>
                <div className="py-2 border-t mt-2">
                  {category.map((c, i) => (
                    <div
                      key={i}
                      className="flex justify-start items-center gap-2 py-1"
                    >
                      <input type="checkbox" id={c} />
                      <label
                        className="text-gray-500 block cursor-pointer"
                        htmlFor={c}
                      >
                        {c.name}
                      </label>
                    </div>
                  ))}
                </div>

                <div className="py-2 flex flex-col gap-5 border-t mt-2">
                  <h2 className="text-2xl font-semibold text-gray-500">
                    Price
                  </h2>
                  <Range
                    step={5}
                    min={50}
                    max={200000}
                    values={state.values}
                    renderTrack={({ props, children }) => (
                      <div
                        {...props}
                        className="w-full h-[6px] bg-green-200 rounded-full cursor-pointer"
                      >
                        {children}
                      </div>
                    )}
                    onChange={(values) => setState({ values })}
                    renderThumb={({ props }) => (
                      <div
                        className="w-[15px] h-[15px] bg-orange-400 rounded-full"
                        {...props}
                      />
                    )}
                  />
                  <div>
                    <span className="text-gray-500 font-semibold">
                      ${state.values[0].toLocaleString()} - $
                      {state.values[1].toLocaleString()}
                    </span>
                  </div>
                </div>

                <div className="py-3 flex flex-col gap-4 border-t border-b mt-2">
                  <h2 className="text-2xl font-semibold text-gray-500">
                    Rating
                  </h2>
                  <div className="flex flex-col gap-3">
                    <div
                      onClick={() => setRating(5)}
                      className="text-yellow-500 flex justify-start items-start gap-2 text-xl cursor-pointer"
                    >
                      <span>
                        <AiFillStar />
                      </span>
                      <span>
                        <AiFillStar />
                      </span>
                      <span>
                        <AiFillStar />
                      </span>
                      <span>
                        <AiFillStar />
                      </span>
                      <span>
                        <AiFillStar />
                      </span>
                    </div>
                    <div
                      onClick={() => setRating(4)}
                      className="text-yellow-500 flex justify-start items-start gap-2 text-xl cursor-pointer"
                    >
                      <span>
                        <AiFillStar />
                      </span>
                      <span>
                        <AiFillStar />
                      </span>
                      <span>
                        <AiFillStar />
                      </span>
                      <span>
                        <AiFillStar />
                      </span>
                      <span>
                        <CiStar />
                      </span>
                    </div>
                    <div
                      onClick={() => setRating(3)}
                      className="text-yellow-500 flex justify-start items-start gap-2 text-xl cursor-pointer"
                    >
                      <span>
                        <AiFillStar />
                      </span>
                      <span>
                        <AiFillStar />
                      </span>
                      <span>
                        <AiFillStar />
                      </span>
                      <span>
                        <CiStar />
                      </span>
                      <span>
                        <CiStar />
                      </span>
                    </div>
                    <div
                      onClick={() => setRating(2)}
                      className="text-yellow-500 flex justify-start items-start gap-2 text-xl cursor-pointer"
                    >
                      <span>
                        <AiFillStar />
                      </span>
                      <span>
                        <AiFillStar />
                      </span>
                      <span>
                        <CiStar />
                      </span>
                      <span>
                        <CiStar />
                      </span>
                      <span>
                        <CiStar />
                      </span>
                    </div>
                    <div
                      onClick={() => setRating(1)}
                      className="text-yellow-500 flex justify-start items-start gap-2 text-xl cursor-pointer"
                    >
                      <span>
                        <AiFillStar />
                      </span>
                      <span>
                        <CiStar />
                      </span>
                      <span>
                        <CiStar />
                      </span>
                      <span>
                        <CiStar />
                      </span>
                      <span>
                        <CiStar />
                      </span>
                    </div>
                    <div className="text-yellow-500 flex justify-start items-start gap-2 text-xl cursor-pointer">
                      <span>
                        <CiStar />
                      </span>
                      <span>
                        <CiStar />
                      </span>
                      <span>
                        <CiStar />
                      </span>
                      <span>
                        <CiStar />
                      </span>
                      <span>
                        <CiStar />
                      </span>
                    </div>
                  </div>
                </div>
                <div className="py-5 flex flex-col gap-4 md:hidden">
                  <Products title="Latest Products" />
                </div>
              </div>
            </div>
            <div className="w-9/12 md-lg:w-8/12 md:w-full mt-5">
              <div className="pl-8 md:pl-0">
                <div className="py-4 bg-white mb-5 px-3 rounded-md flex justify-between items-start border">
                  <h2 className="text-gray-500 text-md font-semibold">
                    14 Products
                  </h2>
                  <div className="flex justify-center items-center gap-3">
                    <select
                      className="p-1 border outline-0 font-semibold text-gray-500"
                      name=""
                      id=""
                    >
                      <option value="sort by">Sort By</option>
                      <option value="ascending">Price: Low to High</option>
                      <option value="descending">Price: High to Low</option>
                    </select>
                    <div className="flex justify-center items-start gap-4 md-lg:hidden">
                      <div
                        className={`p-2 ${
                          styles === 'grid' && 'bg-green-300'
                        } text-gray-500 hover:text-green-600 cursor-pointer rounded-sm`}
                        onClick={() => setStyles('grid')}
                      >
                        <BsGrid />
                      </div>
                      <div
                        className={`p-2 ${
                          styles === 'list' && 'bg-green-300'
                        } text-gray-500 hover:text-green-600 cursor-pointer rounded-sm`}
                        onClick={() => setStyles('list')}
                      >
                        <BsListUl />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="pb-8">
                  <ShopProduct styles={styles} />
                </div>
                <div>
                  <Pagination
                    pageNumber={pageNumber}
                    setPageNumber={setPageNumber}
                    totalItem={10}
                    parPage={parPage}
                    showItem={Math.floor(10 / 3)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Shop;
