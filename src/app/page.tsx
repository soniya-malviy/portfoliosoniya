import About from "@/components/About";
import {SignupFormDemo} from "@/components/Contact";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import { HeroBanner } from "@/components/HeroBanner";
import Navbar from "@/components/Navbar";
import RecentBlogs from "@/components/RecentBlogs";
import RecentWork from "@/components/RecentWork";
import Skills from "@/components/Skills";
import Image from "next/image";
import {SparklesPreview} from "@/components/Header";
import {SpotlightPreview} from "@/components/Spotlight";
import {SparklesCore} from "@/components/ui/sparkles";

export default function Home() {
  return (
      <>

        {/*<SparklesPreview/>*/}
<SparklesPreview/>

        <div className="bg-[#050709]">

          <Navbar/>

          <Education/>
          <div className="mt-10">
            <Skills/>

          </div>
          <div className="mt-10">




            <Footer/>
          </div>
        </div>
      </>
  );
}
