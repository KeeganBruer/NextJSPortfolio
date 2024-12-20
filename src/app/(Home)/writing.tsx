import Link from "next/link"

export default () => {
    let articles = [
        {
            title: "The Importance of Documentation",
            img:"/deepdive/covers/Documentation.jpg",
            link: "/Articles/importance_of_documentation",
            description:`
                Technical documentation is important to me. I find that writing helps me to think more in depth as well as refine/reorder my thoughts. I also find that once I move onto working on individual pieces of a project, I loose my original thoughts on the project overview. Writing them down allows me to go back and resume from where I left off. Good documentation is like a user-friendly error message. It guides you through a problem, helping you understand and resolve it.    
            `
        },
        {
            title: "Clean Code: Writing, Reading, Maintaining",
            img:"/deepdive/covers/CleanCode.jpg",
            link:"/Articles/clean_code",
            description:`
                Clean Code refers to code that is not only understandable, but pleasing to the eye. As humans we all look for patterns in our world, and enjoy when things line up with our expectations. One of the fundemental piece of Clean Code is to make a pattern and stick to it. This is one of the main issues when working with a team that contributes to a dirty codebase. When each person brings their own personal styles to a codebase, not only can different files or components become confusingly different, but a single file could contain multiple different styles in itself leading to code with no recognizable pattern at all.
            `
        }
    ]
    return (
        <>
            <h2 className="mt-[100px] text-white w-full text-center font-bold text-2xl">
            Technical Writing and Communication
            </h2>
            <p className="w-full text-white">
                I prioritize clear and effective technical communication.
                During University, I published <Link href={"https://drive.google.com/file/d/1RUXsD6FblaY3bUKQOEz0xzWqVb__Bxni/view"} target="_blank" className="text-blue-200 underline">a research paper</Link> where I explored the technical requirements of a platform
                for creating and telling interactive stories, showcasing my ability to explain complex technical concepts
                and design multi-system applications.
                Since graduating, I now use my aptitude for writing to document system architectural designs, as well as
                writing articles exploring various technical concepts I find interesting.
            </p>
            <h3 className="font-bold text-white">Recent Articles I've Written</h3>
            <div className="flex flex-col w-full gap-[20px]">
                {articles.map((a) => (
                    <div className="bg-white w-full rounded-md shadow-black shadow-md relative flex items-center p-5 gap-[20px] pb-[30px] mt-[20px]">
                        <div className="absolute top-[-20px] left-[10px] p-1 px-3 bg-white rounded-md flex gap-3 items-center shadow-md shadow-black">
                            <span className="text-sm">{a.title}</span>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-[10px]">
                            <div className="flex justify-center items-center">
                                <div
                                    className={`
                                        h-[100px]
                                        bg-black
                                        aspect-video
                                        bg-center
                                        bg-cover
                                    `}
                                    style={{ backgroundImage: `url('${a.img}')` }}
                                ></div>
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
        </>
    )
}