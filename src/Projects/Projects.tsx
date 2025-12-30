import NavBar from "../Home/NavBar/NavBar";
import ProjectCard from "./ProjectCard/ProjectCard";
import PROJECTS from "./ProjectList";

const Projects = () => {

    return (
        <div className="flex flex-col gap-10 my-5 mx-[10rem]">
            <NavBar/>
            <p className="text-xl font-bold">Projects</p>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-5">
                { PROJECTS.map((project) => (
                    <ProjectCard project={project}/>
                ))}
            </div>
        </div>
    );
}

export default Projects;