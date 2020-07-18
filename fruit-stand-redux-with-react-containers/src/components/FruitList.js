import React from 'react';

const FruitList = ({ fruit }) => {
  return (
    <div>
      {fruit.length > 0
        ? <ul>{fruit.map((f, idx) => <li key={idx}>{f}</li>)}</ul>
        : <span>No fruit currently in stock!</span>
      }
    </div>
  );
};

export default FruitList;
