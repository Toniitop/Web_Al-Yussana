import '../tailwind.css';
import { Helmet } from 'react-helmet';

function c_Desafio() {
    return (
        <div className="space-y-12 p-6 bg-gray-300">
            {/* Establece el título de la pestaña */}
            <Helmet>
                <title>CB AlYussana | Desafio 3vs3</title>
            </Helmet>

            {/* Sección 1: Título */}
            <header className="bg-green-600 text-white text-center p-6 rounded-lg">
                <h1 className="text-3xl font-bold uppercase">Desafío 3<span className='lowercase'>vs</span>3 Naturdent</h1>
            </header>

            {/* Sección 2: Párrafo centrado
            <section className="flex items-center justify-center">
                <p className="text-2xl text-green-800 text-center">
                    ¿Aceptas el Desafío?
                </p>
            </section> */}

            {/* Sección 3: Imagen centrada */}
            <section className='flex items-center justify-center'>
                <div className="w-full md:w-1/2 p-4">
                    <img src='/desafio/CartelDesafio3s3.png' alt="3vs3 Cartel" className="w-full h-auto rounded-lg" />
                </div>
            </section>

            {/* Sección 4: Botón */}
            <section className="flex items-center justify-center text-center">
                <a href='https://docs.google.com/forms/d/e/1FAIpQLSfQjDwZZ0LoX-TLIsWVstoCPrDKgAvIz-pG-hE4rcmLnGDVSA/closedform' className="relative flex items-center px-6 py-3 overflow-hidden font-medium transition-all bg-green-800 rounded-md group">
                    <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-green-600 rounded group-hover:-mr-4 group-hover:-mt-4">
                        <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-gray-200"></span>
                    </span>
                    <span className="absolute bottom-0 rotate-180 left-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-green-600 rounded group-hover:-ml-4 group-hover:-mb-4">
                        <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-gray-200"></span>
                    </span>
                    <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full bg-green-400 rounded-md group-hover:translate-x-0"></span>
                    <span className="relative flex items-center text-white transition-colors duration-200 ease-in-out group-hover:text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" className="mr-2">
                            <path fill="#ffffff" d="M16 20.975v-3h-3v-2h3v-3h2v3h3v2h-3v3zM3 18v-2h2v2zm4 0v-2h4.075q-.075.525-.062 1t.087 1zm-4-4v-2h2v2zm4 0v-2h6.65q-.575.4-1.037.9T11.8 14zm-4-4V8h2v2zm4 0V8h12v2zM3 6V4h2v2zm4 0V4h12v2z" />
                        </svg>
                        Formulario Inscripción 3vs3
                    </span>
                </a>
            </section>

            {/* Sección 5: Texto adicional */}
            <section className="px-4 py-8 bg-green-600 rounded-lg">
                <p className="text-white px-8">

                    Desde el Club Baloncesto Al-Yussana ponemos en marcha la segunda edición de nuestro <span className='italic'>Desafío 3vs3 Naturdent</span> y queremos contar contigo.<br /><br />

                    Lo celebraremos en el Pabellón Deportivo Municipal <span className='italic'>Antonio Ruiz-Canela Evangelista</span>.<br /><br />

                    Las inscripciones están abiertas <span className='font-bold'>hasta el 7 de junio</span> o hasta alcanzar el tope de equipos inscritos.<br />
                    Habrá dos categorías únicas:
                    <ul className='list-disc px-4'>
                        <li>Sénior y junior</li>
                        <li>Infantil y cadete</li>
                    </ul><br />


                    Tendremos premios en metálico para los primeros, segundos y terceros en la categoría sénior-junior (<span className='font-bold'>400€, 120€ y 60€</span> respectivamente, más <span className='font-bold'>trofeos</span>).<br />
                    Los premios en categoría infantil-cadete consistirán en <span className='font-bold'>material deportivo</span> y <span className='font-bold'>consumiciones</span>, además de los respectivos <span className='font-bold'>trofeos</span>.<br /><br />

                    El  <span className='italic'>Desafío 3vs3 Naturdent</span> está abierto a todos los equipos de jugadores que estén dispuestos a aceptar el Desafío.<br />
                    Además del <span className='italic'>Desafío</span> también podrás participar en nuestro <span className='italic'>Concurso de Triples Cordobeses del Neumático</span> que estará dotado con
                    un premio en metálico de <span className='font-bold'>100€</span> para el primer clasificado y <span className='font-bold'>50€</span> para el segundo clasificado, en categoría única, y sus respectivos <span className='font-bold'>trofeos y consumiciones</span>.<br />
                    La inscripción del <span className='italic'>Concurso de Triples Cordobeses del Neumático</span> es de 3€ y podrá hacerse <span className='italic'>in situ</span> el día 15 de junio.<br /><br />

                    Los más pequeños amantes del aro y el balón jugarán partidos amistosos en categoría Baby, Premini y Mini.<br /><br />

                    Todos los participantes en el <span className='italic'>Desafío</span> serán obsequiados con una camiseta conmemorativa.<br /><br />

                    Contaremos con servicio de barra y música para amenizar la jornada y hacer que nos sintamos cómodos y tengamos un ambiente de convivencia entre todos ¡Disfrutemos!<br /><br />

                    <section className='flex items-center justify-center'>
                        <div className="w-full md:w-1/2 p-4">
                            <img src='/desafio/Desafio3x3Publi.png' alt="3vs3 Publi" className="w-full h-auto rounded-lg" />
                        </div>
                    </section>
                    -<br /><br />

                    <a href='https://drive.google.com/file/d/1BEhsFwwfIQnWsuowBVyEfH19nI7pxPdo/view' target='_blank' className='text-lime-400'>Bases de Competición</a><br />
                    <a href='https://drive.google.com/file/d/13wUEgh0oD364go9Qz0vD_ir6BZnUtYDm/view' target='_blank' className='text-lime-400'>Reglamento Competición</a>
                </p>
            </section>

        </div>
    )
}

export default c_Desafio