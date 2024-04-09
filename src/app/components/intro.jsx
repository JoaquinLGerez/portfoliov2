"use client";
import Image from 'next/image';
import { motion } from "framer-motion";
import Link from 'next/link';
import { BsArrowRight, BsLinkedin } from "react-icons/bs"
import { HiDownload } from 'react-icons/hi'
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from '../hooks/hooks'
import { useActiveSectionContext } from '../context/active-section-context';

const Intro = () => {
    const { ref } = useSectionInView('Home');
    const {setActiveSection, setTimeOfLastClick} = useActiveSectionContext();
    
    return (
        <section ref={ref} id='home' className='mb-28 max-w-[50rem] text-center sm:mb-0 z-20 scroll-mt-[100rem]'>
            <div className='flex items-center justify-center'>
                <div className='relative'>
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                    >
                        <Image
                            src="https://media.licdn.com/dms/image/C4E03AQFQ-3wSkZW9MA/profile-displayphoto-shrink_800_800/0/1633475417368?e=1707350400&v=beta&t=8Bf7syabRfXWwguZCjKlyL-c4Xdcwyw08Bic6ZGiRzc"
                            alt="Joaquin Gerez"
                            width="192"
                            height="192"
                            quality="80"
                            priority="true"
                            className='h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl'
                        />
                    </motion.div>
                    <motion.span className='absolute bottom-0 right-0 text-3xl ml-4'
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            type: 'spring',
                            stiffness: 125,
                            delay: 0.1,
                            duration: 0.7
                        }}
                    >👋</motion.span>
                </div>
            </div>

            <motion.p
                className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl "
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}

            >
                <span className="font-bold">Hello, I'm Joaquin.</span> I'm a{" "}
                <span className="font-bold">full-stack developer</span> with{" "}
                <span className="font-bold">3 years</span> of experience. I enjoy
                building <span className="italic">sites & apps</span>. My focus is{" "}
                <span className="underline">React (Next.js) and Python (Django)</span>.
            </motion.p>
            <motion.div className='flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-meidum'
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 0.1,
                }}
            >
                <Link
                    href="#contact"
                    className='group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none 
            focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition '
                    onClick={() => {
                        setActiveSection("Contact");
                        setTimeOfLastClick(Date.now());
                    }}
                >
                    Contact me here <BsArrowRight className='opacity-70 group:hover:translate-x-1 transition' />
                </Link>
                <a
                    className='group border border-black/10 cursor-pointer bg-white px-7 py-3 flex items-center gap-2 rounded-full  outline-none focus:scale-110 hover:scale-110 active:scale-105 transition'
                    href='./cv.pdf'
                >
                    Download CV <HiDownload className='opacity-60 group-hover:translate-y-1 transition' />
                </a>
                <a className='bg-white p-4 flex items-center text-gray-700 gap-2 rounded-full
             focus:scale-110 hover:scale-110 active:scale-105 transition
            '
                    href="https://www.linkedin.com/in/joaquin-gerez/" target="_blanck"
                >
                    <BsLinkedin />
                </a>
                <a className='bg-white p-4 flex items-center text-gray-700 gap-2 rounded-full text-[1.5rem]
             focus:scale-110 hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition
            '
                    href="https://github.com/joaquinlgerez" target="_blanck"

                >
                    <FaGithubSquare />
                </a>
            </motion.div>
        </section>
    )
}

export default Intro