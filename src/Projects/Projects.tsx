import NavBar from "../Home/NavBar/NavBar";
import ProjectCard from "./ProjectCard/ProjectCard";
import PROJECTS from "./ProjectList";

const Projects = () => {

    return (
        <div className="flex flex-col gap-10 m-5">
            <NavBar/>
            <p className="text-xl font-bold">Projects</p>
            <div className="grid grid-cols-1 gap-5">
                { PROJECTS.map((project) => (
                    <ProjectCard project={project}/>
                ))}
            </div>
        </div>
    );
}

export default Projects;