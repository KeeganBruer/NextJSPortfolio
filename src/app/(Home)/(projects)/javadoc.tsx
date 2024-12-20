import Link from "next/link"
import React from "react"

export default () => {
    return (
        <div>
            <p className="w-full pt-3 min-h-[150px] border-t border-white text-sm sm:text-md">
                Javadoc Generator is an extension to VSCode that wraps the commandline javadoc compiler.
                I wrote this in highschool and was originally created to fill my own needs for quickly creating a javadoc,
                back when the offical Java extension didn&apos;t have proper javadoc support.
                But after over 25k downloads, I decided to rebuild with better error reporting and transparent configuration.
                It now has over 30k downloads and 3 total contributors.
            </p>
            <div className="w-full flex row justify-end">
                <Link
                    href={"https://github.com/KeeganBruer/javadoc-generator"}
                    target="_blank"
                    className="w-[200px] bg-slate-500 text-white rounded-md p-1 cursor-pointer flex justify-center align-center"
                >
                    Open GitHub
                </Link>
            </div>
        </div>
    )
}