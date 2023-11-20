import React, { useState } from 'react';

const ButtonsClick = () => {
  const [clickedButton, setClickedButton] = useState(null);

  const handleButtonClick = (buttonNumber) => {
    setClickedButton(buttonNumber);
  };

  return (
    <div>
      <button onClick={() => handleButtonClick(1)}>Button1</button>
      <button onClick={() => handleButtonClick(2)}>Button2</button>
      <button onClick={() => handleButtonClick(3)}>Button3</button>

      <p>
        {clickedButton
          ? `Button ${clickedButton} was clicked`
          : 'No button clicked yet'}
      </p>
    </div>
  );
};

export default ButtonsClick;
