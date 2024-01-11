import React from "react";
import Image from "next/image";
import Link from "next/Link";
import { BsGithub } from "react-icons/bs";
import placeholderpic from "../../../public/my_images/Specialty_Pizza.jpg"

const projects = [

    {

        name: "User Level Threading Library",
        description: "A library in C that allows for multithreading in the user space utilizing a FIFO scheduling policy",
        image: placeholderpic,
        github: "https://github.com/JulianGrande/RefactoredTL",

    },

    {

        name: "Android Pizzeria App",
        description: "Android application for pizza order management, implemented using Android Studio, Gradle, and Java",
        image: placeholderpic,
        github: "https://github.com/JulianGrande/RefactoredTL", 

    },

    {

        name: "TBA",
        description: "TBA",
        image: placeholderpic,
        github: "https://github.com/JulianGrande/RefactoredTL",

    },

]

const AlternateProjectSection = () => {
    return (

        <div id="alternateProjects">
            <h2 className="text-2xl tracking-widest uppercase text-[#f45d48] font-[Helvetica] text-center">
                Projects
                <hr className="w-6 h-1 mx-auto my-4 bg-[#078080] border-0 rounded"></hr>
            </h2>

            <div className="flex flex-col space-y-28">
                
            </div>
        </div>

    );
};