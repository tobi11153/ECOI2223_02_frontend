// Gabriel Souza Santos

import React, { useEffect, useState } from 'react';
import './Pedidos.css';

export default function Pedidos() {
    const [pedidos, setPedidos] = useState([]);
    const [editPedido, setEditPedido] = useState(null);
    const [formData, setFormData] = useState({
        cliente: '',
        endereco: '',
        tipo_pizza: '',
        descricao: '',
        valor: '',
        tempo_entrega: '',
        status: ''
    });

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

    function handleEdit(pedido) {
        setEditPedido(pedido.id);
        setFormData({
            cliente: pedido.cliente,
            endereco: pedido.endereco,
            tipo_pizza: pedido.tipo_pizza,
            descricao: pedido.descricao,
            valor: pedido.valor,
            tempo_entrega: pedido.tempo_entrega,
            status: pedido.status
        });
    }

    function handleChange(e) {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    }

    async function handleUpdate(e) {
        e.preventDefault();
        try {
            const response = await fetch(`https://ecoi-2223-02-backend.vercel.app/api/pedidos/${editPedido}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });
            if (response.ok) {
                const updatedPedido = await response.json();
                setPedidos(pedidos.map(pedido => (pedido.id === editPedido ? updatedPedido : pedido)));
                setEditPedido(null);
                setFormData({
                    cliente: '',
                    endereco: '',
                    tipo_pizza: '',
                    descricao: '',
                    valor: '',
                    tempo_entrega: '',
                    status: ''
                });
            } else {
                console.error("Erro ao atualizar pedido");
            }
        } catch (error) {
            console.error("Erro ao atualizar pedido:", error);
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
                            <div className="flex space-x-2">
                                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700" onClick={() => handleEdit(pedido)}>Editar</button>
                                <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-700" onClick={() => handleDelete(pedido.id)}>Deletar</button>
                            </div>
                        </li>
                    ))}
                </ul>
            ) : (
                <p className="text-center">Carregando pedidos...</p>
            )}
            {editPedido && (
                <form className="mt-8 bg-white p-6 rounded-lg shadow-md" onSubmit={handleUpdate}>
                    <h2 className="text-2xl font-bold mb-4">Editar Pedido</h2>
                    <div className="space-y-4">
                        <div>
                            <label className="block text-gray-700">Cliente</label>
                            <input 
                                type="text" 
                                name="cliente" 
                                value={formData.cliente} 
                                onChange={handleChange} 
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700">Endereço</label>
                            <input 
                                type="text" 
                                name="endereco" 
                                value={formData.endereco} 
                                onChange={handleChange} 
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700">Tipo de Pizza</label>
                            <input 
                                type="text" 
                                name="tipo_pizza" 
                                value={formData.tipo_pizza} 
                                onChange={handleChange} 
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700">Descrição</label>
                            <input 
                                type="text" 
                                name="descricao" 
                                value={formData.descricao} 
                                onChange={handleChange} 
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700">Valor</label>
                            <input 
                                type="number" 
                                name="valor" 
                                value={formData.valor} 
                                onChange={handleChange} 
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700">Tempo de Entrega</label>
                            <input 
                                type="text" 
                                name="tempo_entrega" 
                                value={formData.tempo_entrega} 
                                onChange={handleChange} 
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700">Status</label>
                            <input 
                                type="text" 
                                name="status" 
                                value={formData.status} 
                                onChange={handleChange} 
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                            />
                        </div>
                        <div className="flex justify-end space-x-2">
                            <button type="button" onClick={() => setEditPedido(null)} className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-700">Cancelar</button>
                            <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-700">Salvar</button>
                        </div>
                    </div>
                </form>
            )}
        </main>
    );
}
