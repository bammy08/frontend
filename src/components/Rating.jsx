import React from 'react';
import { FaStarHalfAlt } from 'react-icons/fa';
import { FaStar } from 'react-icons/fa6';
import { CiStar } from 'react-icons/ci';

const Rating = ({ ratings }) => {
  return (
    <>
      {ratings >= 1 ? (
        <span className="text-yellow-400">
          <FaStar />
        </span>
      ) : ratings >= 0.5 ? (
        <span className="text-yellow-400">
          <FaStarHalfAlt />
        </span>
      ) : (
        <span className="text-slate-400">
          <CiStar />
        </span>
      )}
      {ratings >= 2 ? (
        <span className="text-yellow-400">
          <FaStar />
        </span>
      ) : ratings >= 1.5 ? (
        <span className="text-yellow-400">
          <FaStarHalfAlt />
        </span>
      ) : (
        <span className="text-slate-400">
          <CiStar />
        </span>
      )}
      {ratings >= 3 ? (
        <span className="text-yellow-400">
          <FaStar />
        </span>
      ) : ratings >= 2.5 ? (
        <span className="text-yellow-400">
          <FaStarHalfAlt />
        </span>
      ) : (
        <span className="text-slate-400">
          <CiStar />
        </span>
      )}
      {ratings >= 4 ? (
        <span className="text-yellow-400">
          <FaStar />
        </span>
      ) : ratings >= 3.5 ? (
        <span className="text-yellow-400">
          <FaStarHalfAlt />
        </span>
      ) : (
        <span className="text-slate-400">
          <CiStar />
        </span>
      )}
      {ratings >= 5 ? (
        <span className="text-yellow-400">
          <FaStar />
        </span>
      ) : ratings >= 4.5 ? (
        <span className="text-yellow-400">
          <FaStarHalfAlt />
        </span>
      ) : (
        <span className="text-slate-400">
          <CiStar />
        </span>
      )}
    </>
  );
};

export default Rating;
