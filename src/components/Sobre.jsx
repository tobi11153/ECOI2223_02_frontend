import React from 'react';
import { Helmet } from 'react-helmet';
import EsbocoFigma from '../assets/website/figma.png'; // Substitua pelo caminho correto da sua imagem

export default function Sobre() {
  return (
    <main className="bg-white py-8">
      <Helmet>
        <title>Pizzaria Itabirana | Sobre o Projeto</title>
        <meta 
          name="description" 
          content="Saiba mais sobre o projeto de desenvolvimento web da Pizzaria Itabirana, incluindo a motivação e o processo de criação." 
        />
      </Helmet>
      <div className="container mx-auto px-4">
        <section className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-4">Sobre o Projeto</h1>
          <p className="text-lg text-gray-700">
            Este site é um projeto acadêmico desenvolvido para a disciplina de desenvolvimento web. O objetivo é criar um site genérico para e-commerce, explorando diferentes tecnologias e melhores práticas de desenvolvimento.
          </p>
        </section>
        <section className="text-center mb-8">
          <h2 className="text-2xl font-bold mb-4">Motivação e Processo de Criação</h2>
          <p className="text-lg text-gray-700 mb-4">
            A motivação para este projeto foi a necessidade de aplicar os conhecimentos adquiridos ao longo do curso em um projeto prático e realista. O site foi concebido com o intuito de oferecer uma plataforma intuitiva e eficiente para compras online, utilizando as melhores práticas de desenvolvimento web.
          </p>
          <img 
            src={EsbocoFigma} 
            alt="Esboço do site feito no Figma" 
            className="mx-auto rounded shadow-md"
          />
        </section>
      </div>
    </main>
  );
}
