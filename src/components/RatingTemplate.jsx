import React from 'react';
import { CiStar } from 'react-icons/ci';
import { FaStarHalfAlt } from 'react-icons/fa';
import { FaStar } from 'react-icons/fa6';

const RatingTemplate = ({ rating }) => {
  if (rating === 5) {
    return (
      <>
        <span className="text-yellow-500">
          <FaStar />
        </span>
        <span className="text-yellow-500">
          <FaStar />
        </span>
        <span className="text-yellow-500">
          <FaStar />
        </span>
        <span className="text-yellow-500">
          <FaStar />
        </span>
        <span className="text-yellow-500">
          <FaStar />
        </span>
      </>
    );
  } else if (rating === 4) {
    return (
      <>
        <span className="text-yellow-500">
          <FaStar />
        </span>
        <span className="text-yellow-500">
          <FaStar />
        </span>
        <span className="text-yellow-500">
          <FaStar />
        </span>
        <span className="text-yellow-500">
          <FaStar />
        </span>
        <span className="text-yellow-500">
          <CiStar />
        </span>
      </>
    );
  } else if (rating === 3) {
    return (
      <>
        <span className="text-yellow-500">
          <FaStar />
        </span>
        <span className="text-yellow-500">
          <FaStar />
        </span>
        <span className="text-yellow-500">
          <FaStar />
        </span>
        <span className="text-yellow-500">
          <CiStar />
        </span>
        <span className="text-yellow-500">
          <CiStar />
        </span>
      </>
    );
  } else if (rating === 2) {
    return (
      <>
        <span className="text-yellow-500">
          <FaStar />
        </span>
        <span className="text-yellow-500">
          <FaStar />
        </span>
        <span className="text-yellow-500">
          <CiStar />
        </span>
        <span className="text-yellow-500">
          <CiStar />
        </span>
        <span className="text-yellow-500">
          <CiStar />
        </span>
      </>
    );
  } else if (rating === 1) {
    return (
      <>
        <span className="text-yellow-500">
          <FaStar />
        </span>
        <span className="text-yellow-500">
          <CiStar />
        </span>
        <span className="text-yellow-500">
          <CiStar />
        </span>
        <span className="text-yellow-500">
          <CiStar />
        </span>
        <span className="text-yellow-500">
          <CiStar />
        </span>
      </>
    );
  }

  return (
    <>
      <span className="text-yellow-500">
        <CiStar />
      </span>
      <span className="text-yellow-500">
        <CiStar />
      </span>
      <span className="text-yellow-500">
        <CiStar />
      </span>
      <span className="text-yellow-500">
        <CiStar />
      </span>
      <span className="text-yellow-500">
        <CiStar />
      </span>
    </>
  );
};

export default RatingTemplate;
