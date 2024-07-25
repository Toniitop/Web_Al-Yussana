import './tailwind.css';
import { Helmet } from 'react-helmet';

function c_Temporada() {
    return (
        <div className="space-y-12 p-6 bg-gray-200">
            {/* Establece el título de la pestaña */}
            <Helmet>
                <title>CB AlYussana | Temporada</title>
            </Helmet>
            
            {/* Sección 1: Título */}
            <header className="bg-green-600 text-white text-center p-6 rounded-lg">
                <h1 className="text-3xl font-bold">Horarios e Inscripciones - Temp. 23/24</h1>
            </header>

            {/* Sección 2: Párrafo centrado */}
            <section className="flex items-center justify-center min-h-[200px] px-20">
                <p className="text-xl text-green-800 text-center">
                    ¿Te gusta el baloncesto?<br />
                    ¿Quieres entrenar con nosotros y formar parte del Club Baloncesto Al-Yussana?<br />
                    ¡Pues, no lo pienses más!<br />
                    Aquí tienes el <a href="https://docs.google.com/forms/d/e/1FAIpQLSeHQUqi7TaKLBUoMxoHXdoGWn39oNO8lW_qRkpVuSdEL0iHTA/viewform" className="bg-green-800 text-white rounded-lg px-2 hover:bg-green-300 hover:text-green-800">formulario de inscripción</a><br /><br />
                    ¡Queremos que estés en nuestro equipo!<br />
                    Aprende divirtiéndote con auténticos profesionales de la enseñanza.<br /><br />
                    ¡Tráete a tu mejor amigo y diviértete!<br /><br />
                    Más información:<br />
                    <a href="tel:613069369" className="inline-flex items-center mt-4 px-6 py-2 bg-green-800 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-opacity-50">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16" className="mr-3">
                            <path fill="#ffffff" d="M4 1h1l1.5 5L5 7c0 2 2 4 4 4l1-1.5l5 1.5v1a3 3 0 0 1-3 3C5 15 1 10 1 4a3 3 0 0 1 3-3" />
                        </svg>
                        613069369
                    </a>
                </p>
            </section>

            {/* Sección 3: Dividida por un <hr> */}
            <section className="bg-green-600 rounded-lg">
                <div className="flex flex-col md:flex-row items-center">
                    {/* Lista */}
                    <div className="w-full md:w-1/2 px-4 md:px-40">
                        <p className="underline uppercase text-xl text-white mb-4 font-bold mt-4">Grupos y edades:</p>
                        <ul className="list-disc pl-5 space-y-2 text-xl text-white list-none">
                            <li>Babybasket (2016-2017)</li>
                            <li>Premini (2014-2015)</li>
                            <li>Minibasket (2012-2013)</li>
                            <li>Infantil (2010-2011)</li>
                            <li>Cadete (2008-2009)</li>
                        </ul>
                    </div>
                    {/* Imagen */}
                    <div className="w-full md:w-1/2 p-4">
                        <img src='/inscripciones.png' alt="Descripción de la imagen" className="w-full h-auto rounded-lg" />
                    </div>
                </div>
            </section>

            {/* Sección 4: Botón */}
            <section className="flex items-center justify-center text-center">
                <a href='https://docs.google.com/forms/d/e/1FAIpQLSeHQUqi7TaKLBUoMxoHXdoGWn39oNO8lW_qRkpVuSdEL0iHTA/viewform' className="relative flex items-center px-6 py-3 overflow-hidden font-medium transition-all bg-green-800 rounded-md group">
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
                        Formulario Inscripción
                    </span>
                </a>
            </section>

            {/* Sección 5: Sección adicional para rellenar */}
            <section className="bg-green-600 p-4 rounded-lg text-white">
                <p>Horarios Temporada 2023/2024</p>
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-4">
                    <table className="min-w-full text-sm text-left rtl:text-right text-gray-500">
                        <thead className="text-xs text-white uppercase bg-gray-800">
                            <tr>
                                <th scope="col" className="px-16 py-3">
                                    <span className="sr-only">Grupo</span>
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Grupo
                                </th>
                                <th scope="col" className="px-6 py-3 text-center">
                                    Dia 1
                                </th>
                                <th scope="col" className="px-6 py-3 text-center">
                                    Dia 2
                                </th>
                                <th scope="col" className="px-6 py-3 text-center">
                                    Dia 3
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="bg-gray-200 border-b">
                                <td className="p-4">
                                    <img src="/Dinosaurs.png" className="w-16 md:w-32 max-w-full max-h-full" alt="Dinosaurs" />
                                </td>
                                <td className="px-6 py-4 font-semibold text-gray-900 uppercase">
                                    Baby
                                </td>
                                <td className="px-6 py-4 font-semibold text-gray-900 uppercase">
                                    Lunes<br />17:45 / 19:00 (<span className="text-red-500">Ciudad Deportiva</span>)
                                </td>
                                <td className="px-6 py-4 font-semibold text-gray-900 uppercase">
                                    Miércoles<br />16:30 / 18:00 (<span className="text-red-500">Colegio Al-Yussana</span>)
                                </td>
                                <td className="px-6 py-4 font-semibold text-gray-900 uppercase">
                                    Viernes<br />18:00 / 19:30 (<span className="text-red-500">Ciudad Deportiva</span>)
                                </td>
                            </tr>

                            <tr className="bg-gray-300 border-b">
                                <td className="p-4">
                                    <img src="/Crocs.png" className="w-16 md:w-32 max-w-full max-h-full" alt="Crocs" />
                                </td>
                                <td className="px-6 py-4 font-semibold text-gray-900 uppercase">
                                    Premini
                                </td>
                                <td className="px-6 py-4 font-semibold text-gray-900 uppercase">
                                    Lunes<br />17:45 / 19:00 (<span className="text-red-500">Ciudad Deportiva</span>)
                                </td>
                                <td className="px-6 py-4 font-semibold text-gray-900 uppercase">
                                    Miércoles<br />16:30 / 18:00 (<span className="text-red-500">Colegio Al-Yussana</span>)
                                </td>
                                <td className="px-6 py-4 font-semibold text-gray-900 uppercase">
                                    Viernes<br />18:00 / 19:30 (<span className="text-red-500">Ciudad Deportiva</span>)
                                </td>
                            </tr>

                            <tr className="bg-gray-200 border-b">
                                <td className="p-4">
                                    <img src="/Eagles.png" className="w-16 md:w-32 max-w-full max-h-full" alt="Eagles" />
                                </td>
                                <td className="px-6 py-4 font-semibold text-gray-900 uppercase">
                                    Mini Femenino
                                </td>
                                <td className="px-6 py-4 font-semibold text-gray-900 uppercase">
                                    Martes<br />16:30 / 18:00 (<span className="text-red-500">Colegio Al-Yussana</span>)
                                </td>
                                <td className="px-6 py-4 font-semibold text-gray-900 uppercase">
                                    Miércoles<br />16:30 / 18:00 (<span className="text-red-500">Pabellón</span>)
                                </td>
                                <td className="px-6 py-4 font-semibold text-gray-900 uppercase">
                                    Viernes<br />16:30 / 18:00 (<span className="text-red-500">Colegio Al-Yussana</span>)
                                </td>
                            </tr>

                            <tr className="bg-gray-300 border-b">
                                <td className="p-4">
                                    <img src="/Eagles.png" className="w-16 md:w-32 max-w-full max-h-full" alt="Eagles" />
                                </td>
                                <td className="px-6 py-4 font-semibold text-gray-900 uppercase">
                                    Mini Masculino
                                </td>
                                <td className="px-6 py-4 font-semibold text-gray-900 uppercase">
                                    Lunes<br />16:30 / 17:45 (<span className="text-red-500">Ciudad Deportiva</span>)
                                </td>
                                <td className="px-6 py-4 font-semibold text-gray-900 uppercase">
                                    Miércoles<br />18:00 / 19:30 (<span className="text-red-500">Pabellón</span>)
                                </td>
                                <td className="px-6 py-4 font-semibold text-gray-900 uppercase">
                                    Viernes<br />18:00 / 19:30 (<span className="text-red-500">Ciudad Deportiva</span>)
                                </td>
                            </tr>

                            <tr className="bg-gray-200 border-b">
                                <td className="p-4">
                                    <img src="/Wolves.png" className="w-16 md:w-32 max-w-full max-h-full" alt="Wolves" />
                                </td>
                                <td className="px-6 py-4 font-semibold text-gray-900 uppercase">
                                    Infantil Femenino
                                </td>
                                <td className="px-6 py-4 font-semibold text-gray-900 uppercase">
                                    Lunes<br />16:30 / 17:45 (<span className="text-red-500">Ciudad Deportiva</span>)
                                </td>
                                <td className="px-6 py-4 font-semibold text-gray-900 uppercase">
                                    Martes<br />18:00 / 19:30 (<span className="text-red-500">Ciudad Deportiva</span>)
                                </td>
                                <td className="px-6 py-4 font-semibold text-gray-900 uppercase">
                                    Viernes<br />16:30 / 18:00 (<span className="text-red-500">Ciudad Deportiva</span>)
                                </td>
                            </tr>

                            <tr className="bg-gray-300 border-b">
                                <td className="p-4">
                                    <img src="/Wolves.png" className="w-16 md:w-32 max-w-full max-h-full" alt="Wolves" />
                                </td>
                                <td className="px-6 py-4 font-semibold text-gray-900 uppercase">
                                    Infantil Masculino
                                </td>
                                <td className="px-6 py-4 font-semibold text-gray-900 uppercase">
                                    Lunes<br />17:45 / 19:00 (<span className="text-red-500">Ciudad Deportiva</span>)
                                </td>
                                <td className="px-6 py-4 font-semibold text-gray-900 uppercase">
                                    Miércoles<br />18:00 / 19:30 (<span className="text-red-500">Pabellón</span>)
                                </td>
                                <td className="px-6 py-4 font-semibold text-gray-900 uppercase">
                                    Viernes<br />16:30 / 17:45 (<span className="text-red-500">IES Marqués de Comares</span>)
                                </td>
                            </tr>

                            <tr className="bg-gray-200 border-b">
                                <td className="p-4">
                                    <img src="/Bears.png" className="w-16 md:w-32 max-w-full max-h-full" alt="Bears" />
                                </td>
                                <td className="px-6 py-4 font-semibold text-gray-900 uppercase">
                                    Cadete Femenino
                                </td>
                                <td className="px-6 py-4 font-semibold text-gray-900 uppercase">
                                    Lunes<br />16:30 / 17:45 (<span className="text-red-500">Ciudad Deportiva</span>)
                                </td>
                                <td className="px-6 py-4 font-semibold text-gray-900 uppercase">
                                    Martes<br />18:00 / 19:30 (<span className="text-red-500">Ciudad Deportiva</span>)
                                </td>
                                <td className="px-6 py-4 font-semibold text-gray-900 uppercase">
                                    Viernes<br />16:30 / 18:00 (<span className="text-red-500">Ciudad Deportiva</span>)
                                </td>
                            </tr>

                            <tr className="bg-gray-300 border-b">
                                <td className="p-4">
                                    <img src="/Bears.png" className="w-16 md:w-32 max-w-full max-h-full" alt="Bears" />
                                </td>
                                <td className="px-6 py-4 font-semibold text-gray-900 uppercase">
                                    Cadete Masculino <span className="text-red-500">preferente</span>
                                </td>
                                <td className="px-6 py-4 font-semibold text-gray-900 uppercase">
                                    Lunes<br />19:00 / 20:30 (<span className="text-red-500">Ciudad Deportiva</span>)
                                </td>
                                <td className="px-6 py-4 font-semibold text-gray-900 uppercase">
                                    Miércoles<br />18:00 / 19:30 (<span className="text-red-500">Pabellón</span>)
                                </td>
                                <td className="px-6 py-4 font-semibold text-gray-900 uppercase">
                                    Viernes<br />19:00 / 20:00 (<span className="text-red-500">Ciudad Deportiva</span>)
                                </td>
                            </tr>

                            <tr className="bg-gray-200 border-b">
                                <td className="p-4">
                                    <img src="/Bears.png" className="w-16 md:w-32 max-w-full max-h-full" alt="Bears" />
                                </td>
                                <td className="px-6 py-4 font-semibold text-gray-900 uppercase">
                                    Cadete Masculino <span className="text-red-500">especial</span>
                                </td>
                                <td className="px-6 py-4 font-semibold text-gray-900 uppercase">
                                    Lunes<br />19:00 / 20:30 (<span className="text-red-500">Ciudad Deportiva</span>)
                                </td>
                                <td className="px-6 py-4 font-semibold text-gray-900 uppercase">
                                    Miércoles<br />19:30 / 21:00 (<span className="text-red-500">Pabellón</span>)
                                </td>
                                <td className="px-6 py-4 font-semibold text-gray-900 uppercase">
                                    Viernes<br />18:00 / 19:00 (<span className="text-red-500">Ciudad Deportiva</span>)
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>



            {/* Sección 6: Texto adicional */}
            <section className="p-4 bg-gray-300 rounded-lg">
                <p className="text-green-800 px-8">
                    <span className="font-bold underline">Cuota y formas de pago</span><br /><br />

                    (La temporada empezará en septiembre y finalizará en mayo, salvo que el SDM nos permita disponer de instalaciones en el mes de junio).<br />
                    La inscripción para la temporada 2023/2024 es de <span className="font-bold">153€</span>, (con 25% de descuento para el segundo miembro
                    de la unidad familiar y un 30% de descuento para el tercero y posteriores),  que se podrá pagar mediante:<br /><br />
                    <ul className="list-disc px-4">
                        <li>Pago único de <span className="font-bold">153€</span> en Septiembre (<span className="uppercase underline">preferible</span>).</li>
                        <li>Pago fraccionado de <span className="font-bold">51€</span> en Septiembre, <span className="font-bold">51€</span> en Diciembre y <span className="font-bold">51€</span> en Marzo.</li>
                        <li>Pago fraccionado de <span className="font-bold">17€</span> en los meses de Septiembre a Mayo.</li>
                        <li>La <span className="underline">pretemporada <span className="uppercase font-bold">no</span> se cobrará</span> a aquellos niños que no continúen, considerándose periodo de prueba.</li>
                    </ul>
                    <br />
                    Las <span className="font-bold">formas de pago</span> podrán ser a través de:
                    <ul className="list-disc px-4">
                        <li>Transferencia bancaria</li>
                        <li>Domiciliación bancaria</li>
                    </ul>
                </p>
            </section>
        </div>
    );
}

export default c_Temporada;