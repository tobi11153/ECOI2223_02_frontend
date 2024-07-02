import React from 'react'
import Pizza from "../assets/website/pizza.png"
import { MdDescription } from 'react-icons/md'


const ServicesData = [
    {
        id: 1,
        img: Pizza,
        name: 'Pizza Margherita',
        description: 'Tomato, mozzarella, and basil',
        aosDelays: '100',
    },
    {
        id: 2,
        img: Pizza,
        name: 'Pepperoni Pizza',
        description: 'Pepperoni, mozzarella, and tomato sauce',
        aosDelays: '200',
    },
   
    {
        id: 3,
        img: Pizza,
        name: 'Pepperoni Pizza',
        description: 'Pepperoni, mozzarella, and tomato sauce',
        aosDelays: '200',
    },
    //possivel adicionar mais
];


function PizzaCard({ img, name, description, aosDelays }) {
    return (
        <div className='max-w-sm rounded overflow-hidden shadow-lg p-4' data-aos='fade-up' data-aos-delay={aosDelays}>
            <img className='w-full' src={img} alt={name} />
            <div className='px-6 py-4'>
                <div className='font-bold text-xl mb-2'>{name}</div>
                <p className='text-gray-700 text-base'>{description}</p>
            </div>
        </div>
    );
}



export default function Home() {
    return (
        <div>
            {/**Topo do home */}
            <div className='min-h-[550px] sm:min-h-[600px] bg-brandDark flex justify-center items-center text-white'>
                <div className='container pb-8 sm:pb-0'>
                    <div className='grid grid-cols-1 sm:grid-cols-2'>
                        {/**texto */}
                        <div className='order-1 sm:order-2'>
                            <h1 className='text-5xl sm:text-6xl lg:text-7xl font-bold'>A melhor <span className='text-primary font-cursive'>Pizza</span> da região</h1>
                        </div>

                        {/**imagem */}
                        <div className='min-h-[450px] flex justify-center items-center order-1 sm:order-2 relative'>
                            <img src={Pizza} alt="Pizza de display" className='w-[300px] sm:w-[450px] sm:scale-110 mx-auto spin' />
                            <div className='bg-gradient-to-r from-primary to bg absolute top-5 left-7 p-3 rounded-xl'><h1>The best</h1></div>
                            <div className='bg-gradient-to-r from-secondary to bg-secondary/70 absolute bottom-5 right-7 p-3 rounded-xl'><h1> Pizza</h1></div>
                        </div>
                    </div>
                </div>
            </div>

            {/**Meio home */}
            <div className='container'>
                {/**header titulo */}
                <div className='text-center mb-20'>
                    <h1 className='text-4xl font-bold font-cursive text-gray-800'> Todos os sabores para você</h1>
                </div>

                {/**cartoes */}
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
                    {ServicesData.map(pizza => (
                        <PizzaCard
                            key={pizza.id}
                            img={pizza.img}
                            name={pizza.name}
                            description={pizza.description}
                            aosDelays={pizza.aosDelays}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
