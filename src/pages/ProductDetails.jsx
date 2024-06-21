import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import {
  FaChevronRight,
  FaFacebookF,
  FaHeart,
  FaInstagram,
  FaTwitter,
} from 'react-icons/fa6';
import { BsChatDots } from 'react-icons/bs';
import logo from '../images/category/5.png';
import { category } from '../data';
import Carousel from 'react-multi-carousel';
import Rating from '../components/Rating';
import Reviews from '../components/Reviews';
import { TbCurrencyNaira } from 'react-icons/tb';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const ProductDetails = () => {
  const [mainImage, setMainImage] = useState(logo);
  const discount = 5;
  const stock = 10;
  const [state, setState] = useState('reviews');

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4,
    },
    mdtablet: {
      breakpoint: { max: 991, min: 464 },
      items: 4,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3,
    },
    smmobile: {
      breakpoint: { max: 640, min: 0 },
      items: 2,
    },
    xsmobile: {
      breakpoint: { max: 440, min: 0 },
      items: 1,
    },
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
              <h2 className="text-3xl font-semibold">Product Details</h2>
              <div className="flex justify-center items-center gap-2 text-2xl w-full">
                <Link to="/">Home</Link>
                <span className="pt-2">
                  <FaChevronRight />
                </span>
                <span className="">Product Details</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="bg-gray-100 py-5 mb-5">
          <div className="w-[85%] md:w-[80%] sm:w-[90%] lg:w-[90%] h-full mx-auto">
            <div className="flex justify-start items-center text-md text-gray-500 w-full">
              <Link to="/">Home</Link>
              <span className="pt-1">
                <FaChevronRight />
              </span>
              <Link to="/category">Category</Link>
              <span className="pt-1">
                <FaChevronRight />
              </span>
              <span>Product Name</span>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="w-[85%] md:w-[80%] sm:w-[90%] lg:w-[90%] h-full mx-auto">
          <div className="grid grid-cols-2 md-lg:grid-cols-1 gap-8">
            <div>
              <div className="p-5 border">
                <img
                  className="h-[300px] w-full object-cover"
                  src={mainImage}
                  alt="Main Product"
                />
              </div>
              <div className="py-3">
                {
                  <Carousel
                    autoPlay={true}
                    infinite={true}
                    arrows={true}
                    transitionDuration={500}
                    responsive={responsive}
                  >
                    {category.map((c, i) => (
                      <div
                        onClick={() => setMainImage(c.img)}
                        className="border h-full w-full block cursor-pointer object-cover"
                        key={i}
                      >
                        <img
                          className="w-full h-full object-cover"
                          src={c.img}
                          alt={`${c.name}`}
                        />
                      </div>
                    ))}
                  </Carousel>
                }
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className="text-3xl text-gray-500 font-bold">
                <h3>Product Name</h3>
              </div>
              <div className="flex justify-start items-center gap-4">
                <div className="flex text-xl">
                  <Rating ratings={4.5} />
                </div>
                <span className="text-green-600">(24 reviews)</span>
              </div>

              <div className="text-2xl text-orange-500 font-bold flex gap-3">
                {discount !== 0 ? (
                  <>
                    <h2 className="line-through">Price : $700</h2>
                    <h2>
                      ${700 - Math.floor((700 * discount) / 100)} ({-discount}%)
                    </h2>
                  </>
                ) : (
                  <h2>Price : $500</h2>
                )}
              </div>

              <div className="text-gray-500">
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Consequatur eum aut quae, suscipit vitae ea molestiae
                  blanditiis soluta minima atque doloremque ut recusandae
                  pariatur officia odio quas dolor? Rem, illo.
                </p>
              </div>
              <div className="flex gap-3 pb-10 border-b">
                {stock ? (
                  <>
                    <div className="flex bg-gray-200 h-[50px] justify-center items-center text-xl rounded">
                      <div className="px-6 cursor-pointer">-</div>
                      <div className="">3</div>
                      <div className="px-6 cursor-pointer">+</div>
                    </div>
                    <div>
                      <button className="px-8 py-3 h-[50px] cursor-pointer hover:shadow-md bg-orange-400 rounded hover:shadow-orange-500/50 text-white font-semibold">
                        Add to Cart
                      </button>
                    </div>
                  </>
                ) : (
                  ''
                )}
                <div>
                  <div className="h-[50px] w-[50px] flex items-center cursor-pointer justify-center bg-white  text-orange-500 border border-orange-500 rounded shadow-md">
                    <FaHeart />
                  </div>
                </div>
              </div>
              <div className="flex py-5 gap-5">
                <div className="w-[150px] text-gray-700 font-bold text-xl flex flex-col gap-5">
                  <span>Availability</span>
                  <span>Share</span>
                </div>
                <div className="flex flex-col gap-5">
                  <span className={`text-${stock ? 'green' : 'red'}-500`}>
                    {stock ? `In  Stock(${stock})` : 'Out of Stock'}
                  </span>
                  <ul className="flex justify-start items-center gap-3">
                    <li>
                      <a
                        className="w-[38px] h-[38px] flex items-center justify-center bg-gray-100 text-orange-500 rounded-full hover:bg-orange-500 hover:text-white transition-all duration-150"
                        href="http://facebook.com"
                      >
                        <FaFacebookF />
                      </a>
                    </li>
                    <li>
                      <a
                        className="w-[38px] h-[38px] flex items-center justify-center bg-gray-100 text-orange-500 rounded-full  hover:bg-orange-500 hover:text-white transition-all duration-150"
                        href="http://facebook.com"
                      >
                        <FaTwitter />
                      </a>
                    </li>
                    <li>
                      <a
                        className="w-[38px] h-[38px] flex items-center justify-center bg-gray-100 text-orange-500 rounded-full  hover:bg-orange-500 hover:text-white transition-all duration-150"
                        href="http://facebook.com"
                      >
                        <FaInstagram />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex gap-3 pb-10">
                {stock ? (
                  <button className="px-8 py-3 h-[50px] cursor-pointer hover:shadow-md bg-orange-400 rounded hover:shadow-orange-500/50 text-white font-semibold">
                    Buy Now
                  </button>
                ) : (
                  <button disabled>Out of Stock</button>
                )}
                <Link
                  className="px-8 py-3 h-[50px] cursor-pointer hover:shadow-md bg-white rounded hover:shadow-orange-500/50 text-orange-500 border border-orange-500 font-semibold flex justify-center items-center gap-3"
                  to={'/#'}
                >
                  <BsChatDots />
                  Chat with Seller
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="w-[85%] md:w-[80%] sm:w-[90%] lg:w-[90%] h-full mx-auto pb-16">
          <div className="flex flex-wrap">
            <div className="w-[72%] md-lg:w-full">
              <div className="pr-4 md-lg:pr-0">
                <div className="grid grid-cols-2">
                  <button
                    onClick={() => setState('reviews')}
                    className={`py-1 hover:text-white hover:bg-orange-200  ${
                      state === 'reviews'
                        ? 'bg-orange-400 text-white'
                        : 'bg-gray-100 text-gray-500'
                    } `}
                  >
                    Reviews
                  </button>
                  <button
                    onClick={() => setState('description')}
                    className={`py-1 hover:text-white hover:bg-orange-200  ${
                      state === 'description'
                        ? 'bg-orange-400 text-white'
                        : 'bg-gray-100 text-gray-500'
                    } `}
                  >
                    Description
                  </button>
                </div>
                <div>
                  {state === 'reviews' ? (
                    <Reviews />
                  ) : (
                    <p className="py-5 text-gray-500">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Expedita reiciendis voluptatem quasi id, accusantium sit
                      animi ratione quam repudiandae vel voluptate aperiam
                      dolorum hic. Corrupti sapiente quaerat exercitationem
                      maxime tempore!
                    </p>
                  )}
                </div>
              </div>
            </div>

            <div className="w-[28%] md-lg:w-full">
              <div className="pl-4 md-lg:pl-0">
                <div className="px-3 py-2 text-gray-500 bg-gray-100">
                  <h2 className="font-semibold">More from Mein Shop</h2>
                </div>
                <div className="flex flex-col gap-5 mt-3 border p-3">
                  {category.slice(0, 3).map((c, i) => {
                    return (
                      <Link key={i} className="block">
                        <div className="relative h-[270px]">
                          <img
                            className="w-full h-full object-cover"
                            src={c.img}
                            alt={`${c.name}`}
                          />
                          {discount !== 0 && (
                            <div className="flex justify-center items-center absolute text-white w-[38px] h-[38px] rounded-full bg-orange-500 font-semibold text-sm left-2 top-2">
                              {discount}%
                            </div>
                          )}
                        </div>
                        <h2 className="font-bold text-gray-500">{c.name} </h2>
                        <div className="flex justify-start items-center gap-3">
                          <span className="flex text-md font-semibold justify-center items-center gap-0 text-gray-600">
                            <span className="mt-[1.5px]">
                              <TbCurrencyNaira />
                            </span>

                            <span>{c.price}</span>
                          </span>
                          <div className="flex">
                            <Rating ratings={4.5} />
                          </div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="w-[85%] md:w-[80%] sm:w-[90%] lg:w-[90%] h-full mx-auto">
          <h2 className="text-2xl py-8 text-gray-500">Related Products</h2>
          <Swiper
            slidesPerView={'auto'}
            breakpoints={{
              1280: { slidesPerView: 3 },
              565: { slidesPerView: 2 },
            }}
            spaceBetween={25}
            loop={true}
            pagination={{ clickable: true, el: '.custom_bullet' }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {category.slice(0, 6).map((c, i) => {
              return (
                <SwiperSlide key={i} className="h-full">
                  <Link className="block h-full">
                    <div className="relative h-[270px] overflow-hidden">
                      <div className="h-full">
                        <img
                          className="w-full h-full object-cover"
                          src={c.img}
                          alt={`${c.name}`}
                        />
                        <div className="absolute h-full w-full top-0 left-0 bg-gray-500 opacity-25 hover:opacity-50 transition-all duration-500"></div>
                      </div>
                      {discount !== 0 && (
                        <div className="flex justify-center items-center absolute text-white w-[38px] h-[38px] rounded-full bg-orange-500 font-semibold text-sm left-2 top-2">
                          {discount}%
                        </div>
                      )}
                    </div>
                    <div className="p-4 flex flex-col gap-1">
                      <h2 className="font-bold text-gray-500">{c.name} </h2>
                      <div className="flex justify-start items-center gap-3">
                        <span className="flex text-md font-semibold justify-center items-center gap-0 text-gray-600">
                          <span className="mt-[1.5px]">
                            <TbCurrencyNaira />
                          </span>
                          <span>{c.price}</span>
                        </span>
                        <div className="flex">
                          <Rating ratings={4.5} />
                        </div>
                      </div>
                    </div>
                  </Link>
                </SwiperSlide>
              );
            })}
          </Swiper>
          <div className="w-full flex justify-center items-center py-5">
            <div className="custom_bullet justify-center gap-3 !w-auto"></div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProductDetails;
