import '../tailwind.css';
import { Helmet } from 'react-helmet';

function c_Merchandising() {
    return (
        <div className="space-y-12 p-6 bg-gray-300">
            {/* Establece el título de la pestaña */}
            <Helmet>
                <title>CB AlYussana | Merchandising</title>
            </Helmet>

            {/* Sección 1: Título */}
            <header className="bg-green-600 text-white text-center p-6 rounded-lg">
                <h1 className="text-3xl font-bold uppercase">Merchandising</h1>
            </header>

            {/* Sección 2: Párrafo centrado */}
            <section className="flex items-center justify-center">
                <p className="text-xl text-green-800 text-center">
                    En este espacio ponemos a disposición de nuestros deportistas y amigos algunos elementos de merchandising.<br />

                    Si deseas algún elemento, sólo tienes que cumplimentar el formulario y nosotros contactaremos contigo a la mayor brevedad posible.
                </p>
            </section>

            {/* Sección 3: Catálogo */}
            <section className="bg-green-600 rounded-lg">
                <p className='p-6 font-bold text-2xl text-white'>Nuestro Catálogo:</p>
                <div className="flex flex-col md:flex-row">
                    {/* Imagen */}
                    <div className="w-full md:w-1/2 p-4 flex items-center">
                        <img src='/merchandising/catalogo1.jpg' alt="catalogo1" className="w-full h-auto rounded-lg" />
                    </div>
                    {/* Imagen */}
                    <div className="w-full md:w-1/2 p-4 flex items-center">
                        <img src='/merchandising/catalogo2.jpg' alt="catalogo2" className="w-full h-auto rounded-lg" />
                    </div>
                </div>
            </section>

            <section className="custom-section bg-cover" style={{ backgroundImage: `url(/fondo1.png)` }}>
                <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfq1AnQt8P4WN0bLr-iGIeIct4NRA1wkoj5O_B7g0Bq0w8rJw/viewform?embedded=true" width="1000" height="800">Cargando…</iframe>
            </section>

        </div>
    )
}

export default c_Merchandising;