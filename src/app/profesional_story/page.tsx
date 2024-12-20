import NavBar from "@/Components/NavBar";
import PageConstraint from "@/Components/PageConstraint";
import PageWrapper from "@/Components/PageWrapper";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
export default function Home() {
  let sections = [
    {
      title: "The Fundementals of Development",
      id:"developer",
    },
    {
      title: "Progressing To Engineer",
      id:"engineer",
    },
    {
      title:"Full Stack / Desktop / Mobile",
      id:"fullstack",
    },
    {
      title:"Building Cloud Experience",
      id:"cloud",
    },
    {
      title:"Understanding DevOps",
      id:"devops",
    },
    {
      title:"Container Orchestration & Kubernetes",
      id:"kubernetes",
    },
    {
      title:"Machine Learning & AI",
      id:"ml_ai",
    },
    {
      title:"System Architecture",
      id:"architect",
    },
    {
      title:"Golden Sandbox",
      id:"sandbox",
    }
  ]
  return (
    
    <PageConstraint>
      <h1 className="w-full text-center mt-[120px] font-bold text-4xl text-white">
        My Professional Story
      </h1>
      {sections.map((section) => (
        <div className="">
          <h2 id={section.id} className="pt-[40px] text-white w-full font-bold">{section.title}</h2>
          <p className="w-full text-white">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      ))}
      <div className="h-[200px]"></div>
    </PageConstraint>
  );
}
