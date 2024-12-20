import Link from "next/link"
import React from "react"

export default () => {
    return (
        <div>
            <p className="w-full pt-3 border-t border-white text-sm sm:text-md">
                KBUi is a ReactJS and Tailwind based UI Library aiming to provide functional, flexible, and stylized components.
            </p>
            <div className="w-full flex row justify-end pt-3">
                <Link
                    href={"https://github.com/KeeganBruer/KBUi"}
                    target="_blank"
                    className="w-[200px] bg-slate-500 text-white rounded-md p-1 cursor-pointer flex justify-center align-center"
                >
                    Open GitHub
                </Link>
            </div>
        </div>
    )
}