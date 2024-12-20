import Link from "next/link"
import React from "react"

export default () => {
    return (
        <div>
            <p className="w-full pt-3 border-t border-white text-sm sm:text-md">
                I wrote and published a research paper, DnD Engine, where I explored the technical requirements of a platform
                for creating and telling interactive stories, showcasing my ability to explain complex technical concepts
                and design multi-system applications.
            </p>
            <div className="w-full flex row justify-end pt-3">
                <Link
                    href={"https://drive.google.com/file/d/1RUXsD6FblaY3bUKQOEz0xzWqVb__Bxni/view"}
                    target="_blank"
                    className="w-[200px] bg-slate-500 text-white rounded-md p-1 cursor-pointer flex justify-center align-center"
                >
                    Open Research Paper
                </Link>
            </div>
        </div>
    )
}