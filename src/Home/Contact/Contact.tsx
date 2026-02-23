import { Mail } from 'lucide-react';

const GitHub = '/assets/github-mark.svg'
const LinkedIn = '/assets/InBug-Black.png'

const Contact = () => {
    const badge = "mb-10 w-fit px-1 py-1 text-sm md:text-md rounded-3xl bg-neutral-50 border-2 border-white shadow-lg flex gap-1 justify-center items-center cursor-pointer transition-all duration-300";

    return (
        <div className="w-full flex justify-center">
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
    );
}

export default Contact;