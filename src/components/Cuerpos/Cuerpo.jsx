import { useState, useEffect, useCallback } from "react";
// import { Link } from "react-router-dom";

function Cuerpo() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [
        {
            src: "/inicio/Alvaro.JPG",
            alt: "Álvaro Hernandez",
            description: "Imagen de Álvaro"
        },
        {
            src: "/inicio/ClasificacionNac1.JPG",
            alt: "Clasificación Nacional N1 Masc",
            description: "Clasificación Nacional"
        }
    ];

    const handlePrev = useCallback(() => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    }, [images.length]);

    const handleNext = useCallback(() => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    }, [images.length]);

    useEffect(() => {
        const interval = setInterval(() => {
            handleNext();
        }, 5000); // Cambia de imagen cada 5 segundos
        return () => clearInterval(interval);
    }, [handleNext]);

    return (
        <div className="bg-gray-200">

            {/* Fondo de las imágenes carrusel */}
            <section className="bg-cover bg-center md:h-screen flex items-center justify-center" style={{ backgroundImage: 'url("/fondo1.png")' }}>
                <div id="controls-carousel" className="relative w-full" data-carousel="static">
                    {/* Carousel wrapper */}
                    <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
                        {images.map((image, index) => (
                            <div
                                key={index}
                                className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
                                data-carousel-item={index === currentIndex ? "active" : ""}
                            >
                                <div className="flex justify-center">
                                    <img
                                        src={image.src}
                                        alt={image.alt}
                                        className="block mx-auto max-w-full md:max-w-3xl lg:max-w-4xl transform scale-125"
                                    />
                                </div>
                                <div className="uppercase absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full md:max-w-3xl lg:max-w-4xl bg-gray-800 bg-opacity-50 text-white text-center p-4">
                                    {image.description}
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* Slider controls */}
                    <button
                        type="button"
                        className="absolute top-1/2 left-4 transform -translate-y-1/2 z-30 flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group hover:bg-white/50 focus:outline-none"
                        onClick={handlePrev}
                        data-carousel-prev
                    >
                        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full group-hover:bg-white/10 focus:ring-4 focus:ring-white focus:outline-none">
                            <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
                            </svg>
                            <span className="sr-only">Previous</span>
                        </span>
                    </button>
                    <button
                        type="button"
                        className="absolute top-1/2 right-4 transform -translate-y-1/2 z-30 flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group hover:bg-white/50 focus:outline-none"
                        onClick={handleNext}
                        data-carousel-next
                    >
                        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full group-hover:bg-white/10 focus:ring-4 focus:ring-white focus:outline-none">
                            <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                            </svg>
                            <span className="sr-only">Next</span>
                        </span>
                    </button>
                </div>
            </section>

            <section className="bg-green-800 py-16 px-4 md:px-8 lg:px-16 custom-font hover:bg-green-600 transition ease-in-out duration-300">
                <div className="container mx-auto">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-8 uppercase text-white">Hola, Lucena</h2>
                    <p className="text-lg md:text-xl lg:text-2xl text-white leading-relaxed px-4 md:px-8 lg:px-16">
                        Somos CB Al-Yussana, un club deportivo de baloncesto situado en el sur de Córdoba, en la ciudad de Lucena.
                        Nuestro objetivo es fomentar y promover la práctica de este deporte en nuestra comunidad y su entorno, aunando ilusión, esfuerzo y talento.
                        Nos enfocamos en los procesos de iniciación y perfeccionamiento físico, técnico y táctico, con el objetivo de crear hábitos de vida saludable y
                        mejorar el nivel de cada uno de nuestros deportistas. Aspiramos a competir al más alto nivel, con orgullo, en nombre del baloncesto de Lucena y Córdoba.
                    </p>
                </div>
            </section>

            <section className="bg-gray-200 py-16 px-4 md:px-8 lg:px-16 custom-font">
                <div className="container mx-auto">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-green-800 mb-8 uppercase underline">Últimas Noticias</h2>
                    <div className="flex flex-wrap -mx-2">
                        {/* Card 1 */}
                        <div className="w-full sm:w-1/2 lg:w-1/4 px-2 mb-4">
                            <div className="bg-gray-100 border border-gray-200 rounded-lg shadow h-full flex flex-col">
                                <a href="#">
                                    <img className="rounded-t-lg transition-transform duration-300 transform hover:scale-105" src="/noticias/socios.jpg" alt="" />
                                </a>
                                <div className="p-5 flex-grow flex flex-col justify-between">
                                    <div>
                                        <a href="#">
                                            <h5 className="text-lg md:text-xl lg:text-2xl font-bold tracking-tight text-green-800 mb-4 hover:text-green-600">Asamblea General de Socios</h5>
                                        </a>
                                    </div>
                                    <div className="flex justify-center mt-4">
                                        <a href="#" className="inline-flex items-center px-4 py-2 text-sm md:text-base font-medium text-center text-white bg-green-800 rounded-lg hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-blue-300 transition ease-in-out duration-300">
                                            Leer más
                                            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="w-full sm:w-1/2 lg:w-1/4 px-2 mb-4">
                            <div className="bg-gray-100 border border-gray-200 rounded-lg shadow h-full flex flex-col">
                                <a href="#">
                                    <img className="rounded-t-lg transition-transform duration-300 transform hover:scale-105" src="/noticias/infantil fem.jpg" alt="" />
                                </a>
                                <div className="p-5 flex-grow flex flex-col justify-between">
                                    <div>
                                        <a href="#">
                                            <h5 className="text-lg md:text-xl lg:text-2xl font-bold tracking-tight text-green-800 mb-4 hover:text-green-600">Infantil Femenino VS CD LuceBasket</h5>
                                        </a>
                                    </div>
                                    <div className="flex justify-center mt-4">
                                        <a href="#" className="inline-flex items-center px-4 py-2 text-sm md:text-base font-medium text-center text-white bg-green-800 rounded-lg hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-blue-300 transition ease-in-out duration-300">
                                            Leer más
                                            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="w-full sm:w-1/2 lg:w-1/4 px-2 mb-4">
                            <div className="bg-gray-100 border border-gray-200 rounded-lg shadow h-full flex flex-col">
                                <a href="#">
                                    <img className="rounded-t-lg transition-transform duration-300 transform hover:scale-105" src="/noticias/desafio3x3.jpg" alt="" />
                                </a>
                                <div className="p-5 flex-grow flex flex-col justify-between">
                                    <div>
                                        <a href="#">
                                            <h5 className="text-lg md:text-xl lg:text-2xl font-bold tracking-tight text-green-800 mb-4 hover:text-green-600">Desafio 3vs3 Naturdent</h5>
                                        </a>
                                    </div>
                                    <div className="flex justify-center mt-4">
                                        <a href="#" className="inline-flex items-center px-4 py-2 text-sm md:text-base font-medium text-center text-white bg-green-800 rounded-lg hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-blue-300 transition ease-in-out duration-300">
                                            Leer más
                                            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Card 4 */}
                        <div className="w-full sm:w-1/2 lg:w-1/4 px-2 mb-4">
                            <div className="bg-gray-100 border border-gray-200 rounded-lg shadow h-full flex flex-col">
                                <a href="#">
                                    <img className="rounded-t-lg transition-transform duration-300 transform hover:scale-105" src="/noticias/crocs.jpg" alt="" />
                                </a>
                                <div className="p-5 flex-grow flex flex-col justify-between">
                                    <div>
                                        <a href="#">
                                            <h5 className="text-lg md:text-xl lg:text-2xl font-bold tracking-tight text-green-800 mb-4 hover:text-green-600">Baby Masc VS CD DecorSéneca</h5>
                                        </a>
                                    </div>
                                    <div className="flex justify-center mt-4">
                                        <a href="#" className="inline-flex items-center px-4 py-2 text-sm md:text-base font-medium text-center text-white bg-green-800 rounded-lg hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-blue-300 transition ease-in-out duration-300">
                                            Leer más
                                            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-8 text-center text-green-800 underline">
                    <h5>
                        <a href="#"> Todas las noticias</a>
                    </h5>
                </div>
            </section>

            <section className="bg-green-800 py-16 px-4 md:px-8 lg:px-16 custom-font hover:bg-green-600 transition ease-in-out duration-300">
                <div className="container mx-auto">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-8 uppercase text-white underline">Nuestros Patrocinadores</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="flex justify-center">
                            <a href="https://example.com">
                                <img className="h-auto max-w-full rounded-lg transition-transform duration-300 transform hover:scale-105" src="/patrocinadores/alinatal.jpg" alt="Imagen 1" />
                            </a>
                        </div>
                        <div className="flex justify-center">
                            <a href="https://example.com">
                                <img className="h-auto max-w-full rounded-lg transition-transform duration-300 transform hover:scale-105" src="/patrocinadores/belcris.png" alt="Imagen 2" />
                            </a>
                        </div>
                        <div className="flex justify-center">
                            <a href="https://example.com">
                                <img className="h-auto max-w-full rounded-lg transition-transform duration-300 transform hover:scale-105" src="/patrocinadores/CN.png" alt="Imagen 3" />
                            </a>
                        </div>
                        <div className="flex justify-center">
                            <a href="https://example.com">
                                <img className="h-auto max-w-full rounded-lg transition-transform duration-300 transform hover:scale-105" src="/patrocinadores/dipucordoba.png" alt="Imagen 4" />
                            </a>
                        </div>
                        <div className="flex justify-center">
                            <a href="https://example.com">
                                <img className="h-auto max-w-full rounded-lg transition-transform duration-300 transform hover:scale-105" src="/patrocinadores/DSSmith.png" alt="Imagen 1" />
                            </a>
                        </div>
                        <div className="flex justify-center">
                            <a href="https://example.com">
                                <img className="h-auto max-w-full rounded-lg transition-transform duration-300 transform hover:scale-105" src="/patrocinadores/Mafia.png" alt="Imagen 2" />
                            </a>
                        </div>
                        <div className="flex justify-center">
                            <a href="https://example.com">
                                <img className="h-auto max-w-full rounded-lg transition-transform duration-300 transform hover:scale-105" src="/patrocinadores/Naturdent.jpg" alt="Imagen 3" />
                            </a>
                        </div>
                        <div className="flex justify-center">
                            <a href="https://example.com">
                                <img className="h-auto max-w-full rounded-lg transition-transform duration-300 transform hover:scale-105" src="/patrocinadores/SDM.png" alt="Imagen 4" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}

export default Cuerpo;
