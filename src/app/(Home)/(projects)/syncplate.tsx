import Link from "next/link"
import React from "react"

export default () => {
    return (
        <div>

            <p className="w-full pt-3 border-t border-white text-sm sm:text-md">
                Meals are a corner-stone of community, &quot;Everyone Eats&quot;.
                SyncPlate focuses on bringing more collaberation to the dinner-making process.
                SyncPlate achieves better collaberation through easily-sharable recipes,
                shared meal plans, and real-time grocery lists (for those simultaneous multi-store shopping trips).
            </p>
            <div className="w-full flex row justify-end pt-3 gap-[10px]">

                <Link
                    href={"https://play.google.com/store/apps/details?id=com.keeganbruer.syncplate"}
                    target="_blank"
                    className="w-[200px] bg-slate-500 text-white rounded-md p-1 cursor-pointer flex justify-center align-center"
                    >
                    Open Google Play Store
                </Link>
                <Link
                    href={"/SyncPlate"}
                    target="_blank"
                    className="w-[200px] bg-slate-500 text-white rounded-md p-1 cursor-pointer flex justify-center align-center"
                    >
                    Open Project Page
                </Link>
            </div>
        </div>
    )
}