import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Home() {
  const [dataComic, setDataComic] = useState(null);

  useEffect(() => {
    axios.get('/info.0.json')
      .then((res) => setDataComic(res.data))
      .catch((error) => console.log(error));
  }, []);

  console.log(dataComic);

  const fetchComic = (number) => {
    setDataComic(null);

    axios.get(`/${number}/info.0.json`)
      .then((res) => setDataComic(res.data))
      .catch((error) => console.log(error));
  };

  if (!dataComic) {
    return <h1>Cargando</h1>;
  }

  return (
    <>
      <h1>Comic App</h1>

      <div>
        <h3>{dataComic.title}</h3>
        <p>
          Comic #
          {dataComic.num}
        </p>
        <img src={dataComic.img} alt={dataComic.title} />
      </div>

      <button type="button" onClick={() => { fetchComic(dataComic.num - 1); }}>Anterior</button>

    </>
  );
}

export default Home;
