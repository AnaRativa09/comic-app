import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Import components
import Footer from '../components/Footer';
import Header from '../components/Header';
import Button from '../components/Button';
import ComicCard from '../components/ComicCard';
import Loader from '../components/Loader';

function Home() {
  const [dataComic, setDataComic] = useState(null);
  const [numLatestComic, setNumLatestComic] = useState(null);

  // API Call Functions
  const fetchComic = (number) => {
    setDataComic(null);
    axios.get(`/${number}/info.0.json`)
      .then((res) => setDataComic(res.data))
      .catch((error) => console.log(error));
  };

  const fetchLatestComic = () => {
    setDataComic(null);
    axios.get('/info.0.json') // Current comic
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
    fetchLatestComic();
  }, []);

  if (!dataComic) {
    return <Loader />;
  }

  return (
    <>
      <Header />

      <section className="buttons-section">
        <Button
          text="First"
          click={() => { fetchComic(1); }}
          isDisabled={dataComic.num === 1}
        />
        <Button
          text="Prev"
          click={() => { fetchComic(dataComic.num - 1); }}
          isDisabled={dataComic.num <= 1}
        />
        <Button
          text="Random"
          click={() => { fetchComic(getRandomNumber(1, numLatestComic)); }}
        />
        <Button
          text="Next"
          click={() => { fetchComic(dataComic.num + 1); }}
          isDisabled={dataComic.num >= numLatestComic}
        />
        <Button
          text="Last"
          click={() => { fetchLatestComic(); }}
          isDisabled={dataComic.num >= numLatestComic}
        />
      </section>

      <ComicCard data={dataComic} />

      <Footer />
    </>
  );
}

export default Home;
