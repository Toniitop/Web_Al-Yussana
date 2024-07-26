import './tailwind.css';
import { Helmet } from 'react-helmet';

function c_Contacto() {
    return (
        <div className="space-y-12 p-6 bg-gray-300">
            {/* Establece el título de la pestaña */}
            <Helmet>
                <title>CB AlYussana | Contacto</title>
            </Helmet>

            {/* Sección 1: Título */}
            <header className="bg-green-600 text-white text-center p-6 rounded-lg">
                <h1 className="text-3xl font-bold uppercase">Club Baloncesto Al-Yussana</h1>
            </header>

            {/* Sección 2: Información */}
            <section className="bg-green-800 rounded-lg p-6 flex flex-col lg:flex-row items-center">
                <div className="flex-1">
                    <p className="text-2xl font-bold text-white">
                        <span className='underline'>Información</span><br />
                        <ul className="max-w-lg">
                            <li className="pb-3 sm:pb-4">
                                <div className="flex items-center space-x-4 rtl:space-x-reverse">
                                    <div className="flex-shrink-0 mt-8 px-6">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 14 14"><g fill="none" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M11.5 5c0 3-4.5 6.5-4.5 6.5S2.5 8 2.5 5C2.5 2.549 4.549.5 7 .5s4.5 2.049 4.5 4.5" />
                                            <path d="M7 6.5a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m4.077 3.5H12l1.5 3.5H.5L2 10h.923" /></g>
                                        </svg>
                                    </div>
                                    <div className="flex-1 mt-8">
                                        <p className="text-sm text-white">
                                            Av. Luis Alberto Cuenca n.70 bloque 13, ático 2 – Lucena, CÓRDOBA, 14900
                                        </p>
                                    </div>
                                </div>
                            </li>
                            <li className="pb-3 sm:pb-4">
                                <div className="flex items-center space-x-4 rtl:space-x-reverse">
                                    <div className="flex-shrink-0 mt-8 px-6">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 1024 1024">
                                            <path fill="#ffffff" d="M685 641L557 512l338-339q62 70 95.5 156.5T1024 512q-96 0-182.5 34T685 641M383 339q62-70 95.5-156.5T512 0q96 0 182.5 34T851 129L512 467zM174 129Q292 24 448 5q-2 164-110 288zm119 209Q169 446 4 448q20-156 125-274zm174 174L129 851q-61-70-95-156.5T0 512q96 0 182.5-33.5T339 383zm174 173q-62 70-95.5 156.5T512 1024q-96 0-182.5-33.5T173 895l339-338zm209 210q-118 105-274 125q2-164 110-289zm170-319q-20 156-125 274L731 686q124-108 289-110" />
                                        </svg>
                                    </div>
                                    <div className="flex-1 mt-8">
                                        <p className="text-sm text-white">
                                            Rda. P.º Viejo, 2, 14900 Lucena, Córdoba
                                        </p>
                                    </div>
                                </div>
                            </li>
                            <li className="pb-3 sm:pb-4">
                                <div className="flex items-center space-x-4 rtl:space-x-reverse">
                                    <div className="flex-shrink-0 mt-8 px-6">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 1408 1408">
                                            <path fill="#ffffff" d="M1408 1112q0 27-10 70.5t-21 68.5q-21 50-122 106q-94 51-186 51q-27 0-53-3.5t-57.5-12.5t-47-14.5T856 1357t-49-18q-98-35-175-83q-127-79-264-216T152 776q-48-77-83-175q-3-9-18-49t-20.5-55.5t-14.5-47T3.5 392T0 339q0-92 51-186Q107 52 157 31q25-11 68.5-21T296 0q14 0 21 3q18 6 53 76q11 19 30 54t35 63.5t31 53.5q3 4 17.5 25t21.5 35.5t7 28.5q0 20-28.5 50t-62 55t-62 53t-28.5 46q0 9 5 22.5t8.5 20.5t14 24t11.5 19q76 137 174 235t235 174q2 1 19 11.5t24 14t20.5 8.5t22.5 5q18 0 46-28.5t53-62t55-62t50-28.5q14 0 28.5 7t35.5 21.5t25 17.5q25 15 53.5 31t63.5 35t54 30q70 35 76 53q3 7 3 21" />
                                        </svg>
                                    </div>
                                    <a href='tel:+34613069369' className="mt-5 group/a relative inline-flex items-center justify-center overflow-hidden rounded-md bg-green-400/30 backdrop-blur-lg px-6 py-2 text-base font-semibold text-white transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-xl hover:shadow-green-200/50 border border-white/20">
                                        <span className="text-lg">613069369</span>
                                        <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-13deg)_translateX(-100%)] group-hover/button:duration-1000 group-hover/button:[transform:skew(-13deg)_translateX(100%)]">
                                            <div className="relative h-full w-10 bg-white/30"></div>
                                        </div>
                                    </a>
                                </div>
                            </li>
                            <li className="pb-3 sm:pb-4">
                                <div className="flex items-center space-x-4 rtl:space-x-reverse">
                                    <div className="flex-shrink-0 mt-8 px-6">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><g fill="none" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                                            <path d="M3 7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                                            <path d="m3 7l9 6l9-6" /></g>
                                        </svg>
                                    </div>
                                    <a href='mailto:info@alyussana.com' className="mt-5 group/a relative inline-flex items-center justify-center overflow-hidden rounded-md bg-green-400/30 backdrop-blur-lg px-6 py-2 text-base font-semibold text-white transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-xl hover:shadow-green-200/50 border border-white/20">
                                        <span className="text-lg">info@alyussana.com</span>
                                        <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-13deg)_translateX(-100%)] group-hover/button:duration-1000 group-hover/button:[transform:skew(-13deg)_translateX(100%)]">
                                            <div className="relative h-full w-10 bg-white/30"></div>
                                        </div>
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </p>
                </div>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6338.141429382397!2d-4.478835825205701!3d37.411803432987426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd6d7733a346f0b7%3A0xc7df8bca112c71a4!2sPabell%C3%B3n%20Polideportivo%20Municipal%20%22Antonio%20Ruiz-Canela%20Evangelista!5e0!3m2!1ses!2ses!4v1721958555468!5m2!1ses!2ses"
                    width="600"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    title="Google Maps"
                    className="rounded-lg mt-6 lg:mt-0"
                ></iframe>
            </section>

            {/* Nueva Sección: Imagen club */}
            <section className="bg-green-800 rounded-lg p-6 flex justify-center items-center">
                <div className="flex-1 flex items-center justify-center p-6">
                    <img src="/logo.png" alt="Logo" className="max-w-xs rounded-lg shadow-lg" />
                </div>
            </section>
        </div>
    );
}

export default c_Contacto;
