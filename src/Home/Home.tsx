import NavBar from "./NavBar/NavBar";
import About from "./About/About";
import Contact from "./Contact/Contact";
const Home = () => {

    return (
        <div className="flex flex-col gap-10 my-5 mx-[10rem]">
            <NavBar/>
            <About/>
            <Contact/>
        </div>
    );
}

export default Home;