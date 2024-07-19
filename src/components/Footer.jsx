import { useState, useRef } from 'react'; // Import useRef aquí
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Zoom } from 'react-toastify';
import emailjs from 'emailjs-com';

function Footer() {
    const [email, setEmail] = useState(''); // para controlar el valor del campo de entrada
    const [isValidEmail, setIsValidEmail] = useState(true); // Estado para verificar la validez del correo


    const form = useRef();

    const validateEmail = (email) => {
        const re = /\S+@\S+\.\S+/; // Expresión regular para verificar un formato básico de correo electrónico
        return re.test(email);
    };

    const sendEmail = (e) => {
        e.preventDefault();

        if (!validateEmail(email)) {
            toast.warning('Por favor, introduce un correo electrónico válido.', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Zoom,
            });
            return;
        }

        emailjs.sendForm('service_08hecib', 'template_vnu0spe', form.current, '1875QEbF-kKiCrFhz') // Cambiado para enviar la llave correctamente
            .then(
                () => {
                    console.log('SUCCESS!');
                    setEmail('');//limpio el campo del correo
                    toast.success('Correo enviado exitosamente 💚🏀🖤', {
                        position: "top-right",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                        transition: Zoom,
                    });
                },
                (error) => {
                    console.log('FAILED...', error.text);
                    toast.error('Error al enviar el correo', {
                        position: "top-right",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                        transition: Zoom,
                    });
                },
            );
    };

    const handleEmailChange = (e) => {
        const newEmail = e.target.value;
        setEmail(newEmail);
        setIsValidEmail(validateEmail(newEmail));
    };

    return (
        <footer>
            <div className="bg-neutral-800">
                <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
                    <div className="grid row-gap-10 mb-8 lg:grid-cols-6">
                        <div className="grid grid-cols-2 gap-5 row-gap-8 lg:col-span-4 md:grid-cols-4">
                            <div>
                                <img src="logo.png" alt="Logo_Equipo" className="w-32 h-32" />
                            </div>
                            <div className='ml-2'>
                                <p className="font-medium tracking-wide font-semibold text-white transition-colors duration-300 hover:text-green-400">Ideas</p>
                                <ul className="mt-2 space-y-2">
                                    <li>
                                        <a
                                            href="/"
                                            className="text-gray-500 transition-colors duration-300 hover:text-green-400"
                                        >
                                            Web
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="/"
                                            className="text-gray-500 transition-colors duration-300 hover:text-green-400"
                                        >
                                            Media
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="/"
                                            className="text-gray-500 transition-colors duration-300 hover:text-green-400"
                                        >
                                            Portfolio
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <p className="font-medium tracking-wide font-semibold text-white transition-colors duration-300 hover:text-green-400">
                                    Nuestra Empresa
                                </p>
                                <ul className="mt-2 space-y-2">
                                    <li>
                                        <a
                                            href="/"
                                            className="text-gray-500 transition-colors duration-300 hover:text-green-400"
                                        >
                                            Trabaja con Nosotros..
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="https://github.com/Toniitop"
                                            className="text-gray-500 transition-colors duration-300 hover:text-green-400"
                                        >
                                            Contacto
                                        </a>
                                    </li>
                                    <li className="mb-4 sm:mb-0"> {/* Añadido margen en pantallas pequeñas */}
                                        <a
                                            href="/"
                                            className="text-gray-500 transition-colors duration-300 hover:text-green-400"
                                        >
                                            Proyectos
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="md:max-w-md lg:col-span-2">
                            <span className="text-base font-medium tracking-wide font-semibold text-white transition-colors duration-300 hover:text-green-400">
                                Newsletter:
                            </span>
                            <form className="flex flex-col mt-4 md:flex-row" ref={form} onSubmit={sendEmail} >
                                <input
                                    placeholder="Email"
                                    value={email}
                                    onChange={handleEmailChange}
                                    required
                                    type="email"
                                    name='user_email'
                                    className={`flex-grow w-full h-12 px-4 mb-3 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none md:mr-2 md:mb-0 focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline hover:border-green-400 ${!isValidEmail ? 'border-red-500' : ''
                                        }`}
                                />
                                <button
                                    type="submit"
                                    disabled={!isValidEmail} // Deshabilita el botón si el correo no es válido
                                    className="overflow-hidden relative w-32 p-2 h-12 bg-green-900 text-white border-none rounded-md text-m font-bold cursor-pointer relative z-10 group"
                                >
                                    Suscribirse
                                    <span
                                        className="absolute w-36 h-32 -top-8 -left-2 bg-white rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-left"
                                    ></span>
                                    <span
                                        className="absolute w-36 h-32 -top-8 -left-2 bg-green-400 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-left"
                                    ></span>
                                    <span
                                        className="absolute w-36 h-32 -top-8 -left-2 bg-green-600 rotate-12 transform scale-x-0 group-hover:scale-x-50 transition-transform group-hover:duration-1000 duration-500 origin-left"
                                    ></span>
                                    <span
                                        className="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-2.5 left-6 z-10">
                                        Vamos!
                                    </span>
                                </button>
                            </form>
                            <ToastContainer />
                            <p className="mt-4 text-sm text-gray-500">
                                En nuestra newsletter encontrarás información de calidad para
                                poder mantenerte al tanto de la actualidad de nuestro equipo.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col justify-between pt-5 pb-10 border-t border-gray-800 sm:flex-row">
                        <p className="text-sm text-gray-500">
                            © Copyright 2024. CB Al-Yussana. All rights reserved.
                        </p>
                        <div className="flex items-center mt-4 space-x-4 sm:mt-0">
                            <a
                                href="https://www.linkedin.com/in/antonio-jes%C3%BAs-ortiz-rodriguez/" target="_blank" rel="noopener noreferrer"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24">
                                    <path fill="#4ade80" d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z" />
                                </svg>
                            </a>
                            <a
                                href="https://www.instagram.com/cbalyussana/" target="_blank" rel="noopener noreferrer"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24">
                                    <path fill="#4ade80" d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3" />
                                </svg>
                            </a>
                            <a
                                href="https://www.facebook.com/cbalyussana" target="_blank" rel="noopener noreferrer"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24">
                                    <path fill="#4ade80" d="M12 2.04c-5.5 0-10 4.49-10 10.02c0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89c1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 0 0 8.44-9.9c0-5.53-4.5-10.02-10-10.02" />
                                </svg>
                            </a>
                            <a
                                href="https://x.com/cbalyussana" target="_blank" rel="noopener noreferrer"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                                    <path fill="#4ade80" d="m.058 1l9.267 12.39L0 23.462h2.099l8.163-8.82l6.596 8.82H24l-9.788-13.087L22.892 1h-2.1l-7.517 8.122L7.2 1zm3.087 1.546h3.28l14.488 19.37h-3.28L3.145 2.547Z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
