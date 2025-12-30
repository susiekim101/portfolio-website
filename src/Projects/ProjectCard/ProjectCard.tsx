import type { Project } from '../ProjectList';
// import { Image } from 'lucide-react';
import { ArrowUpRight } from 'lucide-react';
import dummy from '../../assets/dummy.webp';

const ProjectCard = ({project}: {project: Project}) => {
    const badge = "bg-gray-200 rounded-3xl px-3 py-1 text-xs font-medium text-gray-700";

    return (
        <a className="flex flex-col md:flex-row group border border-gray-200 bg-gray-50 rounded-xl overflow-hidden cursor-pointer hover:shadow-md hover:scale-101 transition-all duration-300 md:h-64"
            href={project.repo}
            target="_blank">
            <figure className="w-full md:w-2/5 h-48 md:h-full shrink-0 overflow-hidden">
                <img src={dummy} className="w-full h-full object-cover transition-transform duration-500"/>
            </figure>

            <div className="flex flex-1 flex-col justify-between p-5 min-w-0">
                <div className="flex flex-col gap-2">
                    <div className="flex flex-row justify-between items-start">
                        <p className="text-xl font-bold">{project.title}</p>
                        <ArrowUpRight className="shrink-0 transition-transform duration-300 ease-in-out transform translate-y-0 translate-x-0 group-hover:-translate-y-1 group-hover:translate-x-1"/>
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
        </a>
    );
}

export default ProjectCard;