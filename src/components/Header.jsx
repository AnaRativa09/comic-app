import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { addLocalData } from '../controllers/ComicFunctions';

function Header({ rankedComics }) {
  const history = useHistory();

  return (
    <header className="flex-row">
      <Button
        variant="btn-outline-primary"
        onClick={() => {
          history.push('/');
        }}
      >
        <h1>Comic App</h1>
      </Button>

      <div className="bottons-nav-container">
        <Button
          variant="btn-outline-primary"
          onClick={() => {
            history.push('/');
          }}
        >
          Random Comics
        </Button>

        <Button
          variant="btn-outline-primary"
          onClick={() => {
            addLocalData(rankedComics);
            history.push('/collection');
          }}
        >
          My Ranked Collection
        </Button>
      </div>
    </header>
  );
}

export default Header;
