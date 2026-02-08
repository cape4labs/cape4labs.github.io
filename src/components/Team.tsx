import Image from "next/image"
import Link from "next/link"
import KeepOut from "./KeepOut"

const ASSETS = {
    magician: "/img/magician.png",
    dummy: "/img/dummy.png",
    keepOut: "/img/keepOut.png",
}

export default function Team() {
    return (
        <div
            className="bg-white border-black flex flex-col items-center md:border-8
            md:mt-2 max-w-200 relative"
        >
            <KeepOut style="md:hidden h-7" />
            <h2 className="text-midnight-light z-30 mt-5">Our team</h2>
            <div className="flex flex-col items-center px-4 md:grid md:grid-cols-2 gap-x-8 gap-y-4 md:gap-y-5 translate-y-5">
                <Profile data={{ name: "q-waq", role: "front-end dev" }}></Profile>
                <Profile data={{ name: "q-waq", role: "front-end dev" }}></Profile>
                <Profile data={{ name: "q-waq", role: "front-end dev" }}></Profile>
                <Profile data={{ name: "q-waq", role: "front-end dev" }}></Profile>
            </div>
            <KeepOut style="h-9 -rotate-[2.34deg] translate-y-5" />
            <div className="hidden w-full md:block overflow-hidden">
                <Image
                    src={ASSETS.magician}
                    width={1000}
                    height={500}
                    alt=""
                    className="w-full h-full object-center object-contain"
                />
            </div>
        </div>
    )
}

function Profile({ data }: { data: { name: string; role: string } }) {
    return (
        <div className="border-black border-l border-t border-r-3 border-b-3 text-2xl font-mono font-extrabold grid grid-cols-2 p-2">
            <div className="text-nowrap flex flex-col gap-2 z-30">
                <h2 className="font-extrabold">{data.name}</h2>
                <h2 className="text-stone-700">{data.role}</h2>
            </div>
            <div className="flex flex-col justify-between items-end gap-1">
                <SocialMedia />
                <SocialMedia />
            </div>
        </div>
    )
}

function SocialMedia() {
    return (
        <Link href="">
            <Image src={ASSETS.dummy} alt="" width={35} height={35} className="invert"></Image>
        </Link>
    )
}
