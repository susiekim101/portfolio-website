import type { Experience } from "../ExperienceList";

const ExperienceCard = ({experience}: {experience: Experience}) => {

    return (
        <div className="ml-4 mb-5">
            <div className="flex flex-row justify-between">
                <p className="font-bold text-lg">{experience.organization}</p>
                <p className="">{experience.dates}</p>
            </div>
            <div>
                <p className="italic text-gray-500">{experience.title}</p>
            </div>

            <div>
                <p className="mt-2">{experience.description}</p>
            </div>
        </div>
    );
}

export default ExperienceCard;