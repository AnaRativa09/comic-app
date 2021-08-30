import React from 'react';

function Button({ text, click, isDisabled }) {
  return (
    <button type="button" onClick={click} disabled={isDisabled}>
      {text}
    </button>
  );
}

export default Button;
