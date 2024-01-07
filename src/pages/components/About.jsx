import React from 'react';
import Image from 'next/image';
import placeholder from '../../../public/my_images/Specialty_Pizza.jpg'
import Skills from './Skills';
import Timeline from './Timeline';

const About = () => {
    return (

        <div id='about' className="w-full md:h-screen p-2 py-16 items-center flex">
            <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
                <div className="col-span-2">
                    <h2 className="uppercase text-2xl tracking-widest text-[#f45d48] font-[Helvetica]">
                        About
                    </h2>

                    <p className="py-2 text-[#222525] text-center font-[Arial]">
                        About text goes here About text goes here About text goes here
                        About text goes here About text goes here About text goes here
                        About text goes here About text goes here About text goes here
                        About text goes here About text goes here About text goes here
                    </p>

                    <p className="py-2 text-[#222525] text-center font-[Arial]">
                    Second paragraph maybe? Second paragraph maybe?
                    Second paragraph maybe? Second paragraph maybe?
                    Second paragraph maybe? Second paragraph maybe?
                    </p>
                </div>
                <div className="w-full h-auto m-auto shadow-s shadow-gray-700 rounded-xl items-center justify-center p-4 hover:scale-75 ease-in duration-200 hidden md:inline-block lg:inline-block">
                    <Image src={placeholder} className="rounded-xl" alt='/'></Image>
                </div>
            </div>    
        </div>

    );
};

export default About;