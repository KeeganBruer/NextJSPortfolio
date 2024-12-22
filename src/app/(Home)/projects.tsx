"use client";

import { useMemo, useState } from "react";
import KBUi from "./(projects)/KBUi";
import Javadoc from "./(projects)/javadoc";
import SyncPlate from "./(projects)/syncplate";
import LibertyBrew from "./(projects)/liberty_brew_coffee";
import PinehurstLodge from "./(projects)/pinehurst_lodge";
import DnDEngine from "./(projects)/dndengine";

export default () => {
    let projects = [
        
        {
            id:"syncplate",
            title: "SyncPlate",
            subtitle: "An all-in-one meal planning solution",
            img:"/project_covers/syncplate/cover.png",
            description: <SyncPlate />
        },
        {
            id:"liberty_brew_coffee",
            title: "Liberty Brew",
            subtitle: "Live map and delivery mobile app for coffee trucks",
            img:"/project_covers/liberty_brew.png",
            description: <LibertyBrew />
        },
        {
            id:"pinehurst_lodge",
            title: "AirBnb Website",
            subtitle: "A bespoke website to show off detailed accomidations",
            img:"/project_covers/pinehurst_lodge.png",
            description: <PinehurstLodge />
        },
        {
            id:"kbui",
            title: "KBUi",
            subtitle: "(K-B-U-I) or (ka-boo-ie)",
            description: <KBUi />
        },
        {
            id:"dndengine",
            title: "DnD Engine",
            subtitle: "A platform for interactive storytelling",
            img:"/project_covers/dndengine.jpg",
            description: <DnDEngine />
        },
        {
            id:"javadoc",
            title: "Javadoc Generator",
            subtitle: "A VSCode Extension that wraps the Javadoc executable",
            img:"/project_covers/javadoc-generator.jpg",
            description: <Javadoc />
        },
    ]
    let [selectedProjectID, setSelectedProjectID] = useState<string>("syncplate")
    let selectedProject = useMemo(() => projects.filter(p => p.id == selectedProjectID)[0], [selectedProjectID])
    const isSelected = (project:{id:string}) => {
        return project.id == selectedProjectID;
    }
    return (
        <>
            <h2 className="mt-[100px] text-white w-full text-center font-bold text-2xl">
                Recent Public Projects
            </h2>
            <span className="w-full flex justify-center text-white text-sm sm:text-md">Click On A Project Preview To Change The Detail Pane</span>
            <div className="grid grid-cols-2 lg:grid-cols-3">
                {projects.map((project) => (
                    <div key={project.id} className="w-full h-full my-3 flex justify-center items-center">
                        <div
                            className={`
                                w-[90%]
                                max-w-[250px]
                                aspect-[5/3]
                                bg-black
                                mx-auto
                                rounded-md
                                text-white
                                bg-center
                                bg-cover
                                cursor-pointer
                                transition-transform
                                transition-shadow
                                shadow-black
                                shadow-md
                                hover:scale-110
                                hover:shadow-black
                                hover:shadow-xl

                                ${isSelected(project) ? `
                                    scale-[109%]
                                    shadow-lg 
                                ` : `
                                `}
                            `}
                            style={{
                                backgroundImage:`url('${project.img}')`
                            }}
                            onClick={() => setSelectedProjectID(project.id)}
                        ></div>
                    </div>
                ))}
            </div>
            <div className="flex flex-col w-full text-white border border-white rounded-md p-3">
                <div className={`w-full flex flex-col gap-[5px] md:flex-row`}>
                    <h3 className="font-bold">{selectedProject?.title}</h3>
                    <h4 className="text-xs sm:text-md flex items-end py-[5px]">{selectedProject?.subtitle}</h4>
                </div>
                {selectedProject?.description}
            </div>
        </>
    )
}