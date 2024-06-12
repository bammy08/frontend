import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Link } from 'react-router-dom';
import { category } from '../../data';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6';
const Products = ({ title }) => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const ButtonGroup = ({ next, previous }) => {
    return (
      <div className="flex justify-between items-center mb-4">
        <div className="text-xl font-bold text-gray-700">{title}</div>
        <div className="flex gap-2">
          <button
            onClick={previous}
            className="p-2 bg-gray-200 text-green-600 rounded-full"
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={next}
            className="p-2 bg-gray-200 text-green-600 rounded-full"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    );
  };

  // Function to chunk array into smaller arrays of a specific size
  const chunkArray = (array, size) => {
    const chunkedArr = [];
    for (let i = 0; i < array.length; i += size) {
      chunkedArr.push(array.slice(i, i + size));
    }
    return chunkedArr;
  };

  // Chunk categories into groups of three
  const categoryChunks = chunkArray(category, 3);

  return (
    <div className="flex gap-8 flex-col-reverse">
      <Carousel
        autoPlay={false}
        infinite={false}
        arrows={false}
        showDots={false}
        responsive={responsive}
        transitionDuration={500}
        customButtonGroup={<ButtonGroup />}
        renderButtonGroupOutside={true}
      >
        {categoryChunks.map((chunk, i) => (
          <div key={i} className="flex flex-col justify-start gap-2">
            {chunk.map((p, j) => (
              <Link key={j} className="block" to="#">
                <div className="flex items-center gap-1">
                  <img
                    className="w-32 h-32 object-cover"
                    src={p.img} // Updated to use direct image path from the category data
                    alt={p.name}
                  />
                  <div className="text-left">
                    <div className="text-lg font-semibold">{p.name}</div>
                    <div className="text-gray-500">Price: ${p.price}</div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Products;
