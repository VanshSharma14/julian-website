import Image from "next/image";
import Link from "next/Link";
import React from "react";

const ProjectItem = ({title, backgroundImg, githubURL}) => {
    return (

        <div className="relative flex items-center justify-center h-auto w-full shadow-lg shadow-gray-400 rounded-xl group hover:bg-transparent">
            <Image className="rounded-l group-hover:opacity-10" src={backgroundImg} alt="/"></Image>

            {/* <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[50%] translate-y-[50%]"> */}
            <div className="hidden group-hover:block absolute">
                <h3 className="text-2xl text-[#232323] tracking-wider text-center top-[50%] left-[50%]">
                    {title}
                </h3>

                <Link href={githubURL}>
                    <p className="text-center py-2 rounded-lg bg-[#078080] text-[#232323] font-bold text-lg cursor-pointer">
                        More Info
                    </p>
                </Link>
            </div>
        </div>

    );
};

export default ProjectItem;