import React from 'react';

// Import components
import StarRating from './StarRating';

function ComicCard({ data, setIsRanked }) {
  return (
    <section className="comic-container">
      <div className="header-comic">
        <div className="title-comic">
          <h2>{data.title}</h2>
          <p>
            #
            {data.num}
          </p>
        </div>

        <StarRating setIsRanked={setIsRanked} />
      </div>

      <img src={data.img} alt={data.title} />

    </section>
  );
}

export default ComicCard;
