import NavBar from "@/Components/NavBar";
import PageConstraint from "@/Components/PageConstraint";
import PageWrapper from "@/Components/PageWrapper";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import Developer from "./(sections)/developer"
export default function Home() {
  let sections = [
    {
      title: "The Fundementals of Development",
      id: "developer",
      content:<Developer />
    },
    {
      title: "Progressing To Engineer",
      id: "engineer",
      content:<Developer />
    },
    {
      title:"Full Stack / Desktop / Mobile",
      id:"fullstack",
      content:<Developer />
    },
    {
      title:"Building Cloud Experience",
      id:"cloud",
      content:<Developer />
    },
    {
      title:"Understanding DevOps",
      id:"devops",
      content:<Developer />
    },
    {
      title:"Container Orchestration & Kubernetes",
      id:"kubernetes",
      content:<Developer />
    },
    {
      title:"Machine Learning & AI",
      id:"ml_ai",
      content:<Developer />
    },
    {
      title:"System Architecture",
      id:"architect",
      content:<Developer />
    },
    {
      title:"Golden Sandbox",
      id:"sandbox",
      content:<Developer />
    }
  ]
  return (
    
    <PageConstraint>
      <h1 className="w-full text-center mt-[120px] font-bold text-4xl text-white">
        My Professional Story
      </h1>
      {sections.map((section) => (
        <div className="" key={section.id}>
          <h2 id={section.id} className="pt-[40px] text-white w-full font-bold">{section.title}</h2>
          {section.content}
        </div>
      ))}
      <div className="h-[200px]"></div>
    </PageConstraint>
  );
}
