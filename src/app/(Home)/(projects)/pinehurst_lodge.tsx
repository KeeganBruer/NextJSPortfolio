import Link from "next/link"
import React from "react"

export default () => {
    return (
        <div>

            <p className="w-full pt-3 min-h-[150px] border-t border-white text-sm sm:text-md">
                Liberty Brew
            </p>
            <div className="w-full flex row justify-end">
                <Link
                    href={"https://pinehurst-lodge.com"}
                    target="_blank"
                    className="w-[200px] bg-slate-500 text-white rounded-md p-1 cursor-pointer flex justify-center align-center"
                >
                    Visit Website
                </Link>
            </div>
        </div>
    )
}