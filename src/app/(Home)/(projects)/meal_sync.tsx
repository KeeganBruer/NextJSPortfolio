import Link from "next/link"
import React from "react"

export default () => {
    return (
        <div>

            <p className="w-full pt-3 min-h-[150px] border-t border-white text-sm sm:text-md">
                MealSync allows you to keeps track of all
                your recipes and schedule them into your week.
                
            </p>
            <div className="w-full flex row justify-end">

                <Link
                    href={"/MealSync"}
                    target="_blank"
                    className="w-[200px] bg-slate-500 text-white rounded-md p-1 cursor-pointer flex justify-center align-center"
                    >
                    Open Project Page
                </Link>
            </div>
        </div>
    )
}