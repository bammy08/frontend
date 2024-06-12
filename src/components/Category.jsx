import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import { Link } from 'react-router-dom';
import { category } from '../data';

const Category = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 6,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
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
    <div className="w-[87%] mx-auto relative">
      <div className="w-full">
        <div className=" text-center flex justify-center items-center flex-col text-3xl text-gray-600 font-bold relative pb-[35px]">
          <h2>Top Categories</h2>
          <div className="w-[100px] h-[2px] bg-green-400 mt-4"></div>
        </div>
      </div>
      <Carousel
        autoPlay={true}
        infinite={true}
        arrows={false}
        transitionDuration={500}
        responsive={responsive}
      >
        {category.map((c, i) => (
          <Link className="h-[185px] border block" key={i} to="#">
            <img
              className="w-full h-full object-cover"
              style={{ width: '100%', height: '185px' }}
              src={c.img}
              alt={`${c.name}`}
            />
            <div className="absolute bottom-0 left-0 w-full flex items-center justify-center">
              <p className="text-white text-lg font-semibold bg-black bg-opacity-50 px-4 py-2 rounded">
                {c.name}
              </p>
            </div>
          </Link>
        ))}
      </Carousel>
    </div>
  );
};

export default Category;