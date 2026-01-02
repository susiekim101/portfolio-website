import type { Project } from '../ProjectList';
// import { Image } from 'lucide-react';
import { Link } from 'lucide-react';
// import dummy from '../../assets/dummy.webp';
import ReactPlayer from 'react-player';
import GitHub from '../../assets/github-mark.svg'


const ProjectCard = ({project}: {project: Project}) => {
    const badge = "bg-gray-100 rounded-3xl px-3 py-1 text-xs text-gray-700";

    return (
        <div className="group flex items-center flex-col md:flex-col border border-gray-200 bg-gray-50 rounded-xl overflow-hidden hover:shadow-md hover:border-amber-100 hover:bg-amber-50/50 hover:scale-101 transition-all duration-300 md:h-115">
            <div className="w-full h-48 shrink-0 overflow-hidden">
                {project.media?.type == "image" && project.media.src &&
                    <figure className="w-full h-full relative">
                        <img src={project.media?.thumbnail} className="w-full h-full object-cover"/>
                        <img src={project.media?.src} className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-transform duration-500"/>
                    </figure> 
                }

                {project.media?.type == "image" && !project.media.src &&
                    <figure className="w-full h-full relative">
                        <img src={project.media?.thumbnail} className="w-full h-full object-cover"/>
                    </figure> 
                }

                {project.media?.type == "video" && 
                <div className="w-full h-full relative">
                    <img src={project.media?.thumbnail} className="w-full h-full object-cover"/>

                    <ReactPlayer 
                        className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-transform duration-500 mx-auto"
                        src={project.media.src} 
                        playing={true} 
                        loop={true} 
                        muted={true} 
                        width="100%"
                        height="100%"
                    />
                </div>}
            </div>

            <div className="flex flex-1 flex-col justify-between p-5 min-w-0">
                <div className="flex flex-col gap-2">
                    <div className="flex flex-row justify-between items-start">
                        <p className="text-xl font-bold">{project.title}</p>
                        <div className="flex gap-2">
                            { project.link && (
                            <a href={project.link} target="_blank">
                                <Link className="cursor-pointer w-5 h-5 shrink-0 transition-transform duration-300 ease-in-out transform translate-y-0 translate-x-0 hover:-translate-y-1 hover:translate-x-1"/>
                            </a>)}
              
                            <a href={project.repo} target="_blank">
                                <img src={GitHub} className="cursor-pointer w-5 h-5 shrink-0 transition-transform duration-300 ease-in-out transform translate-y-0 translate-x-0 hover:-translate-y-1 hover:translate-x-1"/>
                            </a>
                        </div>
                    </div>
                    <p className="text-sm text-gray-500 italic">{project.date}</p>
                    <p className="text-sm text-gray-600 line-clamp-3 md:line-clamp-4">{project.description}</p>
                </div>

                <div className="flex flex-wrap gap-2 mt-4">
                    {project.skills.map((skill) => (
                        <p className={badge}>{skill}</p>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;