import React, { useEffect, useState } from 'react';
import './Pedidos.css';

export default function Pedidos() {
    const [pedidos, setPedidos] = useState([]);

    useEffect(() => {
        async function fetchPedidos() {
            try {
                const response = await fetch("https://ecoi-2223-02-backend.vercel.app/api/pedidos");
                const data = await response.json();
                setPedidos(data);
            } catch (error) {
                console.error("Erro ao buscar pedidos:", error);
            }
        }

        fetchPedidos();
    }, []);

    async function handleDelete(id) {
        try {
            const response = await fetch(`https://ecoi-2223-02-backend.vercel.app/api/pedidos/${id}`, {
                method: 'DELETE',
            });
            if (response.ok) {
                setPedidos(pedidos.filter(pedido => pedido.id !== id));
            } else {
                console.error("Erro ao deletar pedido");
            }
        } catch (error) {
            console.error("Erro ao deletar pedido:", error);
        }
    }

    return (
        <main className="bg-gradient-to-r from-primary/90 to-secondary/90 min-h-screen p-10">
            <title>Pizzaria Itabirana | Pedidos</title>
            <meta name="description" content="Faça seu pedido online na Pizzaria Itabirana e aproveite nossas deliciosas pizzas." />
            <h1 className="text-center text-3xl font-bold mb-8">Pedidos</h1>
            {pedidos.length > 0 ? (
                <ul className="space-y-4">
                    {pedidos.map((pedido) => (
                        <li key={pedido.id} className="bg-white p-6 rounded-lg shadow-md flex justify-between items-center">
                            <div>
                                <p><strong>Cliente:</strong> {pedido.cliente}</p>
                                <p><strong>Endereço:</strong> {pedido.endereco}</p>
                                <p><strong>Tipo de Pizza:</strong> {pedido.tipo_pizza}</p>
                                <p><strong>Descrição:</strong> {pedido.descricao}</p>
                                <p><strong>Valor:</strong> {pedido.valor}</p>
                                <p><strong>Tempo de Entrega:</strong> {pedido.tempo_entrega}</p>
                                <p><strong>Status:</strong> {pedido.status}</p>
                            </div>
                            <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-700" onClick={() => handleDelete(pedido.id)}>Deletar</button>
                        </li>
                    ))}
                </ul>
            ) : (
                <p className="text-center">Carregando pedidos...</p>
            )}
        </main>
    );
}