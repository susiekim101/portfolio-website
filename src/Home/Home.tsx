import NavBar from "./NavBar/NavBar";
import About from "./About/About";
import Contact from "./Contact/Contact";
const Home = () => {

    return (
        <div className="flex flex-col gap-10 m-5">
            <NavBar/>
            <About/>
            <Contact/>
        </div>
    );
}

export default Home;