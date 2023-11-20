import React from 'react';

const DisplayTab = ({ tab }) => {
  return (
    <ul>
      {tab.map((value, index) => (
        <li key={index}>{value}</li>
      ))}
    </ul>
  );
};

export default DisplayTab;
