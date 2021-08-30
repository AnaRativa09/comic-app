import React from 'react';

function Footer() {
  const icon = '♡';

  return (
    <footer>
      <p>
        {`Made with ${icon} by `}
        <a href="https://github.com/AnaRativa09" target="_blank" rel="noreferrer">
          Ana Rátiva
        </a>
      </p>
    </footer>
  );
}

export default Footer;
