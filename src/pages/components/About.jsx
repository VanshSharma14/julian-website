import React from 'react';
import Image from 'next/image';
//import image from pictures folder in parent public folder

const About = () => {
    return (

        <div id='about' className="w-full md:h-screen p-2 flex items-center py-16">
            <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
                <div className="col-span-2">
                    <h3 className="uppercase text-xl tracking-widest text-[#800000] text-left">
                        About
                    </h3>

                    <p className="py-2 text-gray-700">
                        About text goes here
                    </p>

                    <p className="py-2 text-gray-700">
                        Second paragraph maybe?
                    </p>
                </div>
                <div className="w-full h-auto m-auto shadow-s shadow-gray-700 rounded-xl flex items-center justify-center p-4 hover:scale-75 ease-in duration-200">
                    //Image here
                </div>
                <div>
                    //Timeline here
                </div>
            </div>
        </div>

    );
};

export default About;