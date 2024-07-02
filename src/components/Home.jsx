// Gabriel Souza Santos


import React from 'react';
import Pizza from "../assets/website/pizza.png";
import Slider from 'react-slick';

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
];

const ReviewsData = [
    {
        id: 1,
        reviewer: 'João Silva',
        text: 'A melhor pizza que já comi! Ingredientes frescos e sabor inigualável.',
        rating: 5,
    },
    {
        id: 2,
        reviewer: 'Maria Santos',
        text: 'Ótimo atendimento e a pizza chegou quentinha. Recomendo!',
        rating: 4,
    },
    {
        id: 3,
        reviewer: 'Carlos Oliveira',
        text: 'Sabor autêntico e muito bem feita. Vou pedir de novo com certeza.',
        rating: 5,
    },
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

function ReviewCard({ reviewer, text, rating }) {
    return (
        <div className='max-w-sm rounded overflow-hidden shadow-lg p-4'>
            <div className='px-6 py-4'>
                <div className='font-bold text-xl mb-2'>{reviewer}</div>
                <p className='text-gray-700 text-base'>{text}</p>
                <p className='text-yellow-500'>{"★".repeat(rating)}{"☆".repeat(5 - rating)}</p>
            </div>
        </div>
    );
}

export default function Home() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    return (
        <div>
            <head>
                <meta name="description" content="A melhor pizza da região. Venha experimentar nossos sabores incríveis, feitos com ingredientes frescos e de alta qualidade." />
                <title>A Melhor Pizza da Região - Pizzaria</title>
            </head>
            <div className='min-h-[550px] sm:min-h-[600px] bg-brandDark flex justify-center items-center text-white'>
                <div className='container pb-8 sm:pb-0'>
                    <div className='grid grid-cols-1 sm:grid-cols-2'>
                        <div className='order-1 sm:order-2'>
                            <h1 className='text-5xl sm:text-6xl lg:text-7xl font-bold'>A melhor <span className='text-primary font-cursive'>Pizza</span> da região</h1>
                        </div>
                        <div className='min-h-[450px] flex justify-center items-center order-1 sm:order-2 relative'>
                            <img src={Pizza} alt="Pizza Margherita" className='w-[300px] sm:w-[450px] sm:scale-110 mx-auto spin' />
                            <div className='bg-gradient-to-r from-primary to bg absolute top-5 left-7 p-3 rounded-xl'><h1>The best</h1></div>
                            <div className='bg-gradient-to-r from-secondary to bg-secondary/70 absolute bottom-5 right-7 p-3 rounded-xl'><h1> Pizza</h1></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='container'>
                <div className='text-center mb-20'>
                    <h1 className='text-4xl font-bold font-cursive text-gray-800'> Todos os sabores para você</h1>
                </div>

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

            <div className='py-14 mb-10'>
                <div className='container'>
                    <div className='text-center mb-10'>
                        <h1 className='text-4xl font-bold font-cursive text-gray-800'>
                            Avaliações
                        </h1>
                    </div>

                    <div>
                        <Slider {...settings}>
                            {ReviewsData.map(review => (
                                <ReviewCard
                                    key={review.id}
                                    reviewer={review.reviewer}
                                    text={review.text}
                                    rating={review.rating}
                                />
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    );
}
