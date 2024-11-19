// src/App.js
import React from 'react';
import InfoCard from './components/InfoCard';
import TextInput from './components/TextInput';
import ClickCounter from './components/ClickCounter';
import ImageCarousel from './components/ImageCarousel';
import './App.css'; // Importando o CSS global

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Bem-vindo ao Meu App</h1>
        <ImageCarousel />
        <InfoCard 
          title="Título do Cartão" 
          description="Esta é a descrição do cartão de informação." 
        />
        <InfoCard 
          title="Outro Título" 
          description="Esta é outra descrição do cartão de informação." 
        />
        <TextInput />
        <ClickCounter />
      </header>
    </div>
  );
};

export default App;