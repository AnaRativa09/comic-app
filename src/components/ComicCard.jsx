import React from 'react';
import StarRating from './StarRating';

function ComicCard({ data }) {
  return (
    <section className="comic-container">
      <div className="title-comic">
        <h3>{data.title}</h3>
        <p>
          #
          {data.num}
        </p>
        <StarRating />
      </div>

      <img src={data.img} alt={data.title} />
    </section>
  );
}

export default ComicCard;
