import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Pizzaria Itabirana. Todos os direitos reservados.
        </p>
        <div className="mt-4">
          <nav className="flex justify-center space-x-4" aria-label="Footer navigation">
            <a href="/termos-de-servico" className="text-gray-400 hover:text-white" aria-label="Termos de Serviço">Termos de Serviço</a>
            <a href="/politica-de-privacidade" className="text-gray-400 hover:text-white" aria-label="Política de Privacidade">Política de Privacidade</a>
            <a href="/contato" className="text-gray-400 hover:text-white" aria-label="Contato">Contato</a>
          </nav>
        </div>
        <div className="mt-4">
          <p className="text-xs text-gray-400">Rua da Pizzaria, 123 - Bairro das Pizzas, Cidade da Pizza - CEP: 12345-678</p>
          <p className="text-xs text-gray-400">Telefone: (31) 1234-5678 | Email: contato@pizzariaitabirana.com.br</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

