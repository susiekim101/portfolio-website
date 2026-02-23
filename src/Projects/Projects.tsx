import ProjectCard from "./ProjectCard/ProjectCard";
import PROJECTS from "./ProjectList";
const Projects = () => {
    return (
        <div className="flex flex-col gap-10 mt-5 md:mt-0">
            <p className="text-xl font-bold">Projects</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                { PROJECTS.map((project) => (
                    <ProjectCard project={project}/>
                ))}
            </div>

        </div>
    );
}

export default Projects;