import React, { useEffect, useState } from 'react';

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

    return (
        <main>
            <title>Pizzaria Itabirana | Pedidos</title>
            <meta name="description" content="Faça seu pedido online na Pizzaria Itabirana e aproveite nossas deliciosas pizzas." />
            <h1>Pedidos Page</h1>
            {pedidos.length > 0 ? (
                <ul>
                    {pedidos.map((pedido) => (
                        <li key={pedido.id}>
                            <p>Cliente: {pedido.cliente}</p>
                            <p>Endereço: {pedido.endereco}</p>
                            <p>Tipo de Pizza: {pedido.tipo_pizza}</p>
                            <p>Descrição: {pedido.descricao}</p>
                            <p>Valor: {pedido.valor}</p>
                            <p>Tempo de Entrega: {pedido.tempo_entrega}</p>
                            <p>Status: {pedido.status}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>Carregando pedidos...</p>
            )}
        </main>
    );
}
