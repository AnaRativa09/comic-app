import axios from 'axios';

// API Call Functions
export const fetchComic = (number, setStateData, setStateRank) => {
  setStateData(null);
  setStateRank(false);

  axios.get(`/${number}/info.0.json`)
    .then((res) => setStateData(res.data))
    .catch((error) => { console.log(error); });
};

export const fetchLatestComic = (setStateData, setStateRank, setLatestNum) => {
  setStateData(null);
  setStateRank(false);

  axios.get('/info.0.json') // Current comic in API
    .then((res) => {
      setStateData(res.data);
      setLatestNum(res.data.num);
    })
    .catch((error) => { console.log(error); });
};

// Get Random Number
export const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min) + min);

// Add data to sessionStorage
export const addLocalData = (rankedComics) => { sessionStorage.setItem('comics', JSON.stringify(rankedComics)); };

/* ----- Get Unique Comics ----- */
export const getUniqueComic = (arrComics) => {
  const comicsMap = arrComics.map((item) => [item.dataComic.num, item]);
  // console.log(comicsMap);
  const comicsMapArr = new Map(comicsMap); // Pares de clave y valor
  // console.log(comicsMapArr);
  const unicos = [...comicsMapArr.values()]; // Conversión a un array

  return unicos;
};

/* ----- Get Value of Rank Collection ----- */
// const getValueRank = (numComic, dataComic, numLatestComic) => {
//   console.log('Numero', numComic);
//   console.log('Data', dataComic);
//   if (dataComic === null || dataComic.length === 0 || numComic === null) {
//     const value = dataComic.filter((comic) => comic.dataComic.num === numLatestComic);
//     return value;
//   }

//   const value = dataComicA.filter((comic) => comic.dataComic.num === numComicA);
//   return value;
// };

// console.log('el valor que si existe', getValueRank(numComic, rankedComics, numLatestComic));
