import About from "@/components/About";
import {SignupFormDemo} from "@/components/Contact";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import { HeroBanner } from "@/components/HeroBanner";
import Navbar from "@/components/Navbar";
import RecentBlogs from "@/components/RecentBlogs";
import RecentWork from "@/components/RecentWork";
import Instructors from "@/components/Skills";
import Image from "next/image";
import {AnimatedTestimonialsDemo} from "@/components/Header";
import {SpotlightPreview} from "@/components/Spotlight";
import {SparklesCore} from "@/components/ui/sparkles";

export default function Home() {
  return (
      <>

        {/*<SparklesPreview/>*/}
<AnimatedTestimonialsDemo/>

        <div className="bg-[#050709]">

          <Navbar/>

          <Education/>
          <div className="mt-10">
            <Instructors/>

          </div>
          <div className="mt-10">




            <Footer/>
          </div>
        </div>
      </>
  );
}
