import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>Olá, eu sou Bianca</h1>
        <h2>Desenvolvedora Front-end</h2>
        <p>Transformando ideias em experiências digitais incríveis</p>
        <div className="hero-buttons">
          <a href="#projetos" className="primary-btn">Ver Projetos</a>
          <a href="#contato" className="secondary-btn">Entrar em Contato</a>
        </div>
      </div>
      <div className="hero-image">
        <div className="hero-background-shape"></div>
      </div>
    </section>
  );
};

export default HeroSection;