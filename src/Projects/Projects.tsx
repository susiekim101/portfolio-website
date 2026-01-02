import ProjectCard from "./ProjectCard/ProjectCard";
import PROJECTS from "./ProjectList";
const Projects = () => {
// my-5 mx-[3rem] lg:mx-[10rem]
    return (
        <div className="flex flex-col gap-10 ">
            {/* <DesktopNavBar/> */}
            <p className="text-xl font-bold">Projects</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                { PROJECTS.map((project) => (
                    <ProjectCard project={project}/>
                ))}
            </div>

            {/* <div className="md:hidden sticky bottom-5 flex justify-center">
                <MobileNavBar/>
            </div> */}
        </div>
    );
}

export default Projects;