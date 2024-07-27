import '../tailwind.css';
import { Helmet } from 'react-helmet';

function c_CuerpoTecnico() {
    return (
        <div className="space-y-12 p-6 bg-gray-300">
            {/* Establece el título de la pestaña */}
            <Helmet>
                <title>CB AlYussana | Cuerpo Técnico</title>
            </Helmet>

            {/* Sección 1: Título */}
            <header className="bg-green-600 text-white text-center p-6 rounded-lg">
                <h1 className="text-3xl font-bold uppercase">Cuerpo Técnico</h1>
            </header>

            {/* Sección 2: Párrafo centrado */}
            <section className="flex items-center justify-center">
                <p className="text-xl text-green-800 text-center">
                    El mayor valor que posee el Club Baloncesto Al-Yussana es, sin duda, el humano.
                    Tenemos el privilegio de contar con un cuerpo técnico de inestimables cualidades docentes y deportivas avaladas por titulaciones oficiales y extensa experiencia.
                </p>
            </section>

            {/* Sección3: Párrafo Entrenadores */}
            <section className="bg-green-600 rounded-lg">
                <div className="flex flex-col md:flex-row">
                    {/* Texto */}
                    <div className="w-full md:w-1/2 py-2 px-6">
                        <p className="text-xl text-white mb-4 mt-4 text-justify">

                            Comenzaremos las presentaciones por los entrenadores de los más pequeños, los dinosaurios y los cocodrilos del equipo, el grupo de jugadoras/es de categoría babybasket y preminibasket. 
                            Se harán cargo del grupo como entrenadora principal, Azahara García, y como asistente, David Burguillos.<br/><br/>

                            La entrenadora principal es, Azahara García.<br/> Azahara es una docente de la institución que lleva elmismo 
                            nombre que el club, procedente de Córdoba, dónde ha desarrollado su extensa trayectoria baloncestística. 
                            Ha sido entrenadora en escuelas deportivas de la capital (Tirso de Molina, Obispo Osio), jugadora (Virgen 
                            del Carmen, Adeba y UCO) e incluso árbitra a todos los niveles (provincial, andaluza, nacional, EBA y segunda división femenina).<br/><br/>
                            Es una persona de destacada experiencia tanto en baloncesto como enseñanza y muy querida por muchas familias lucentinas por su papel docente.

                        </p>
                    </div>
                    {/* Imagen */}
                    <div className="w-full md:w-1/2 p-4 flex items-center">
                        <img src='/fondo1.png' alt="Entrenadores" className="w-full h-auto rounded-lg" />
                    </div>
                </div>
            </section>
            <section className="bg-green-800 rounded-lg">
                <div className="flex flex-col md:flex-row">
                    {/* Imagen */}
                    <div className="w-full md:w-1/2 p-4 flex items-center">
                        <img src='/fondo1.png' alt="Entrenadores" className="w-full h-auto rounded-lg" />
                    </div>
                    {/* Texto */}
                    <div className="w-full md:w-1/2 py-2 px-6">
                        <p className="text-xl text-white mb-4 mt-4 text-justify">

                            Comenzaremos las presentaciones por los entrenadores de los más pequeños, los dinosaurios y los cocodrilos del equipo, el grupo de jugadoras/es de categoría babybasket y preminibasket. 
                            Se harán cargo del grupo como entrenadora principal, Azahara García, y como asistente, David Burguillos.<br/><br/>

                            La entrenadora principal es, Azahara García.<br/> Azahara es una docente de la institución que lleva elmismo 
                            nombre que el club, procedente de Córdoba, dónde ha desarrollado su extensa trayectoria baloncestística. 
                            Ha sido entrenadora en escuelas deportivas de la capital (Tirso de Molina, Obispo Osio), jugadora (Virgen 
                            del Carmen, Adeba y UCO) e incluso árbitra a todos los niveles (provincial, andaluza, nacional, EBA y segunda división femenina).<br/><br/>
                            Es una persona de destacada experiencia tanto en baloncesto como enseñanza y muy querida por muchas familias lucentinas por su papel docente.

                        </p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default c_CuerpoTecnico;