import Logo from '../imgs/verbumlog.png';
import Navbar from '../Componentes/navbarhome';

function Home() {
    return (
    <div> <Navbar></Navbar>
        <div className="container h-screen bg-[#101015] flex items-center">
            <div className="flex flex-col md:flex-row m-8">
                <h1 className="text-left ml-28 mt-16 text-9xl text-white md:w-1/2">
                    Verbum
                </h1>
                <h2 className="text-left ml-28 mt-16 text-white md:w-1/2"></h2>
                <img src={Logo} alt="img-logo" className=" md:w-5/12"/>
            </div>
        </div>
        </div>
    );
}
            
export default Home;
