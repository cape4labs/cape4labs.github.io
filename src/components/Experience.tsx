import Image from "next/image"
import KeepOut from "./KeepOut"

const ASSETS = {
    folders: "/img/folders.png",
    eye: "/img/eye.png",
    text1: `Recently, we've built solutions in areas such as blockchain privacy (Zauth),
on-chain data crowd-sourcing (AudataDAO), and decentralized
finance (Sunflower).`,
    text2: `Beyond web3, we also worked with high-quality 
traditional web applications. personal websites, marketplaces, analytics 
dashboards, and chatbot solutions.`,
    heading: "Our experience",
}

export default function Experience() {
    return (
        <>
            <div className="bg-white flex flex-col items-center py-5 px-2 border-black md:border-8 max-w-200 relative md:mt-2">
                <h2 className="text-3xl md:text-4xl text-midnight-light z-30 mb-5">
                    Our primary expertise lies in
                    <span className="text-shadow-accent text-shadow-lg"> JavaScript</span>{" "}
                    technologies
                </h2>
                <KeepOut style="h-7" />
                <div className="overflow-hidden">
                    <Image
                        src={ASSETS.eye}
                        alt="A pixelized picture of a left eye."
                        width={2400}
                        height={1052}
                        // TODO: Center content inside the image
                        className="h-full w-full object-contain object-center z-10"
                    />
                </div>
                <KeepOut style="h-7 rotate-[4.2deg] md:hidden -translate-y-3 sm:-translate-y-6" />
            </div>
            <div className="md:flex md:flex-row-reverse border-black bg-white md:border-8 py-5 px-2 max-w-200 md:mt-2">
                <div className="opacity-50 md:opacity-100 flex justify-center items-center">
                    <Image
                        src={ASSETS.folders}
                        alt="Pixelized blue folders positioned vertically on top of one another as an aesthetics element."
                        width={1037}
                        height={1528}
                        className="w-full h-full object-contain object-center scale-110 z-0 

                        max-w-100 md:max-w-none"
                        // ^ Limit image size on smaller screens as it can get excessively large on weird screens
                    />
                </div>

                {/*TODO: add mirror effect to the text*/}
                <div>
                    <h2 className="mb-5 text-midnight-light z-30">Our experience</h2>
                    <p className="text-xl lg:text-2xl font-secondary mb-4">{ASSETS.text1}</p>
                    <p className="text-xl lg:text-2xl font-secondary ">{ASSETS.text2}</p>
                </div>
            </div>
        </>
    )
}
