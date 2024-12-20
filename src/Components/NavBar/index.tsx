import Link from "next/link"

export default () => {

    return (
        <div className="sticky top-[0px] w-full h-[40px] bg-[#8c0798] flex justify-center shadow-sm shadow-black">
            <div className="w-full max-w-[900px] h-full flex flex-row justify-between">
                <Link href={`/`} className={"flex justify-start items-center h-full w-[200px]"}>
                    <h1 className="text-white font-bold text-lg">Keegan Bruer</h1>
                </Link>
                <div className="h-full flex flex-rom items-center gap-[10px]">
                    <Link
                        href={`/`}
                        className="border border-white pl-3 pr-3 rounded-md w-[70px] flex justify-center items-center text-white"
                    >Home</Link>
                    <Link
                        href={`/profesional_story`}
                        className="border border-white rounded-md w-[70px] flex justify-center items-center text-white"
                    >About</Link>
                    <Link
                        href={`/Articles`}
                        className="border border-white rounded-md w-[70px] flex justify-center items-center text-white"
                    >Articles</Link>
                </div>
            </div>
        </div>
    )
}