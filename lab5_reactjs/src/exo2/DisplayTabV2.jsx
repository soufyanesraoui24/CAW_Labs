import React from 'react';

const DisplayTabV2 = ({ tab }) => {
  return (
    <ul>
      {tab.map((value, index) => (
        <li key={index}>Element {index + 1} is: {value}</li>
      ))}
    </ul>
  );
};

export default DisplayTabV2;
