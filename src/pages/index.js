import Head from "next/head";
import Main from "./components/Main";

export default function Home() {
  return (
      <div className="bg-[#E4DAC7] bg-opacity-25">
        <Head>
          <title>Julian Grande | Software Engineer</title>
          <meta name="description" content="Julian Grande's Portfolio Website"></meta>
          //some image here maybe a selfie?
        </Head>
        <Main />
      </div>
  );
};