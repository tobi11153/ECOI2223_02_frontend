// Gabriel Souza Santos


import React, { useState } from 'react';
import Logo from "../assets/website/logo.jpg";
import { FaPizzaSlice, FaBars } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Menus = [
  {
    id: 1,
    name: "HOME",
    link: "/",
    description: "Página inicial da Pizzaria Itabirana",
  },
  {
    id: 2,
    name: "Pedidos",
    link: "/pedidos",
    description: "Faça seu pedido online",
  },
  {
    id: 3,
    name: "Sobre",
    link: "/sobre",
    description: "Saiba mais sobre nós",
  },
];

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className='sticky top-0 bg-gradient-to-r from-primary to-secondary/90 text-white'>
      <div className='container py-2'>
        <div className='flex justify-between items-center gap-4'>
          {/* Logo */}
          <div className='flex'>
            <Link to="/" className='font-bold text-2xl sm:text-3xl flex justify-center items-center gap-2 tracking-wider font-cursive'>
              <img src={Logo} alt="Logo da Pizzaria Itabirana" className='w-14' />
              Pizzaria Itabirana
            </Link>
          </div>

          {/* Hamburger Menu for Mobile */}
          <div className='sm:hidden flex items-center'>
            <button onClick={toggleMenu} aria-label="Toggle menu">
              <FaBars className='text-2xl' />
            </button>
          </div>

          {/* Links */}
          <nav className={`${isOpen ? 'block' : 'hidden'} sm:flex sm:items-center gap-4`}>
            <ul className='flex flex-col sm:flex-row items-center gap-4'>
              {Menus.map((data) => (
                <li key={data.id}>
                  <Link 
                    to={data.link} 
                    title={data.description}
                    className='inline-block text-xl py-4 px-4 text-white/70 hover:text-white duration-200'
                  >
                    {data.name}
                  </Link>
                </li>
              ))}
            </ul>
            <Link to="/realizar-pedido">
              <button className='bg-primary/70 px-4 py-2 rounded-full hover:scale-105 duration-200 flex items-center gap-3'>
                Pedir
                <FaPizzaSlice className='text-xl cursor-pointer' />
              </button>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
