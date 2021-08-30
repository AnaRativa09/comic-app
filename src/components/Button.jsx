import React from 'react';

function Button({ text, click }) {
  return (
    <button type="button" onClick={click}>
      {text}
    </button>
  );
}

export default Button;
