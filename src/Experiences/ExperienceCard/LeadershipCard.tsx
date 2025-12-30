import type { Leadership } from "../LeadershipList";

const LeadershipCard = ({leadership}: {leadership: Leadership}) => {

    return (
        <div className="ml-4 mb-5">
            <div className="flex flex-row justify-between">
                <p className="font-bold text-lg">{leadership.organization}</p>
                <p className="">{leadership.dates}</p>
            </div>
            <div>
                <p className="italic text-gray-500">{leadership.title}</p>
            </div>

            <div>
                <p className="mt-2">{leadership.description}</p>
            </div>
        </div>
    );
}

export default LeadershipCard;