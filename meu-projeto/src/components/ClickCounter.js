// src/components/ClickCounter.js
import React, { useState } from 'react';
import './ClickCounter.css'; // Importando o CSS para estilização

const ClickCounter = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div className="click-counter">
      <button onClick={handleClick}>Clique aqui</button>
      <p>Você clicou {count} vezes</p>
    </div>
  );
};

export default ClickCounter;