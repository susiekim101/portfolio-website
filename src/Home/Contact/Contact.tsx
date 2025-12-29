import { Mail } from 'lucide-react';
import GitHub from '../../assets/github-mark.svg'
import LinkedIn from '../../assets/InBug-Black.png'
const Contact = () => {
    return (
        <div className="flex flex-col gap-3 px-10">
            <p className="text-lg font-bold">Contact</p>

            <div className="grid grid-cols-2 grid-rows-2">
                <a href="mailto:kim.susie06@gmail.com" className="flex gap-3 justify-start items-center cursor-pointer">
                    <Mail className="p-2 h-10 w-10"/>
                    kim.susie06@gmail.com
                </a>

                <div className="flex gap-3 justify-start items-center">
                    <a href="https://github.com/susiekim101/" className="flex gap-3 justify-start items-center cursor-pointer">
                    <img src={GitHub} className="p-2 h-10 w-10"/>
                    susiekim101
                    </a>
                </div>

                <div className="flex gap-3 justify-start items-center">
                    <a href="https://www.linkedin.com/in/susiekim101/" className="flex gap-3 justify-start items-center cursor-pointer">
                    <img src={LinkedIn} className="p-2 h-10 w-10"/>
                    susiekim101
                    </a>
                </div>

                {/* <div className="flex gap-3 justify-start items-center">
                    <Mail className="p-2 h-10 w-10"/>
                    kim.susie06@gmail.com
                </div> */}
            </div>
        </div>
    );
}

export default Contact;