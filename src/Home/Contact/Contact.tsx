import { Mail } from 'lucide-react';
import GitHub from '../../assets/github-mark.svg'
import LinkedIn from '../../assets/InBug-Black.png'
const Contact = () => {
    const badge = "w-fit px-2 py-1 rounded-3xl bg-neutral-50 border-2 border-white shadow-lg flex gap-2 justify-center items-center cursor-pointer transition-all duration-300";

    return (
        <div className="flex flex-col gap-3 mb-5">
            <p className="text-lg font-bold">Contact</p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                <div className={`${badge}`}>
                    <a href="mailto:kim.susie06@gmail.com" target="_blank" className="rounded-full hover:bg-neutral-200/40 px-2 flex gap-2 justify center items-center transition-colors">
                        <Mail className="p-2 h-10 w-10"/>
                        Email
                    </a>

                    <div className="flex gap-3 justify-start items-center">
                        <a href="https://github.com/susiekim101/" target="_blank" className="rounded-full hover:bg-neutral-200/40 px-2 flex justify center items-center transition-colors">
                        <img src={GitHub} className="p-2 h-10 w-10"/>
                        GitHub
                        </a>
                    </div>

                    <div className="flex justify-start items-center">
                        <a href="https://www.linkedin.com/in/susiekim101/" target="_blank" className="rounded-full hover:bg-neutral-200/40 px-2 flex justify center items-center transition-colors">
                            <img src={LinkedIn} className="p-2 h-10 w-10"/>
                            LinkedIn
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;