import React, { useState } from 'react';

const DisplayTabV4 = ({ tab }) => {
  const [elements, setElements] = useState(tab);

  const handleElementClick = (index) => {
    const updatedElements = elements.filter((_, i) => i !== index);
    setElements(updatedElements);
  };

  return (
    <ul>
      {elements.map((value, index) => (
        <li key={index} onClick={() => handleElementClick(index)}>
          Element {index + 1} is: {value}
        </li>
      ))}
    </ul>
  );
};

export default DisplayTabV4;
