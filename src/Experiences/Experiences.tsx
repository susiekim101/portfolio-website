import EducationCard from "./ExperienceCard/EducationCard";
import ExperienceCard from "./ExperienceCard/ExperienceCard";
import LeadershipCard from "./ExperienceCard/LeadershipCard";
import EXPERIENCES from "./ExperienceList";
import LEADERSHIP from "./LeadershipList";

const Experiences = () => {
    return (
        <div className="flex flex-col gap-10 my-5 mx-[3rem] lg:mx-[10rem]">
            <div>
                <p className="text-xl font-bold mb-3">Education</p>
                <EducationCard/>
            </div>
            
            <div>
                <p className="text-xl font-bold mb-3">Experience</p>
                { EXPERIENCES.map((experience) => (
                    <ExperienceCard experience={experience}/>
                ))}
            </div>

            <div>
                <p className="text-xl font-bold mb-3">Leadership</p>
                   { LEADERSHIP.map((leadership) => (
                    <LeadershipCard leadership={leadership}/>
                ))}
            </div>
        </div>
    );
}

export default Experiences;