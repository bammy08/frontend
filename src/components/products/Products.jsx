import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Link } from 'react-router-dom';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6';
import { TbCurrencyNaira } from 'react-icons/tb';
const Products = ({ title, products }) => {
  const formatPrice = (price) => {
    return price.toLocaleString('en-NG'); // Formats the price as '1,200'
  };
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
        {products.map((p, i) => {
          return (
            <div key={i} className="flex flex-col justify-start gap-2">
              {p.map((pl, j) => (
                <Link key={j} className="flex justify-start items-start" to="#">
                  <img
                    className="w-[110px] h-[110px]"
                    src={pl.images[0]}
                    alt="images"
                  />
                  <div className="px-3 flex justify-start items-start gap-1 flex-col text-slate-600">
                    <h2>{pl.name}</h2>
                    {pl.prices && pl.prices.length > 0
                      ? pl.prices.map((priceObj, idx) => (
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
                  </div>
                </Link>
              ))}
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default Products;
