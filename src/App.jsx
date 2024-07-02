import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css";
import Menu from "./components/Menu";
import Home from "./components/Home";
import Pedidos from "./components/Pedidos";
import Sobre from "./components/Sobre";
import RealizarPedido from "./components/RealizarPedidos";
import Footer from './components/footer';

export default function App() {
  // Inicialização do AOS para scroll suave
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 700,
      easing: "ease-in",
      delay: 100,
    });
  }, []);

  return (
    <Router>
      <div className="overflow-x-hidden">
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pedidos" element={<Pedidos />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/realizar-pedido" element={<RealizarPedido />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
