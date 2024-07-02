//Gabriel Souza Santos

import React from 'react';
import { Helmet } from 'react-helmet';
import EsbocoFigma from '../assets/website/figma.png'; // Substitua pelo caminho correto da sua imagem

// Componente de seção reutilizável para a explicação
const Section = ({ title, children }) => (
  <section className="text-center mb-8">
    <h2 className="text-2xl font-bold mb-4">{title}</h2>
    <div className="text-lg text-gray-700">{children}</div>
  </section>
);

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
        {/* Seção de Explicação do Projeto */}
        <Section title="Sobre o Projeto">
          <p>
            Este site é um projeto acadêmico desenvolvido para a disciplina de desenvolvimento web. 
            O objetivo é criar um site genérico para e-commerce, explorando diferentes tecnologias e melhores práticas de desenvolvimento.
          </p>
        </Section>
        {/* Seção de Explicação do Banco de Dados */}
        <Section title="Banco de Dados Projetado">
          <p>
            O banco de dados utilizado neste projeto é o PostgreSQL. Ele foi escolhido por sua robustez e facilidade de integração com o Node.js. 
            A tabela principal é a tabela <code>pedidos</code>, que armazena informações sobre os pedidos de pizza, como cliente, endereço, tipo de pizza, descrição, valor, tempo de entrega e status.
          </p>
        </Section>
        {/* Seção de Explicação da API REST */}
        <Section title="API REST e Endpoints">
          <p>
            A API REST foi desenvolvida utilizando o framework Express para Node.js. Ela possui os seguintes endpoints:
          </p>
          <ul className="list-disc list-inside text-left">
            <li><code>GET /api/pedidos</code>: Retorna todos os pedidos.</li>
            <li><code>POST /api/pedidos</code>: Cria um novo pedido.</li>
            <li><code>PUT /api/pedidos/:id</code>: Atualiza um pedido existente.</li>
            <li><code>DELETE /api/pedidos/:id</code>: Deleta um pedido.</li>
          </ul>
          <img 
            src={EsbocoFigma} 
            alt="Esboço do site feito no Figma" 
            className="mx-auto rounded shadow-md"
          />
        </Section>
      </div>
    </main>
  );
}
