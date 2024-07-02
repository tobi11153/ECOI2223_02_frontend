import React, { useState } from 'react';
import axios from 'axios';
import Pizza from "../assets/website/pizza.png";

const pizzas = [
    {
        id: 1,
        img: Pizza,
        name: 'Pizza Margherita',
        description: 'Tomato, mozzarella, and basil',
        sizes: { broto: 20, media: 30, Grande: 40 },
        aosDelays: '50',
    },
    {
        id: 2,
        img: Pizza,
        name: 'Pepperoni Pizza',
        description: 'Pepperoni, mozzarella, and tomato sauce',
        sizes: { broto: 25, Media: 35, Grande: 45 },
        aosDelays: '100',
    },
    {
        id: 3,
        img: Pizza,
        name: 'Vegetarian Pizza',
        description: 'Vegetables, mozzarella, and tomato sauce',
        sizes: { Broto: 22, Media: 32, Grande: 42 },
        aosDelays: '150',
    },
];

function PizzaCard({ img, name, description, aosDelays, onSelect }) {
  return (
      <div className='max-w-xs sm:max-w-sm md:max-w-xs lg:max-w-sm xl:max-w-xs rounded overflow-hidden shadow-lg p-4 bg-white' data-aos='fade-up' data-aos-delay={aosDelays}>
          <img className='w-full h-32 object-cover' src={img} alt={name} />
          <div className='px-2 py-4 text-center'>
              <h3 className='font-bold text-xl mb-2'>{name}</h3>
              <p className='text-gray-700 text-base'>{description}</p>
              <button
                  onClick={onSelect}
                  className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                  Selecionar
              </button>
          </div>
      </div>
  );
}

const PedidoForm = () => {
  const [cliente, setCliente] = useState('');
  const [endereco, setEndereco] = useState('');
  const [descricao, setDescricao] = useState('');
  const [valor, setValor] = useState('');
  const [tempoEntrega, setTempoEntrega] = useState('');
  const [selectedPizza, setSelectedPizza] = useState(null);
  const [selectedSize, setSelectedSize] = useState('');

  const handlePizzaSelect = (pizza) => {
      setSelectedPizza(pizza);
      setSelectedSize('');
      setValor('');
  };

  const handleSizeSelect = (size, price) => {
      setSelectedSize(size);
      setValor(price);
  };

  const handleSubmit = async (event) => {
      event.preventDefault();
      try {
          const response = await axios.post('http://localhost:5000/api/pedidos', {
              cliente,
              endereco,
              tipo_pizza: `${selectedPizza.name} (${selectedSize})`,
              descricao,
              valor,
              tempo_entrega: tempoEntrega
          });
          console.log('Pedido enviado com sucesso:', response.data);
          // Limpar formulário após envio
          setCliente('');
          setEndereco('');
          setDescricao('');
          setValor('');
          setTempoEntrega('');
          setSelectedPizza(null);
          setSelectedSize('');
      } catch (error) {
          console.error('Erro ao enviar pedido:', error);
      }
  };

  return (
      <div className="bg-gradient-to-r from-red-500 to-yellow-500 min-h-screen flex flex-col items-center justify-center py-8">
          <div className="container mx-auto px-4">
              <header className="text-center text-white mb-8">
                  <h1 className="text-4xl font-bold">Realizar Pedido</h1>
              </header>
              <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white p-8 rounded shadow-lg">
                  <div className="mb-4">
                      <label className="block text-sm font-bold mb-2 text-center" htmlFor="cliente">
                          Cliente:
                      </label>
                      <input
                          type="text"
                          id="cliente"
                          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          placeholder="Nome do cliente"
                          value={cliente}
                          onChange={(e) => setCliente(e.target.value)}
                          required
                      />
                  </div>
                  <div className="mb-4">
                      <label className="block text-sm font-bold mb-2 text-center" htmlFor="endereco">
                          Endereço:
                      </label>
                      <input
                          type="text"
                          id="endereco"
                          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          placeholder="Endereço de entrega"
                          value={endereco}
                          onChange={(e) => setEndereco(e.target.value)}
                          required
                      />
                  </div>
                  <div className="mb-4">
                      <label className="block text-sm font-bold mb-2 text-center" htmlFor="tipoPizza">
                          Tipo de Pizza:
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-4">
                          {pizzas.map(pizza => (
                              <PizzaCard
                                  key={pizza.id}
                                  img={pizza.img}
                                  name={pizza.name}
                                  description={pizza.description}
                                  aosDelays={pizza.aosDelays}
                                  onSelect={() => handlePizzaSelect(pizza)}
                              />
                          ))}
                      </div>
                  </div>
                  {selectedPizza && (
                      <div className="mb-4">
                          <label className="block text-sm font-bold mb-2 text-center" htmlFor="tamanhoPizza">
                              Tamanho da Pizza:
                          </label>
                          <div className="flex justify-center gap-4 mb-4">
                              {Object.entries(selectedPizza.sizes).map(([size, price]) => (
                                  <button
                                      type="button"
                                      key={size}
                                      className={`px-4 py-2 rounded border ${selectedSize === size ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-800'}`}
                                      onClick={() => handleSizeSelect(size, price)}
                                  >
                                      {size.charAt(0).toUpperCase() + size.slice(1)} - R$ {price}
                                  </button>
                              ))}
                          </div>
                      </div>
                  )}
                  <div className="mb-4">
                      <label className="block text-sm font-bold mb-2 text-center" htmlFor="descricao">
                          Descrição:
                      </label>
                      <textarea
                          id="descricao"
                          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          placeholder="Descrição adicional (opcional)"
                          value={descricao}
                          onChange={(e) => setDescricao(e.target.value)}
                      />
                  </div>
                  <div className="mb-4">
                      <label className="block text-sm font-bold mb-2 text-center" htmlFor="valor">
                          Valor:
                      </label>
                      <input
                          type="number"
                          id="valor"
                          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          placeholder="Valor do pedido"
                          value={valor}
                          readOnly
                      />
                  </div>
                  <div className="mb-4">
                      <label className="block text-sm font-bold mb-2 text-center" htmlFor="tempoEntrega">
                          Tempo de Entrega (minutos):
                      </label>
                      <input
                          type="number"
                          id="tempoEntrega"
                          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          placeholder="Tempo estimado de entrega"
                          value={tempoEntrega}
                          onChange={(e) => setTempoEntrega(e.target.value)}
                          required
                      />
                  </div>
                  <button
                      type="submit"
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                  >
                      Enviar Pedido
                  </button>
              </form>
          </div>
      </div>
  );
};

export default PedidoForm;