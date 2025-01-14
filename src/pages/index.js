import Head from "next/head";
import Main from "./components/Main";
import About from "./components/About";
import ProjectCards from "./components/ProjectCards";
import Footer from "./components/Footer";
import Skills from "./components/Skills";
import AlternateProjectSection from "./components/AlternateProjectSection";

export default function Home() {
  return (
      <div> {/** bg-op 100% */}
        <Head>
          <title>Julian Grande | Software Engineer</title>
          <meta name="description" content="Julian Grande's Portfolio Website"></meta>
        </Head>

        <div className="bg-[#f8f5f2]">
          <Main />
        </div>

        <div className="bg-[#fffffe]">
          <About />
        </div>

        <div className="bg-[#f8f5f2]">
          <Skills />
        </div>

        <div className="bg-[#fffffe]">
          {/* <ProjectCards /> */}
          <AlternateProjectSection />
        </div>

        <div className="bg-[#f8f5f2]">
          <Footer />
        </div>

      </div>
  );
};