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
