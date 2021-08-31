import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from 'react-bootstrap';

function NotFound() {
  const history = useHistory();

  return (
    <div className="not-found-container">
      <h2>404 Not Found</h2>
      <Button variant="primary" onClick={() => { history.push('/'); }}>
        Go to Home
      </Button>
    </div>
  );
}

export default NotFound;
