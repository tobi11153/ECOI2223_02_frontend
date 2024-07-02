import React from 'react';
import Logo from "../assets/website/logo.jpg";
import { FaPizzaSlice } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Menus = [
  {
    id: 1,
    name: "HOME",
    link: "/",
  },
  {
    id: 2,
    name: "Pedidos",
    link: "/pedidos",
  },
  {
    id: 3,
    name: "Sobre",
    link: "/sobre",
  },
];

export default function Menu() {
  return (
    <header className='bg-gradient-to-r from-primary to-secondary/90 text-white'>
      <div className='container py-2'>
        <div className='flex justify-between items-center gap-4'>
          {/* Logo */}
          <div className='flex'>
            <Link to="/" className='font-bold text-2xl sm:text-3xl flex justify-center items-center gap-2 tracking-wider font-cursive'>
              <img src={Logo} alt="Logo da Pizzaria Itabirana" className='w-14' />
              Pizzaria Itabirana
            </Link>
          </div>

          {/* Links */}
          <nav className='flex justify-between items-center gap-4'>
            <ul className='hidden sm:flex items-center gap-4'>
              {Menus.map((data) => (
                <li key={data.id}>
                  <Link to={data.link} className='inline-block text-xl py-4 px-4 text-white/70 hover:text-white duration-200'>
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
