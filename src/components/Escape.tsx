import Image from "next/image"
import KeepOut from "./KeepOut"

const ASSETS = {
    escaper: "/img/escaper.png",
}

export default function Escape() {
    return (
        <>
            <div
                className="max-h-screen bg-white pt-10 items-center text-midnight-light pb-15 border-black
            md:border-8 md:mt-2 flex flex-col md:flex-row-reverse md:p-5 relative max-w-200"
            >
                {/*Background text*/}
                <div
                    className="absolute opacity-10 left-0 top-0 text-5xl text-justify
                    text-nowrap max-w-full max-h-full overflow-hidden"
                >
                    {Array.from({ length: 12 }, (_, key) => (
                        <p key={key}>
                            Cape4labs is an independent web development studio with a tiny
                        </p>
                    ))}
                </div>

                <div className="text-nowrap z-30">
                    <h2>The studio</h2>
                    <h2>of web de-</h2>
                    <h2>velopment</h2>
                </div>

                <br />

                <div className="mt-10">
                    <Image
                        src={ASSETS.escaper}
                        alt="Pixelized picture of a stickman stepping into a screen of a pc from 90s."
                        width={744}
                        height={706}
                        className="scale-125"
                    />
                </div>

                <KeepOut style="h-7 absolute top-45 md:top-auto md:bottom-15 -rotate-5" />
            </div>
        </>
    )
}
