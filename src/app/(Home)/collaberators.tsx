import Link from "next/link"

export default () => {
    let companies = [
        {
            name: "CyDeploy",
            image: "/company_logos/cydeploylogo.png",
            website:"https://www.cydeploy.com"
        },
        {
            name:"Pinehurst Lodge",
            image: "/company_logos/PinehurstLodge.png",
            website:"https://www.pinehurst-lodge.com"
        },
        {
            name:"Liberty Brew",
            image: "/company_logos/g10.png",
            image_size: "contain",
            website: "https://www.libertybrewcoffee.com/"
        },
        {
            name: "Warlock Tabletop",
            image: "/company_logos/WarlockBar.png",
            website: "https://www.warlocktabletop.com"
        },
    ]
    return (
        <>
            <h2 className="mt-[40px] text-white w-full text-center font-bold text-xl">I&apos;m proud to have collaborated with some awesome companies</h2>
            <div className="grid grid-cols-2 lg:grid-cols-4">
                {companies.map((c, i) => (
                    <div key={c.name}  className={`w-full h-full flex justify-center items-center py-3`}>
                        <Link href={c.website} className="w-[95%] max-w-[200px] aspect-[3/1]" target="_blank">
                            <div
                                className={`rounded-lg bg-white w-full h-full`}
                                style={{
                                    backgroundSize:c.image_size != undefined? "auto 75%" : "cover",
                                    backgroundPosition: "center center",
                                    backgroundImage: `url("${c.image}")`,
                                    backgroundRepeat:"no-repeat"
                                }}
                                >
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
            <p className="text-center text-white mt-[20px]">
                <span className="font-bold">Interested In Collaborating?</span><br/>
                Send me an email at the following address: Inquire@keeganbruer.com<br/>
                -OR--<br/>
                Connect with me on LinkedIn: in/KeeganBruer
            </p>
        </>
    )
}