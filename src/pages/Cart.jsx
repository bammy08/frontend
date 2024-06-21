import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link, useNavigate } from 'react-router-dom';
import { FaChevronRight } from 'react-icons/fa6';
import logo from '../images/category/3.png';

const Cart = () => {
  const navigate = useNavigate();
  const cart_product = [1, 2];
  const out_of_stock = [1, 2];

  const redirect = () => {
    navigate('/shipping', {
      state: {
        products: [],
        price: 500,
        shipping_fee: 40,
        items: 2,
      },
    });
  };

  return (
    <div>
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
              <h2 className="text-3xl font-semibold">Cart page</h2>
              <div className="flex justify-center items-center gap-2 text-2xl w-full">
                <Link to="/">Home</Link>
                <span className="pt-2">
                  <FaChevronRight />
                </span>
                <span className="">Cart</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-100">
        <div className="w-[85%] lg:w-[90%] md:w-[90%] sm:w-[90%] mx-auto py-16">
          {cart_product.length > 0 || out_of_stock > 0 ? (
            <div className="flex flex-wrap">
              <div className="w-[67%] md-lg:w-full">
                <div className="pr-3 md-lg:pr-0">
                  <div className="flex flex-col gap-3">
                    <div className="bg-white p-4 rounded">
                      <h2 className="text-md text-green-500 font-semibold">
                        Products in Cart {cart_product.length}
                      </h2>
                    </div>
                    {cart_product.map((p, i) => (
                      <div className="bg-white p-4 flex flex-col gap-2">
                        <div className="flex justify-start items-center">
                          <h2 className="text-md font-semibold text-gray-500">
                            Mein Shop
                          </h2>
                        </div>
                        {[1, 2].map((p, i) => (
                          <div className="flex w-full flex-wrap">
                            <div className="flex sm:w-full gap-2 w-7/12">
                              <div className="flex gap-2 justify-start items-center">
                                <img
                                  className="w-[80px] h-[80px]"
                                  src={logo}
                                  alt="logo"
                                />
                                <div className="pr-4 text-gray-500">
                                  <h2 className="text-md font-semibold">
                                    Onion
                                  </h2>
                                </div>
                              </div>
                            </div>
                            <div className="flex justify-between w-5/12 sm:w-full sm:mt-3">
                              <div className="p-4 sm:pl-0">
                                <h2 className="text-lg text-green-700">$400</h2>
                                <p className="line-through">$500</p>
                                <p className="text-gray-400">-50%</p>
                              </div>
                              <div className="flex gap-2 flex-col">
                                <div className="flex bg-gray-300 justify-center h-[30px] items-center text-2xl rounded">
                                  <div className="px-3 cursor-pointer">-</div>
                                  <div className="px-3 ">2</div>
                                  <div className="px-3 cursor-pointer">+</div>
                                </div>
                                <button className="px-5 py-1 bg-red-500 text-white rounded">
                                  Delete
                                </button>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    ))}
                    {out_of_stock.length > 0 && (
                      <div className="flex flex-col gap-3">
                        <div className="bg-white p-4 rounded">
                          <h2 className="text-md text-red-500 font-semibold">
                            out of stock {cart_product.length}
                          </h2>
                        </div>
                        <div className="bg-white p-4">
                          {[1].map((p, i) => (
                            <div className="flex w-full flex-wrap">
                              <div className="flex sm:w-full gap-2 w-7/12">
                                <div className="flex gap-2 justify-start items-center">
                                  <img
                                    className="w-[80px] h-[80px]"
                                    src={logo}
                                    alt="logo"
                                  />
                                  <div className="pr-4 text-gray-500">
                                    <h2 className="text-md font-semibold">
                                      Onion
                                    </h2>
                                  </div>
                                </div>
                              </div>
                              <div className="flex justify-between w-5/12 sm:w-full sm:mt-3">
                                <div className="p-4 sm:pl-0">
                                  <h2 className="text-lg text-green-700">
                                    $400
                                  </h2>
                                  <p className="line-through">$500</p>
                                  <p className="text-gray-400">-50%</p>
                                </div>
                                <div className="flex gap-2 flex-col">
                                  <div className="flex bg-gray-300 justify-center h-[30px] items-center text-2xl rounded">
                                    <div className="px-3 cursor-pointer">-</div>
                                    <div className="px-3 ">2</div>
                                    <div className="px-3 cursor-pointer">+</div>
                                  </div>
                                  <button className="px-5 py-1 bg-red-500 text-white rounded">
                                    Delete
                                  </button>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div>
              <Link
                className="px-4 py-2 bg-orange-400 text-white rounded"
                to="/shop"
              >
                Shop Now
              </Link>
            </div>
          )}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Cart;
