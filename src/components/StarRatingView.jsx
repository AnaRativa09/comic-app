import React from 'react';
import { FaStar } from 'react-icons/fa';

function StarRatingView({ data }) {
  const arrStarts = [1, 2, 3, 4, 5];

  return (
    <div className="star-rating-container">
      {arrStarts.map((star, index) => {
        const calificationValue = index + 1;

        return (
          <FaStar
            size={20}
            color={calificationValue <= data.calification ? '#FFB91D' : 'gray'}
            key={star}
          />
        );
      })}
    </div>
  );
}

export default StarRatingView;
