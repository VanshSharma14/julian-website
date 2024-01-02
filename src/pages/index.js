import Head from "next/head";
import Main from "./components/Main";
import About from "./components/About";
import ProjectCards from "./components/ProjectCards";
import Timeline from "./components/Timeline";

export default function Home() {
  return (
      <div className="bg-[#f8f5f2] bg-opacity-100"> {/* #E4DAC7 */}
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