import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Pizzaria Itabirana. Todos os direitos reservados.
        </p>
        <div className="mt-2">
          <a href="#" className="text-gray-400 hover:text-white mx-2">Termos de Serviço</a>
          <span className="text-gray-400"> | </span>
          <a href="#" className="text-gray-400 hover:text-white mx-2">Política de Privacidade</a>
          <span className="text-gray-400"> | </span>
          <a href="#" className="text-gray-400 hover:text-white mx-2">Contato</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
