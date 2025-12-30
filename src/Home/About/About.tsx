import headshot from '../../assets/Susie_Kim_Headshot.png';

const About = () => {

    return (
        <div className="flex flex-col md:flex-row justify-center items-center gap-[3rem]">
            <div className="flex">
                <img src={headshot} alt="Susie Kim headshot" className="w-full aspect-[1/1] object-cover rounded-full"></img>
            </div>
            <div className="flex flex-col gap-5">
                <p className="text-3xl font-bold">👋 Hi, I'm Susie!</p>
                <p className="">
I'm Susie Kim, a second-year computer science student passionate about motivating change through technology. I love seeing my ideas come to life and watching people interact with the things I build. Learning about new algorithms and designing accessibility-first full-stack applications has become both a hobby and a long-term goal I'm eager to scale to larger audiences.
I'm also excited about exploring the intersection of AI and robotics, and how intelligent systems can simplify daily tasks, enhance human capability, and provide meaningful service in real-world environments. I'm enthusiastic and motivated to contribute to the future of robot learning.</p>
            </div>
        </div>
    );
}

export default About;
