import React from 'react';
import { Card } from 'react-bootstrap';
import { getUniqueComic, addLocalData } from '../controllers/ComicFunctions';

// Import components
import Header from '../components/Header';
import Footer from '../components/Footer';
import StarRatingView from '../components/StarRatingView';

function Collection() {
  const localData = JSON.parse(sessionStorage.getItem('comics'));

  if (localData === null || localData.length === 0) {
    return (
      <>
        <Header />
        <p>You have not rated any comics yet. 🗯️💥</p>
        <Footer />
      </>
    );
  }

  // console.log(getUniqueComic(localData));
  const uniqueComic = getUniqueComic(localData);
  addLocalData(uniqueComic);

  return (
    <>
      <Header />

      <h2>Ranked Collection</h2>

      <section className="comics-ranked-container">
        { uniqueComic.map((comic) => (
          <Card className="text-center card-container" key={comic.dataComic.num}>
            <Card.Header>
              <div className="flex-row">
                {`#${comic.dataComic.num}`}
                <StarRatingView data={comic} />
              </div>
            </Card.Header>

            <Card.Body>
              <Card.Title>{comic.dataComic.title}</Card.Title>
              <Card.Img src={comic.dataComic.img} className="comic-img" alt={comic.dataComic.title} />
            </Card.Body>
          </Card>
        ))}
      </section>

      <Footer />
    </>
  );
}

export default Collection;
