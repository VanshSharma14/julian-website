import Head from "next/head";
import Main from "./components/Main";
import About from "./components/About";
import ProjectCards from "./components/ProjectCards";
import Footer from "./components/Footer";
import Skills from "./components/Skills";

export default function Home() {
  return (
      <div className="bg-[#f8f5f2]"> {/** bg-op 100% */}
        <Head>
          <title>Julian Grande | Software Engineer</title>
          <meta name="description" content="Julian Grande's Portfolio Website"></meta>
        </Head>
        <Main />
        <About />
        <Skills />
        <ProjectCards />
        <Footer />
      </div>
  );
};