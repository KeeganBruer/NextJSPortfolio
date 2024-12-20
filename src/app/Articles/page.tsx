import React from "react"
import PageConstraint from "@/Components/PageConstraint";
import Link from "next/link";

export default () => {
    let articles = [
        {
            title: "The Importance of Documentation",
            link:"/Articles/importance_of_documentation",
            description:`
                Technical documentation is important to me. I find that writing helps me to think more in depth as well as refine/reorder my thoughts. I also find that once I move onto working on individual pieces of a project, I loose my original thoughts on the project overview. Writing them down allows me to go back and resume from where I left off. Good documentation is like a user-friendly error message. It guides you through a problem, helping you understand and resolve it.    
            `
        },
        {
            title: "Clean Code: Writing, Reading, Maintaining",
            link:"/Articles/clean_code",
            description:`
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            `
        }
    ]
    return (
        <>
            <div className="w-full h-[500px] bg-red-500"></div>
            <PageConstraint>
                <h2 className="py-3 font-bold text-white text-lg">Articles</h2>
                <div className="flex flex-col w-full gap-[20px]">
                    {articles.map((a) => (
                        <div key={a.title} className="bg-white w-full rounded-md shadow-black shadow-md relative flex items-center p-5 gap-[20px] pb-[30px] mt-[20px]">
                            <div className="absolute top-[-20px] left-[10px] p-1 px-3 bg-white rounded-md flex gap-3 items-center shadow-md shadow-black">
                                <span className="text-sm">{a.title}</span>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-[10px]">
                                <div className="flex justify-center items-center">
                                    <div className="h-[100px] bg-black aspect-video"></div>
                                </div>
                                <div className="relative">

                                    <p className="w-full text-sm min-h-[100px]">
                                        {a.description}
                                    </p>
                                    <div className="w-full flex justify-end absolute left-0 bottom-[-20px] h-[20px]">
                                        <Link href={a.link} className="text-sm underline">Read Article</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </PageConstraint>
            <div className="h-[100px]"></div>
        </>
    )
}