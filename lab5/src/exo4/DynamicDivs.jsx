import React, { useState } from 'react';

const DynamicDivs = () => {
  const [divStyle, setDivStyle] = useState({
    height: '100px',
    width: '100px',
    backgroundColor: '#3498db',
  });

  const [newDivStyle, setNewDivStyle] = useState({
    height: '100px', // Set default height
    width: '100px', // Set default width
    backgroundColor: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewDivStyle((prevStyle) => ({
      ...prevStyle,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setDivStyle(newDivStyle);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Height:
          <input
            type="text"
            name="height"
            value={newDivStyle.height}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Width:
          <input
            type="text"
            name="width"
            value={newDivStyle.width}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Background Color:
          <input
            type="text"
            name="backgroundColor"
            value={newDivStyle.backgroundColor}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <button type="submit">Add Div</button>
      </form>

      <div style={divStyle}></div>
    </div>
  );
};

export default DynamicDivs;
