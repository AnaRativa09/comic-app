import React from 'react';
import { FaStar, FaRedoAlt } from 'react-icons/fa';

function StarRating({ setIsRanked, setCalification, calification }) {
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
              setIsRanked(true);
            }}
            key={start}
            aria-label="calification button"
          >
            <FaStar
              size={20}
              color={calificationValue <= calification ? '#FFB91D' : 'gray'}
            />
          </button>
        );
      })}

      <button
        type="button"
        onClick={() => {
          setCalification(null);
          setIsRanked(false);
        }}
        aria-label="refresh button"
      >
        <FaRedoAlt />
      </button>
    </div>
  );
}

export default StarRating;
