import { Link } from "react-router-dom";
import errorImage from '../../public/404.png'; // Asegúrate de reemplazar con la ruta correcta a tu imagen

function Error404() {
    return (
        <>
            <main className="grid min-h-full h-screen place-items-center bg-green-600 px-6 py-24 sm:py-32 lg:px-8">
                <div className="text-center">
                    <img src={errorImage} alt="Error 404" className="mx-auto mb-6 w-64 h-auto" />
                    <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-800 sm:text-5xl">¡Oops! Página No Encontrada</h1>
                    <p className="mt-6 text-base leading-7 text-white">
                        Parece que la página que buscas se ha escondido en un rincón oscuro del ciberespacio. 
                        ¡No te preocupes, no estás solo! Usa el botón de abajo para regresar a la seguridad del hogar.
                    </p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <Link
                            to={"/"}
                            className="rounded-md bg-green-800 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-300 hover:text-gray-800 transition ease-in-out
                            duration 0.3">
                            Regresar al Inicio
                        </Link>
                    </div>
                </div>
            </main>
        </>
    );
}

export default Error404;