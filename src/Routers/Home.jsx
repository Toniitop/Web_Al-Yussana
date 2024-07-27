import './tailwind.css'
import Navbar from '../components/Navbar';
import Cuerpo from '../components/Cuerpos/Cuerpo';
import Footer from '../components/Footer';

function Home () {
    return (
        <>
            <Navbar />
            <Cuerpo />
            <Footer /> 
        </>
    );
}

export default Home;
