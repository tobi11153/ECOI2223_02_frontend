import React, { useState } from 'react';
import axios from 'axios';

const PedidoForm = () => {
  const [cliente, setCliente] = useState('');
  const [endereco, setEndereco] = useState('');
  const [tipoPizza, setTipoPizza] = useState('');
  const [descricao, setDescricao] = useState('');
  const [valor, setValor] = useState('');
  const [tempoEntrega, setTempoEntrega] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/pedidos', {
        cliente,
        endereco,
        tipo_pizza: tipoPizza,
        descricao,
        valor,
        tempo_entrega: tempoEntrega
      });
      console.log('Pedido enviado com sucesso:', response.data);
      // Lógica adicional após enviar o pedido (ex: limpar formulário, exibir mensagem)
    } catch (error) {
      console.error('Erro ao enviar pedido:', error);
      // Tratamento de erro (ex: exibir mensagem de erro)
    }
  };

  return (
    <div className="container mx-auto">
      <h2 className="text-2xl font-bold my-4">Realizar Pedido</h2>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="cliente">
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
          <label className="block text-sm font-bold mb-2" htmlFor="endereco">
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
          <label className="block text-sm font-bold mb-2" htmlFor="tipoPizza">
            Tipo de Pizza:
          </label>
          <input
            type="text"
            id="tipoPizza"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Tipo de pizza desejada"
            value={tipoPizza}
            onChange={(e) => setTipoPizza(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="descricao">
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
          <label className="block text-sm font-bold mb-2" htmlFor="valor">
            Valor:
          </label>
          <input
            type="number"
            id="valor"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Valor do pedido"
            value={valor}
            onChange={(e) => setValor(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="tempoEntrega">
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
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Enviar Pedido
        </button>
      </form>
    </div>
  );
};

export default PedidoForm;
