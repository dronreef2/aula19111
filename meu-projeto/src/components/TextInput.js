// src/components/TextInput.js
import React, { useState } from 'react';
import './TextInput.css'; // Importando o CSS para estilização

const TextInput = () => {
  const [text, setText] = useState('');

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div className="text-input">
      <input 
        type="text" 
        value={text} 
        onChange={handleChange} 
        placeholder="Digite algo..." 
      />
      <p>Texto digitado: {text}</p>
    </div>
  );
};

export default TextInput;