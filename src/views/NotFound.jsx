import React from 'react';
import { useHistory } from 'react-router-dom';

// Import components
import Button from '../components/Button';

function NotFound() {
  const history = useHistory();

  return (
    <div className="not-found-container">
      <h2>404 Not Found</h2>
      <Button text="Go Home" click={() => { history.push('/'); }} />
    </div>
  );
}

export default NotFound;
