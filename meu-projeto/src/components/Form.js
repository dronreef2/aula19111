// src/components/Form.js
import React, { useState } from 'react';
import axios from 'axios';
import './Form.css'; // Importando o CSS para estilização

const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus('Enviando...');

    try {
      const response = await axios.post('https://boatneck-general-magpie.glitch.me/api/form', {
        name,
        email,
        message,
      });
      setStatus('Formulário enviado com sucesso!');
      console.log('Formulário enviado:', response.data);
    } catch (error) {
      if (error.response) {
        // O servidor respondeu com um status diferente de 2xx
        setStatus(`Erro ${error.response.status}: ${error.response.data}`);
        console.error('Erro ao enviar o formulário:', error.response.data);
      } else if (error.request) {
        // A requisição foi feita, mas nenhuma resposta foi recebida
        setStatus('Erro ao enviar o formulário: Nenhuma resposta recebida do servidor.');
        console.error('Erro ao enviar o formulário:', error.request);
      } else {
        // Algo aconteceu ao configurar a requisição que acionou um erro
        setStatus(`Erro ao enviar o formulário: ${error.message}`);
        console.error('Erro ao enviar o formulário:', error.message);
      }
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Nome:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="message">Mensagem:</label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
      </div>
      <button type="submit">Enviar</button>
      {status && <p className="status-message">{status}</p>}
    </form>
  );
};

export default Form;