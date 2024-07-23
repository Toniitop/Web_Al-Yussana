import { useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className="bg-neutral-800 border-gray-200">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src="logo.png" className="h-10" alt="Logo_Equipo" />
                    {/* <span className="self-center text-2xl font-semibold whitespace-nowrap">CB Al-Yussana</span> */}
                </a>
                <button data-collapse-toggle="navbar-dropdown" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-green-400 rounded-lg md:hidden hover:bg-green-900 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-dropdown" aria-expanded={isMobileMenuOpen} onClick={toggleMobileMenu}>
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>
                <div className={`w-full md:block md:w-auto ${isMobileMenuOpen ? '' : 'hidden'}`} id="navbar-dropdown">
                    <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-green-400 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-neutral-800">
                        <li className='relative group'>
                            <Link to="/" className="block py-2 px-3 text-white bg-green-800 rounded md:bg-transparent md:text-white ease-in duration-200 md:hover:text-green-400 md:p-0" aria-current="page">
                                Inicio
                                <div className="absolute bottom-[-16px] left-1/2 transform -translate-x-1/2 bg-green-400 h-0.5 w-full opacity-0 transition-opacity ease-in duration-200 group-hover:opacity-100"></div>
                            </Link>
                        </li>
                        <li className="relative">
                            <button id="dropdownNavbarLink" className="flex items-center justify-between w-full py-2 px-3 text-white rounded hover:bg-green-700 md:hover:bg-transparent md:border-0 md:hover:text-green-400 md:p-0 md:w-auto" onClick={toggleDropdown}>
                                Club
                                <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                                </svg>
                            </button>
                            {/* <!-- Dropdown menu --> */}
                            <div id="dropdownNavbar" className={`z-10 ${isDropdownOpen ? '' : 'hidden'} md:absolute mt-2 bg-green-500 divide-y divide-gray-100 rounded-lg shadow w-44`}>
                                <ul className="py-2 text-sm text-gray-700" aria-labelledby="dropdownLargeButton">
                                    <li>
                                        <a href="#" className="text-white block px-4 py-2 hover:bg-green-400">Desafio 3vs3</a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-white block px-4 py-2 hover:bg-green-400">Cuerpo Técnico</a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-white block px-4 py-2 hover:bg-green-400">Merchandising</a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className='relative group'>
                            <Link to="/" className="text-white block py-2 px-3 rounded hover:bg-green-700 md:hover:bg-transparent md:border-0 md:hover:text-green-400 md:p-0">
                                Temp. 23/24
                                <div className="absolute bottom-[-16px] left-1/2 transform -translate-x-1/2 bg-green-400 h-0.5 w-full opacity-0 transition-opacity ease-in duration-200 group-hover:opacity-100"></div>
                            </Link>
                        </li>
                        <li className='relative group'>
                            <Link to="/" className="text-white block py-2 px-3 rounded hover:bg-green-700 md:hover:bg-transparent md:border-0 md:hover:text-green-400 md:p-0">
                                Contacto
                                <div className="absolute bottom-[-16px] left-1/2 transform -translate-x-1/2 bg-green-400 h-0.5 w-full opacity-0 transition-opacity ease-in duration-200 group-hover:opacity-100"></div>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Header;
