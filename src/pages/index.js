import Head from "next/head";
import Main from "./components/Main";
import About from "./components/About";
import ProjectCards from "./components/ProjectCards";
import Timeline from "./components/Timeline";

export default function Home() {
  return (
      <div className="bg-[#E4DAC7] bg-opacity-85">
        <Head>
          <title>Julian Grande | Software Engineer</title>
          <meta name="description" content="Julian Grande's Portfolio Website"></meta>
          //some image here maybe a selfie?
        </Head>
        <Main />
        <About />
        <Timeline />
        <ProjectCards />
      </div>
  );
};