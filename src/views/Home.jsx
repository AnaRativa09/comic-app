import React, { useState, useEffect } from 'react';
import { Card, Button, ButtonGroup } from 'react-bootstrap';
import {
  fetchComic, fetchLatestComic, getRandomNumber, getValueRank,
} from '../controllers/ComicFunctions';

// Import components
import Header from '../components/Header';
import Footer from '../components/Footer';
import Loader from '../components/Loader';
import StarRating from '../components/StarRating';

function Home() {
  // localData
  const localData = JSON.parse(sessionStorage.getItem('comics'));
  const dataRanked = localData === null ? [] : localData;

  // States
  const [dataComic, setDataComic] = useState(null); // Data actual comic
  const [numLatestComic, setNumLatestComic] = useState(null);
  const [numComic, setNumComic] = useState(null); // New comic number
  const [isRanked, setIsRanked] = useState(null); // Comic was ranked?
  const [rankedComics, setRankedComics] = useState(dataRanked); // Comic ranked historial
  const [calification, setCalification] = useState(null);

  // console.log('validated', rankedComics);

  // console.log('el valor que si existe', getValueRank(numComic, rankedComics, numLatestComic));
  const valueRanked = getValueRank(numComic, rankedComics, numLatestComic);

  /* ----- Getting Data ----- */
  useEffect(() => {
    if (numComic === null) {
      fetchLatestComic(setDataComic, setIsRanked, setNumLatestComic);
    }
    fetchComic(numComic, setDataComic, setIsRanked);
  }, [numComic]);

  /* ----- Component Return ----- */
  if (!dataComic) {
    return <Loader />;
  }

  return (
    <>
      <Header rankedComics={rankedComics} />

      <h2>Rank Random Comics</h2>

      <Card className="text-center card-container">
        <Card.Header>
          <div className="flex-row">
            {`#${dataComic.num}`}
            <StarRating
              valueRanked={valueRanked[0]}
              setIsRanked={setIsRanked}
              setCalification={setCalification}
              calification={calification}
            />
          </div>
        </Card.Header>

        <Card.Body>
          <Card.Title>{dataComic.title}</Card.Title>
          <Card.Img src={dataComic.img} className="comic-img" alt={dataComic.title} />
        </Card.Body>

        <Card.Footer className="card-footer">
          <ButtonGroup aria-label="Rank buttons" size="lg">
            <Button
              variant="primary"
              disabled={!isRanked}
              onClick={() => {
                setRankedComics([...rankedComics, { dataComic, calification }]);
                setCalification(null);
                setNumComic(dataComic.num - 1);
              }}
            >
              Prev
            </Button>

            <Button
              variant="primary"
              disabled={!isRanked || dataComic.num === 1}
              onClick={() => {
                setRankedComics([...rankedComics, { dataComic, calification }]);
                setCalification(null);
                setNumComic(getRandomNumber(1, numLatestComic));
              }}
            >
              Random
            </Button>

            <Button
              variant="primary"
              disabled={!isRanked || dataComic.num === numLatestComic}
              onClick={() => {
                setRankedComics([...rankedComics, { dataComic, calification }]);
                setCalification(null);
                setNumComic(dataComic.num + 1);
              }}
            >
              Next
            </Button>

          </ButtonGroup>
        </Card.Footer>
      </Card>

      <Footer />
    </>
  );
}

export default Home;
