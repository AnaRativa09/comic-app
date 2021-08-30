import React, { useState } from 'react';
import { FaStar, FaRedoAlt } from 'react-icons/fa';

function StarRating({ setValidateComic }) {
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
              setValidateComic(true);
            }}
            key={start}
            aria-label="calification button"
          >
            <FaStar
              size={30}
              color={calificationValue <= calification ? '#FFB91D' : 'gray'}
            />
          </button>
        );
      })}

      <button
        type="button"
        onClick={() => {
          setCalification(null);
          setValidateComic(false);
        }}
        aria-label="refresh button"
      >
        <FaRedoAlt />
      </button>
    </div>
  );
}

export default StarRating;
