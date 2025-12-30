import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const NavBar = () => {
    const tabs = [
        {name: 'About', path: '/'},
        {name: 'Projects', path: '/projects'},
        {name: 'Experiences', path: '/experiences'},
    ]

    return (
        <div className="w-full flex flex-row justify-center items-center text-md">
            <div className="basis-1/3 items-center">susiekim.dev</div>

            <div>
                {tabs.map((tab) => (
                    <NavLink key={tab.path} to={tab.path} className="relative px-4 py-2 z-10 transition-colors duration-300">
                        {({isActive}) => (
                            <>
                                <span className={isActive ? "text-black" : "text-gray-500"}>{tab.name}</span>
                                {isActive && (
                                    <motion.div
                                    layoutId="active-pill"
                                    className="absolute inset-0 bg-white rounded-3xl -z-10 shadow-sm"
                                    transition={{
                                        type: "spring",
                                        stiffness: 380,
                                        damping: 30
                                    }}
                                    />
                                )}
                            </>
                        )}
                    </NavLink>
                ))}
                <a className="px-4 py-2 text-gray-500" href="https://dev-blog-five-lac.vercel.app/" target="_blank">Blog</a>
            </div>

            <div className="basis-1/3"/>
        </div>
    );
}

export default NavBar;