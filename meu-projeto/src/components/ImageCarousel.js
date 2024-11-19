// src/components/ImageCarousel.js
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './ImageCarousel.css'; // Importando o CSS para estilização

import image1 from '../imagens/1.jpg';
import image2 from '../imagens/2.jpg';
import image3 from '../imagens/3.jpg';

const ImageCarousel = () => {
  return (
    <Carousel showThumbs={false} autoPlay infiniteLoop>
      <div>
        <img src={image1} alt="Imagem 1" />
        <p className="legend">Legenda 1</p>
      </div>
      <div>
        <img src={image2} alt="Imagem 2" />
        <p className="legend">Legenda 2</p>
      </div>
      <div>
        <img src={image3} alt="Imagem 3" />
        <p className="legend">Legenda 3</p>
      </div>
    </Carousel>
  );
};

export default ImageCarousel;