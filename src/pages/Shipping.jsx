import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link, useLocation } from 'react-router-dom';
import { FaChevronRight } from 'react-icons/fa6';
import { location } from '../data';
import logo from '../images/category/3.png';

const Shipping = () => {
  const cart_product = [1, 2];
  const [res, setRes] = useState(false);
  const { state } = useLocation();
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    phone: '',
    state: '',
    lga: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, address, phone, state, lga } = formData;
    if (name && address && phone && state && lga) {
      setRes(true);
    }
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
              <h2 className="text-3xl font-semibold">Shipping Page</h2>
              <div className="flex justify-center items-center gap-2 text-2xl w-full">
                <Link to="/">Home</Link>
                <span className="pt-2">
                  <FaChevronRight />
                </span>
                <span className="">Shipping</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-100">
        <div className="w-[85%] lg:w-[90%] md:w-[90%] sm:w-[90%] mx-auto py-16">
          <div className="w-full flex flex-wrap">
            <div className="w-[67%] md-lg:w-full">
              <div className="flex flex-col gap-3">
                <div className="bg-white p-6 shadow-sm rounded">
                  <h2 className="text-md text-gray-500 font-semibold pb-3">
                    Shipping Information
                  </h2>
                  {!res && (
                    <>
                      <form onSubmit={handleSubmit}>
                        <div className="flex md:flex-col md:gap-2 w-full gap-5 text-gray-500">
                          <div className="flex flex-col gap-1 mb-2 w-full">
                            <label htmlFor="name">Name</label>
                            <input
                              type="text"
                              className="w-full px-3 py-2 border border-gray-300 outline-none focus:border-green-500 rounded-md"
                              name="name"
                              id="name"
                              placeholder="Enter your name"
                              value={formData.name}
                              onChange={handleChange}
                            />
                          </div>
                          <div className="flex flex-col gap-1 mb-2 w-full">
                            <label htmlFor="address">Address</label>
                            <input
                              type="text"
                              className="w-full px-3 py-2 border border-gray-300 outline-none focus:border-green-500 rounded-md"
                              name="address"
                              id="address"
                              placeholder="Enter your address"
                              value={formData.address}
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                        <div className="flex md:flex-col md:gap-2 w-full gap-5 text-gray-500">
                          <div className="flex flex-col gap-1 mb-2 w-full">
                            <label htmlFor="phone">Phone</label>
                            <input
                              type="tel"
                              className="w-full px-3 py-2 border border-gray-300 outline-none focus:border-green-500 rounded-md"
                              name="phone"
                              id="phone"
                              placeholder="08035812488"
                              value={formData.phone}
                              onChange={handleChange}
                            />
                          </div>
                          <div className="flex flex-col gap-1 mb-2 w-full">
                            <label htmlFor="state">State</label>
                            <select
                              id="state"
                              name="state"
                              value={formData.state}
                              onChange={handleChange}
                              className="w-full px-3 py-2 border border-gray-300 outline-none focus:border-green-500 rounded-md"
                            >
                              <option value="">Select a state</option>
                              {Object.keys(location).map((state) => (
                                <option key={state} value={state}>
                                  {state}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>
                        {formData.state && (
                          <div className="flex md:flex-col md:gap-2 w-full gap-5 text-gray-500">
                            <div className="flex flex-col gap-1 mb-2 w-full">
                              <label htmlFor="lga">Local Government Area</label>
                              <select
                                id="lga"
                                name="lga"
                                value={formData.lga}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border border-gray-300 outline-none focus:border-green-500 rounded-md"
                              >
                                <option value="">Select an LGA</option>
                                {location[formData.state].map((lga) => (
                                  <option key={lga} value={lga}>
                                    {lga}
                                  </option>
                                ))}
                              </select>
                            </div>
                          </div>
                        )}
                        <div className="flex flex-col gap-1 mt-[29px] w-full">
                          <button
                            type="submit"
                            className="px-3 py-2 rounded bg-orange-400 text-white hover:shadow-sm hover:shadow-orange-500/50"
                          >
                            Save Changes
                          </button>
                        </div>
                      </form>
                    </>
                  )}
                  {res && (
                    <div className="flex flex-col gap-1 mt-4">
                      <h2 className="text-gray-500 font-semibold pb-2">
                        Deliver to: {formData.name}
                      </h2>
                      <p>
                        <span>{formData.phone}</span>
                      </p>
                      <span>{formData.address}</span>
                      <span>
                        {formData.state}, {formData.lga}
                      </span>

                      <span
                        onClick={() => setRes(false)}
                        className="text-green-600 cursor-pointer"
                      >
                        Change
                      </span>
                    </div>
                  )}
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
                              <h2 className="text-md font-semibold">Onion</h2>
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
              </div>
            </div>
            <div className="w-[33%] md-lg:w-full">
              <div className="pl-3 md-lg:pl-0 md-lg:pt-5">
                <div className="bg-white p-3 text-gray-500 flex flex-col gap-3 rounded">
                  <h3 className="text-lg font-semibold">Order Summary</h3>
                  <div className="flex justify-between items-center">
                    <span> Total Item (5)</span>
                    <span> $700</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span> Shipping Fee</span>
                    <span> $70</span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span>Total Payment: </span>
                    <span className="text-lg text-green-500 font-bold">
                      $770
                    </span>
                  </div>
                  <button
                    disabled={res ? false : true}
                    className={`px-5 py-2 rounded-sm hover:shadow-orange-500/50 hover:shadow-md ${
                      res ? 'bg-orange-400' : 'bg-orange-200'
                    }  font-semibold text-sm uppercase text-white`}
                  >
                    Place Order
                  </button>
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

export default Shipping;
