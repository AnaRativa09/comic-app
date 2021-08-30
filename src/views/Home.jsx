import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Import components
import Footer from '../components/Footer';
import Header from '../components/Header';
import Button from '../components/Button';
import ComicCard from '../components/ComicCard';
import Loader from '../components/Loader';

function Home() {
  const [dataComic, setDataComic] = useState(null); // Data actual comic
  const [numLatestComic, setNumLatestComic] = useState(null);
  const [numComic, setNumComic] = useState(null);

  // API Call Functions
  const fetchComic = (number) => {
    setDataComic(null);
    axios.get(`/${number}/info.0.json`)
      .then((res) => setDataComic(res.data))
      .catch((error) => console.log(error));
  };

  const fetchLatestComic = () => {
    setDataComic(null);
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

      <section className="buttons-section">
        <Button
          text="First"
          click={() => { setNumComic(1); }}
          isDisabled={dataComic.num === 1}
        />
        <Button
          text="Prev"
          click={() => { setNumComic(dataComic.num - 1); }}
          isDisabled={dataComic.num <= 1}
        />
        <Button
          text="Random"
          click={() => { setNumComic(getRandomNumber(1, numLatestComic)); }}
        />
        <Button
          text="Next"
          click={() => { setNumComic(dataComic.num + 1); }}
          isDisabled={dataComic.num >= numLatestComic}
        />
        <Button
          text="Last"
          click={() => { setNumComic(null); }}
          isDisabled={dataComic.num === numLatestComic}
        />
      </section>

      <ComicCard data={dataComic} />

      <Footer />
    </>
  );
}

export default Home;
