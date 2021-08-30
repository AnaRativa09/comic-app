import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

function StarRating() {
  const [calification, setCalification] = useState(null);
  const arrStarts = [1, 2, 3, 4, 5];

  return (
    <div className="star-rating-container">
      {arrStarts.map((start, index) => {
        const calificationValue = index + 1;

        return (
          <button
            type="button"
            value="calificationValue"
            onClick={() => {
              setCalification(calificationValue);
            }}
            key={start}
          >
            <FaStar
              size={30}
              color={calificationValue <= calification ? '#FFB91D' : 'gray'}
            />
          </button>
        );
      })}
    </div>
  );
}

export default StarRating;
