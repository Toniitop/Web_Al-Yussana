import './tailwind.css'
import Navbar from '../components/Navbar';
import Cuerpo from '../components/Cuerpos/c_Temporada';
import Footer from '../components/Footer';

function Temporada () {
    return (
        <>
            <Navbar />
            <Cuerpo />
            <Footer /> 
        </>
    );
}

export default Temporada;
