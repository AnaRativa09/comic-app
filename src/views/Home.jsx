import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Button } from 'react-bootstrap';

// Import components
import Header from '../components/Header';
import Footer from '../components/Footer';
import Loader from '../components/Loader';
import StarRating from '../components/StarRating';

function Home() {
  const [dataComic, setDataComic] = useState(null); // Data actual comic
  const [numLatestComic, setNumLatestComic] = useState(null);
  const [numComic, setNumComic] = useState(null); // Set de new comic number
  const [validateComic, setValidateComic] = useState(null); // Comic have calification?

  // API Call Functions
  const fetchComic = (number) => {
    setDataComic(null);
    setValidateComic(false);
    axios.get(`/${number}/info.0.json`)
      .then((res) => setDataComic(res.data))
      .catch((error) => console.log(error));
  };

  const fetchLatestComic = () => {
    setDataComic(null);
    setValidateComic(false);
    axios.get('/info.0.json') // Current comic in API
      .then((res) => {
        setDataComic(res.data);
        setNumLatestComic(res.data.num);
      })
      .catch((error) => console.log(error));
  };

  // Get Random Number
  const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min) + min);

  // Getting Data Latest Comic
  useEffect(() => {
    if (numComic === null) {
      fetchLatestComic();
    }
    fetchComic(numComic);
  }, [numComic]);

  /* ----- Component Return ----- */
  if (!dataComic) {
    return <Loader />;
  }

  return (
    <>
      <Header />

      <Card className="text-center card-container">
        <Card.Header>
          <div className="flex-row">
            {`#${dataComic.num}`}
            <StarRating setValidateComic={setValidateComic} />
          </div>
        </Card.Header>

        <Card.Body>
          <Card.Title>{dataComic.title}</Card.Title>
          <Card.Img src={dataComic.img} className="comic-img" alt={dataComic.title} />
        </Card.Body>

        <Card.Footer className="card-footer">
          <Button
            variant="primary"
            disabled={!validateComic}
            onClick={() => { setNumComic(getRandomNumber(1, numLatestComic)); }}
          >
            New Random Comic
          </Button>
        </Card.Footer>
      </Card>

      <Footer />
    </>
  );
}

export default Home;
