import React, { useState } from 'react';

const NotClickedComponent = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked((prevClicked) => !prevClicked);
  };

  return (
    <div>
      <button onClick={handleClick}>Click Me</button>
      <p>{clicked ? 'Clicked' : 'Not Clicked'}</p>
    </div>
  );
};

export default NotClickedComponent;
