import Image from "next/image";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
export default () => {
    let testimonials = [
        {
            name: "Tina Williams-Koroma,<br/> Esq., CISSP, PMP",
            img: "/testimonials/TinaWilliams.jpg",
            in_link:"https://www.linkedin.com/in/tcwk/",
            text: `
                "One of the core values at CyDeploy is "professional curiosity."  This  entails team members really owning their respective crafts and taking  initiative on the next step, always thinking of how something could be  done better.  Keegan embodies this value.  He's not only a strong  engineer, but also a clear, and effective communicator, a rare  combination among tech professionals!"
            `
        },
        {
            name: "David (Steady) Steadman",
            img: "/testimonials/DavidSteadman.jpg",
            in_link:"https://www.linkedin.com/in/david-steadman/",
            text: `
            "I've had the immense pleasure of working alongside Keegan at  CyDeploy, where he has unequivocally established himself as a rockstar  in our midst. Through his unparalleled expertise and dedication, Keegan  has revolutionized the way we operate by masterfully orchestrating a  Kubernetes cluster and automating all facets of our Azure marketplace  and deployment processes.
            <br/><br/>
            
            His approach to challenges is nothing  short of inspiring; Keegan doesn't just tackle issues as they arise—he  dives headfirst into the heart of the problem with a solution-oriented  mindset that uplifts the entire team. This isn't just about technical  proficiency; it's about an attitude that elevates our collective spirit  and drives towards excellence.
            <br/><br/>

            The ripple effects of Keegan's  contributions are felt across all our projects. His work has not only  streamlined our operations but also dramatically enhanced our efficiency and effectiveness, allowing us to deliver superior services to our  clients with unprecedented speed and reliability.
            <br/><br/>
            
            Keegan is more  than just a skilled professional; he's a team player through and  through. His willingness to share knowledge, offer guidance, and foster a collaborative environment has significantly contributed to our team's  growth and success.
            <br/><br/>
            
            In summary, Keegan's impact at CyDeploy has  been transformative. His blend of technical acumen, problem-solving  prowess, and collaborative spirit marks him as a true rockstar in our  field. We're incredibly fortunate to have him on our team, pushing the  boundaries of what's possible and setting new benchmarks for  excellence."
                    
            `
        }
    ]
    return (
        <>
            <h2 className="my-[40px] mt-[100px] text-white w-full text-center font-bold text-2xl">
            Personal Testimonials
            </h2>
            {testimonials.map((testimonial, i) => (
                <div key={testimonial.name} className={`w-full flex ${i %2 == 0 ? "justify-end" : ""} ${i != 0 ? "mt-5" : ""}`}>
                    <div className="w-full relative bg-white rounded-md shadow-lg shadow-black">
                        <div className={`absolute top-[-20px] ${i % 2 == 0 ? "left-[10px]" : "right-[10px]"} p-1 px-3 bg-white rounded-md flex gap-3 items-center shadow-md shadow-black`}>
                            <Image
                                alt={testimonial.name + " Profile Photo"}
                                src={testimonial.img}
                                className="bg-black w-[40px] h-[40px] rounded-full"
                                width={40}
                                height={40}
                            ></Image>
                            <span className="text-sm" dangerouslySetInnerHTML={{ __html: testimonial.name }} />
                            <Link href={testimonial.in_link} target="_blank">
                                <FaLinkedin size={25} color="#0077b5"/>
                            </Link>
                        </div>
                        <p className="p-3 pt-[40px] text-sm sm:text-md" dangerouslySetInnerHTML={{__html:testimonial.text}} />
                    </div>
                </div>
            ))}
        </>
    )
}