import PageConstraint from "@/Components/PageConstraint";
import PageWrapper from "@/Components/PageWrapper";
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import Collaberators from "./collaberators";
import Intro from "./Intro";
import Testimonials from "./Testimonials";
import Projects from "./projects";
import Writing from "./writing";
import { FaChevronRight } from "react-icons/fa";
import { CiServer } from "react-icons/ci";
import { FaGear } from "react-icons/fa6";
import { FaDraftingCompass } from "react-icons/fa";
export default function Home() {
  return (
    <PageWrapper>
      <div className={`
        absolute
        top-0
        bottom-[100px]
        right-0
        left-0
        
      `} style={{
        zIndex:-3,
        background:`
          radial-gradient(circle at 0% 100%, rgb(157, 3, 171) 10%, transparent 51%),
          radial-gradient(circle at 150% 100%, rgb(157, 3, 171) 10%, transparent 51%)
        `,
        backgroundColor:"white",
      }}>

      </div>
      <div className="absolute bottom-[100px] w-full flex justify-center" style={{zIndex:-2}}>
        <div className="relative max-w-[900px]">
          <Image className="max-w-[850px] w-[100%] hidden md:flex" style={{transform: "translateX(20%)"}} src={"/splash.webp"} alt="Profile" width={800} height={500}/>
        </div>
      </div>
      <div className={`
        absolute
        top-0
        bottom-[100px]
        right-0
        left-0
        
      `} style={{
        zIndex:-1,
        background:`
          radial-gradient(200% 40% at 70% 100%, rgb(157, 3, 171) 17%, transparent 100%)
        `,
        }}>

      </div>
      <PageConstraint>
        <h1 className="w-full text-center mt-[120px] font-bold text-4xl">Keegan Bruer</h1>
        <h2 className="w-full text-center text-xl sm:text-3xl">Experienced Systems Architect</h2>
        <div className="flex flex-col gap-[20px] mt-[7%]">
          <Link href={"/profesional_story#fullstack"} className="flex">
            <div className="flex gap-[10px] items-center">
              <div className="bg-[#87FBE4] w-[40px] h-[40px] min-w-[40px] min-h-[40px] rounded-md flex justify-center items-center">
                <CiServer size={30} color="black"/>
              </div>
              <div className="flex flex-col">
                <h3 className="text-sm sm:text-xl font-bold">Full Stack / Desktop / Mobile Developer</h3>
                <div className="flex gap-[1px] items-center">

                  <span className="cursor-pointer text-xs sm:text-sm">Learn More </span>
                  <FaChevronRight size={12} color="black"/>
                </div>
              </div>
            </div>
          </Link>
          <Link href={"/profesional_story#cloud"} className="flex">
            <div className="flex gap-[10px] items-center">
              <div className="bg-[#87FBE4] w-[40px] h-[40px] min-w-[40px] min-h-[40px] rounded-md flex justify-center items-center">
                <FaGear size={30} color="black" />
              </div>
              <div className="flex flex-col">
                <h3 className="text-sm sm:text-xl font-bold">DevOps & Cloud Computing</h3>
                <div className="flex gap-[1px] items-center">

                  <span className="cursor-pointer text-xs sm:text-sm">Learn More </span>
                  <FaChevronRight size={12} color="black"/>
                </div>
              </div>
            </div>
          </Link>
          <Link href={"/profesional_story#ml_ai"} className="flex">
            <div className="flex gap-[10px] items-center">
              <div className="bg-[#87FBE4] w-[40px] h-[40px] min-w-[40px] min-h-[40px] rounded-md flex justify-center items-center">
                <Image alt="Icon For AI" src="/mlsvg.svg" width={40} height={40}/>
              </div>
              <div className="flex flex-col">
                <div className="flex">
                  <h3 className="text-sm sm:text-xl font-bold">AI / Machine Learning Engineer</h3>
                </div>
                <div className="flex gap-[1px] items-center">

                  <span className="cursor-pointer text-xs sm:text-sm">Learn More </span>
                  <FaChevronRight size={12} color="black"/>
                </div>
              </div>
            </div>
          </Link>
          <Link href={"/profesional_story#architect"} className="flex">
            <div className="flex gap-[10px] items-center">
              <div className="bg-[#87FBE4] w-[40px] h-[40px] min-w-[40px] min-h-[40px] rounded-md flex justify-center items-center">
              <FaDraftingCompass size={30} color="black" />
              </div>
              <div className="flex flex-col">
                <h3 className="text-sm sm:text-xl font-bold">Solutions / System Architect</h3>
                <div className="flex gap-[1px] items-center">

                  <span className="cursor-pointer text-xs sm:text-sm">Learn More </span>
                  <FaChevronRight size={12} color="black"/>
                </div>
              </div>
            </div>
          </Link>
        </div>
        <div className="flex gap-[20px] mt-[20px] justify-center sm:justify-start">
          <Link
            href={"https://www.linkedin.com/in/keeganbruer/"}
            target="_blank"
            className="w-[120px] h-[40px] flex justify-center items-center rounded-md gap-[10px] bg-[#0077b5] cursor-pointer"
          >
            <FaLinkedinIn size={25} color={"white"} />
            <span className="text-white">LinkedIn</span>
          </Link>
          <Link
            href={"https://github.com/KeeganBruer"}
            target="_blank"
            className="w-[120px] h-[40px] flex justify-center items-center rounded-md gap-[10px] bg-black cursor-pointer"
          >
            <FaGithub size={25} color={"white"} />
            <span className="text-white">GitHub</span>
          </Link>
        </div>
        <div className="h-[120px] sm:h-[200px]"></div>
        <main className="w-full flex flex-col gap-[20px]">
          <Intro />
          <Collaberators />
          <Testimonials />
          <Projects />
          <Writing />
        </main>
        <div className="h-[300px]"></div>
      </PageConstraint>
      <div className="w-full bg-black h-[50px] text-white flex justify-center align-center">
        <p>Copyright Keegan Bruer - 2024</p>
      </div>
    </PageWrapper>
  );
}
