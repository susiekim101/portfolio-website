import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { House, Hammer, CalendarDays, PenLine} from 'lucide-react';

const MobileNavBar = () => {
    const tabs = [
        {name: 'About', path: '/', icon: House},
        {name: 'Projects', path: '/projects', icon: Hammer},
        {name: 'Experiences', path: '/experiences', icon: CalendarDays},
    ]

    return (
        <div className="flex flex-row w-full justify-center items-center text-sm lg:text-md">
            <div className="flex bg-amber-100/50 shadow-md border border-white/20 px-1 py-1 rounded-3xl backdrop-blur-md">
                {tabs.map((tab) => {
                    const Icon = tab.icon;
                    return (
                        <NavLink key={tab.path} to={tab.path} className="relative px-4 py-2 z-10 transition-colors duration-300">
                            {({isActive}) => (
                                <div className="flex flex-col items-center">
                                    <Icon className={`${isActive ? "text-amber-500" : "text-gray-700"} w-5 h-5`}/>
                                    <span className={`${isActive ? "text-amber-500" : "text-gray-700"} text-xs`}>{tab.name}</span>
                                    {isActive && (
                                        <motion.div
                                        layoutId="mobile-pill"
                                        className="absolute inset-0 rounded-3xl -z-10 overflow-hidden"
                                        style={{
                                            background: "linear-gradient(135deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.1) 100%)",
                                            backdropFilter: "blur(12px) saturate(180%)",
                                            WebkitBackdropFilter: "blur(12px) saturate(180%)", // Safari support
                                            border: "1px solid rgba(255, 255, 255, 0.3)",
                                            boxShadow: `
                                            0 4px 15px rgba(0, 0, 0, 0.1),
                                            inset 0 0 10px rgba(255, 255, 255, 0.5),
                                            inset 0 0 2px rgba(255, 255, 255, 0.8)
                                            `,
                                        }}
                                        transition={{
                                            type: "spring",
                                            stiffness: 350,
                                            damping: 25,
                                            mass: 0.8 // Lower mass makes it feel more "liquid" and agile
                                        }}
                                        initial={{ scale: 0.9, opacity: 0 }}
                                        animate={{ scale: 1, opacity: 1 }}
                                        exit={{ scale: 0.9, opacity: 0 }}
                                        >
                                        <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/20 to-transparent pointer-events-none" />
                                        </motion.div>
                                    )}
                                </div>
                            )}
                        </NavLink>
                    )
                })}
                <div className="flex flex-col gap-1 items-center justify-center px-4 ">
                    <PenLine className="text-gray-700 w-5 h-5"/>
                    <a className="text-xs text-gray-700" href="https://dev-blog-five-lac.vercel.app/" target="_blank">Blog</a>
                </div>
            </div>
        </div>
    );
}

export default MobileNavBar;