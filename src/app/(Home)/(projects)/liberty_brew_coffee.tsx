import Link from "next/link"
import React from "react"

export default () => {
    return (
        <div>

            <p className="w-full pt-3 border-t border-white text-sm sm:text-md">
                Liberty Brew Coffee is a premium brand that prides itself on crafting exceptional, high-quality blends that elevate your coffee experience to new heights!
            </p>
            <p className="w-full pt-3 text-sm sm:text-md">
                Discover the future of coffee service! Imagine effortlessly tracking our delivery trucks as they bring your favorite latte or hot beverage straight to your door. Perfect for busy stay-at-home moms and remote workers in need of a quick caffeine boost, this service offers the ultimate convenience. Enjoy fresh coffee delivered right when you crave it most!
            </p>
            <div className="w-full flex row justify-end pt-3">
                <Link
                    href={"https://apps.apple.com/us/app/liberty-brew-coffee/id6670748994"}
                    target="_blank"
                    className="w-[200px] bg-slate-500 text-white rounded-md p-1 cursor-pointer flex justify-center align-center"
                >
                    Open IOS Store Page
                </Link>
            </div>
        </div>
    )
}

// 