import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link, useSearchParams } from 'react-router-dom';
import { FaChevronRight } from 'react-icons/fa6';

import { Range } from 'react-range';
import { AiFillStar } from 'react-icons/ai';
import { CiStar } from 'react-icons/ci';
import Products from '../components/products/Products';
import { BsGrid, BsListUl } from 'react-icons/bs';
import ShopProduct from '../components/products/ShopProduct';
import Pagination from '../components/Pagination';
import { useDispatch, useSelector } from 'react-redux';
import { price_range, query_products } from '../store/reducers/homeReducer';
import { location } from '../data';

const CategoryShop = () => {
  let [searchParams, setSearchParams] = useSearchParams();
  const category = searchParams.get('category');

  const dispatch = useDispatch();
  const {
    categories,
    products,
    priceRange,
    latest_product,
    totalProduct,
    parPage,
  } = useSelector((state) => state.home);
  const [filter, setFilter] = useState(true);
  const [state, setState] = useState({
    values: [priceRange.low, priceRange.high],
  });
  const [selectedState, setSelectedState] = useState('');
  const [selectedLGA, setSelectedLGA] = useState('');
  const [rating, setRating] = useState('');
  const [styles, setStyles] = useState('grid');
  const [pageNumber, setPageNumber] = useState(1);

  const [sortPrice, setSortPrice] = useState('');

  useEffect(() => {
    dispatch(price_range());
  }, [dispatch]);

  useEffect(() => {
    setState({
      values: [priceRange.low, priceRange.high],
    });
  }, [dispatch, priceRange]);

  // Handle state change
  const handleStateChange = (e) => {
    setSelectedState(e.target.value);
    setSelectedLGA('');
  };

  // Handle LGA change
  const handleLGAChange = (e) => {
    setSelectedLGA(e.target.value);
  };

  useEffect(() => {
    dispatch(
      query_products({
        low: state.values[0] || '',
        high: state.values[1] || '',
        category,
        state: selectedState,
        LGA: selectedLGA,
        rating,
        sortPrice,
        pageNumber,
      })
    );
  }, [
    dispatch,
    category,
    selectedState,
    selectedLGA,
    rating,
    sortPrice,
    pageNumber,
    state.values[0],
    state.values[1],
  ]);

  const resetRating = () => {
    setRating('');
    dispatch(
      query_products({
        low: state.values[0],
        high: state.values[1],
        category,
        state: selectedState,
        LGA: selectedLGA,
        rating,
        sortPrice,
        pageNumber,
      })
    );
  };

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
              <h2 className="text-3xl font-semibold">Category Page</h2>
              <div className="flex justify-center items-center gap-2 text-2xl w-full">
                <Link to="/">Home</Link>
                <span className="pt-2">
                  <FaChevronRight />
                </span>
                <span className="">Category</span>
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
              <div className="bg-white p-2 shadow-md rounded-md w-[280px]">
                <div className="py-2 flex flex-col gap-5">
                  <h2 className="text-2xl font-semibold text-gray-500">
                    Price
                  </h2>
                  <Range
                    step={5}
                    min={priceRange.low}
                    max={priceRange.high}
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
                      NGN{state.values[0].toLocaleString()} - NGN
                      {state.values[1].toLocaleString()}
                    </span>
                  </div>
                </div>
                <div className="py-3 flex flex-col gap-4 border-t mt-2">
                  <h2 className="text-2xl font-semibold text-gray-500">
                    Location
                  </h2>
                  <select
                    className="p-1 border outline-0 font-semibold text-gray-500"
                    value={selectedState}
                    onChange={handleStateChange}
                  >
                    <option value="">Select State</option>
                    {Object.keys(location).map((state) => (
                      <option key={state} value={state}>
                        {state}
                      </option>
                    ))}
                  </select>
                  {selectedState && (
                    <select
                      className="p-1 border outline-0 font-semibold text-gray-500"
                      value={selectedLGA}
                      onChange={handleLGAChange}
                    >
                      <option value="">Select LGA</option>
                      {location[selectedState].map((lga) => (
                        <option key={lga} value={lga}>
                          {lga}
                        </option>
                      ))}
                    </select>
                  )}
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
                    <div
                      onClick={resetRating}
                      className="text-yellow-500 flex justify-start items-start gap-2 text-xl cursor-pointer"
                    >
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
                  {latest_product && (
                    <Products
                      title="Latest Products"
                      products={latest_product}
                    />
                  )}
                </div>
              </div>
            </div>
            <div className="w-9/12 md-lg:w-8/12 md:w-full mt-5">
              <div className="pl-8 md:pl-0">
                <div className="py-4 bg-white mb-5 px-3 rounded-md flex justify-between items-start border">
                  <h2 className="text-gray-500 text-md font-semibold">
                    {totalProduct} products
                  </h2>
                  <div className="flex justify-center items-center gap-3">
                    <select
                      className="p-1 border outline-0 font-semibold text-gray-500"
                      name=""
                      id=""
                      onChange={(e) => setSortPrice(e.target.value)}
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
                  <ShopProduct products={products} styles={styles} />
                </div>
                <div>
                  {totalProduct > parPage && (
                    <Pagination
                      pageNumber={pageNumber}
                      setPageNumber={setPageNumber}
                      totalItem={totalProduct}
                      parPage={parPage}
                      showItem={Math.floor(totalProduct / parPage)}
                    />
                  )}
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

export default CategoryShop;
