import About from "../About/About";
import Services from "../Services/Services";
import Banner from "../banner/Banner";
import CarProducts from "../carProducts/CarProducts";

const Home = () => {
    return (
        <div>
            <Banner/>
            <About/>
            <Services/>
            <CarProducts/>
        </div>
    );
};

export default Home;