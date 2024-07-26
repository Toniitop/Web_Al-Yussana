import './tailwind.css'
import Navbar from '../components/Navbar';
import Cuerpo from '../components/c_CuerpoTecnico';
import Footer from '../components/Footer';

function CTo () {
    return (
        <>
            <Navbar />
            <Cuerpo />
            <Footer /> 
        </>
    );
}

export default CTo;