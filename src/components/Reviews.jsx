import React, { useState } from 'react';
import Rating from './Rating';
import RatingTemplate from './RatingTemplate';
import Pagination from './Pagination';
import { Link } from 'react-router-dom';
import RatingReact from 'react-rating';
import { CiStar } from 'react-icons/ci';
import { FaStar } from 'react-icons/fa6';

const Reviews = () => {
  const [pageNumber, setPageNumber] = useState(10);
  const [parPage, setParPage] = useState(1);
  const userInfo = {};
  const [rate, setRate] = useState('');
  const [review, setReview] = useState('');
  return (
    <div className="mt-8">
      <div className="flex gap-10 md-lg:flex-col">
        <div className="flex flex-col gap-2 justify-start items-start py-4">
          <div>
            <span className="text-6xl font-semibold">4.5</span>
            <span className="text-3xl font-semibold">/5</span>
          </div>
          <div className="flex text-3xl">
            <Rating ratings={4.5} />
          </div>
          <p className="text-sm text-gray-500">20 reviews</p>
        </div>
        <div className="flex gap-2 py-4 flex-col">
          <div className="flex justify-start items-center gap-2">
            <div className="text-md flex gap-1 w-[93px]">
              <RatingTemplate rating={5} />
            </div>
            <div className="w-[200px] h-[14px] relative bg-gray-200">
              <div className="h-full bg-yellow-500 w-[60%]"></div>
            </div>
            <p className="text-sm text-gray-500 w-[0%]">10</p>
          </div>
          <div className="flex justify-start items-center gap-2">
            <div className="text-md flex gap-1 w-[93px]">
              <RatingTemplate rating={4} />
            </div>
            <div className="w-[200px] h-[14px] relative bg-gray-200">
              <div className="h-full bg-yellow-500 w-[50%]"></div>
            </div>
            <p className="text-sm text-gray-500 w-[0%]">8</p>
          </div>
          <div className="flex justify-start items-center gap-2">
            <div className="text-md flex gap-1 w-[93px]">
              <RatingTemplate rating={3} />
            </div>
            <div className="w-[200px] h-[14px] relative bg-gray-200">
              <div className="h-full bg-yellow-500 w-[40%]"></div>
            </div>
            <p className="text-sm text-gray-500 w-[0%]">4</p>
          </div>
          <div className="flex justify-start items-center gap-2">
            <div className="text-md flex gap-1 w-[93px]">
              <RatingTemplate rating={2} />
            </div>
            <div className="w-[200px] h-[14px] relative bg-gray-200">
              <div className="h-full bg-yellow-500 w-[30%]"></div>
            </div>
            <p className="text-sm text-gray-500 w-[0%]">2</p>
          </div>
          <div className="flex justify-start items-center gap-2">
            <div className="text-md flex gap-1 w-[93px]">
              <RatingTemplate rating={1} />
            </div>
            <div className="w-[200px] h-[14px] relative bg-gray-200">
              <div className="h-full bg-yellow-500 w-[10%]"></div>
            </div>
            <p className="text-sm text-gray-500 w-[0%]">1</p>
          </div>
          <div className="flex justify-start items-center gap-2">
            <div className="text-md flex gap-1 w-[93px]">
              <RatingTemplate rating={0} />
            </div>
            <div className="w-[200px] h-[14px] relative bg-gray-200">
              <div className="h-full bg-yellow-500 w-[0%]"></div>
            </div>
            <p className="text-sm text-gray-500 w-[0%]">0</p>
          </div>
        </div>
      </div>
      <h2 className="text-gray-500 text-xl font-semibold py-5">
        Product Review (10)
      </h2>
      <div className="flex flex-col gap-8 pb-8 pt-4">
        {[1, 2, 3, 4, 5].map((r, i) => (
          <div key={i} className="flex flex-col gap-1">
            <div className="flex justify-between items-center">
              <div className="flex gap-1 text-4xl">
                <RatingTemplate rating={4} />
              </div>
              <span className="text-gray-500">20 June,2024</span>
            </div>
            <span className="text-gray-500 text-md">Bamidele</span>
            <p className="text-gray-500 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Consectetur dicta, vitae nam mollitia exercitationem ullam
              praesentium totam reiciendis porro doloribus, vero, vel
              consequatur itaque minus tempore similique obcaecati ea
              blanditiis?
            </p>
          </div>
        ))}
        <div className="flex justify-end">
          {
            <Pagination
              pageNumber={pageNumber}
              setPageNumber={setPageNumber}
              totalItem={10}
              parPage={parPage}
              showItem={Math.floor(10 / 3)}
            />
          }
        </div>
      </div>
      <div>
        {userInfo ? (
          <div className="flex flex-col gap-3">
            <div className="flex gap-1">
              <RatingReact
                initialRating={rate}
                emptySymbol={
                  <span className="text-gray-500 text-4xl">
                    <CiStar />
                  </span>
                }
                fullSymbol={
                  <span className="text-yellow-500 text-4xl">
                    <FaStar />
                  </span>
                }
                onChange={(e) => setRate(e)}
              />
            </div>
            <form>
              <textarea
                cols={30}
                rows={5}
                className="border border-gray-300 outline-0 p-3 w-full"
                required
              />
              <div className="mt-2 mb-5">
                <button className="px-5 py-2 rounded bg-orange-400 text-white font-semibold">
                  Submit
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div>
            <Link
              className="text-white py-2 px-3 bg-orange-400 rounded"
              to={'/login'}
            >
              Login to make a review
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Reviews;
