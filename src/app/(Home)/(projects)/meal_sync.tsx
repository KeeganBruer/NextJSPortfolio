import Link from "next/link"
import React from "react"

export default () => {
    return (
        <div>

            <p className="w-full pt-3 border-t border-white text-sm sm:text-md">
                Meals are a corner-stone of community, &quot;Everyone Eats&quot;.
                MealSync focuses on bringing more collaberation to the dinner-making process.
                MealSync achieves better collaberation through easily-sharable recipes,
                shared meal plans, and real-time grocery lists (for those simultanious multi-store shopping trips).
            </p>
            <div className="w-full flex row justify-end pt-3">

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