import Image from "next/image";
import Link from "next/link";
import React from "react";
import ProjectItem from "./ProjectItem";
{
  /* import the imaes for projects here */
}
import placeholderpic from "../../../public/my_images/Specialty_Pizza.jpg";

const ProjectCards = () => {
  return (
    <div id="projectCards" className="w-full">
      <div className="max-w-[960px] mx-auto px-2 py-16">
        <h2 className="text-2xl tracking-widest uppercase text-[#f45d48] font-[Helvetica] text-center">
          Projects
          <hr className="w-6 h-1 mx-auto my-4 bg-[#078080] border-0 rounded"></hr>
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Project Items go here with the necessary pictures and links */}

          <ProjectItem
            title="User Level Threading Library"
            backgroundImg={placeholderpic}
            githubURL="https://github.com/JulianGrande/RefactoredTL"
          ></ProjectItem>

          <ProjectItem
            title="User Level Threading Library"
            backgroundImg={placeholderpic}
            githubURL="https://github.com/JulianGrande/RefactoredTL"
          ></ProjectItem>
        </div>
      </div>
    </div>
  );
};

export default ProjectCards;
