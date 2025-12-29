import headshot from '../../assets/Susie_Kim_Headshot.png';

const About = () => {

    return (
        <div className="flex justify-center items-center gap-[3rem] px-10">
            <img src={headshot} alt="Susie Kim headshot" className="w-[25rem] h-[25rem] object-cover rounded-full"></img>
            <div className="flex flex-col gap-5">
                <p className="text-lg font-bold">About Me</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
        </div>
    );
}

export default About;
