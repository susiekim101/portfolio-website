// import DesktopNavBar from "./NavBar/DesktopNavBar";
import About from "./About/About";
import Contact from "./Contact/Contact";
// import MobileNavBar from "./NavBar/MobileNavBar";
const Home = () => {
// //  my-5 mx-[3rem] lg:mx-[10rem]
    return (
        <div className="flex flex-col gap-10"> 
            <About/>
            <Contact/>
            {/* <div className="md:hidden sticky bottom-5 flex justify-center">
                <MobileNavBar/>
            </div> */}
        </div>
    );
}

export default Home;