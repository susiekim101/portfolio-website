const EducationCard = () => {

    return (
        <div className="ml-4">
            <div className="flex flex-row justify-between">
                <p className="font-bold text-lg">University of California, Los Angeles</p>
                <p className="">September 2024 – June 2028</p>
            </div>
            <div>
                <p className="italic text-gray-500">BS in Computer Science</p>
            </div>

            <div className="flex flex-row gap-2 justify-start items-start mt-2">
                <p className="font-bold">Coursework</p>
                <p className="">Computer Organization and Operating Systems, Data Structures and Algorithms, Introduction to
C++, Logic Design of Digital Systems, Software Construction</p>
            </div>
        </div>
    );
}

export default EducationCard;