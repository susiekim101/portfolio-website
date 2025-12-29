import { NavLink } from "react-router-dom";
const NavBar = () => {
    const selected = 'bg-gray-300 px-4 py-1 rounded-2xl';
    const notselected = 'px-4 py-1'

    return (
        <div className="w-full flex flex-row justify-center items-center text-md">
            <div className="basis-1/3 items-center">susiekim.dev</div>

            <div className="basis-1/3 flex flex-row justify-between items-center bg-gray-100 rounded-3xl px-1 py-1">
                <NavLink to="/" className={({ isActive }) => isActive ? selected : notselected}>About</NavLink>
                <NavLink to="/projects" className={({ isActive }) => isActive ? selected : notselected}>Projects</NavLink>
                <NavLink to="/experiences"className={({ isActive }) => isActive ? selected : notselected}>Experience</NavLink>
                <NavLink to="/blog" className={({ isActive }) => isActive ? selected : notselected}>Blog</NavLink>
            </div>

            <div className="basis-1/3"/>
        </div>
    );
}

export default NavBar;