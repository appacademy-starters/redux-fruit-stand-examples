import React from 'react';

const FruitSeller = ({ distinctFruit, sell, sellAll }) => {
  if (distinctFruit.length === 0) {
    return null;
  }

  const handleSellClick = (event) => sell(event.target.innerText);

  return (
    <div>
      <h3>Sell</h3>
      {distinctFruit.map((f, idx) => (
        <button key={idx} onClick={handleSellClick}>{f}</button>
      ))}
      <button onClick={sellAll}>SELL OUT</button>
    </div>
  );
};

export default FruitSeller;
