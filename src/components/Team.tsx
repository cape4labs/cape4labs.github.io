import Image from "next/image"
import Link from "next/link"
import KeepOut from "./KeepOut"

const ASSETS = {
    magician: "/img/magician.png",
    dummy: "/img/dummy.png",
    keepOut: "/img/keepOut.png",
    github: "/img/github.png",
    telegram: "/img/telegram.png",
    x: "/img/x.png",
    link: "/img/link.png",
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
                <Profile
                    data={{
                        name: "qwaq",
                        role: "development",
                        socialMediaEntries: [
                            { link: "https://github.com/QwaQ-dev", image: ASSETS.github },
                            { link: "https://t.me/qwaq_dev", image: ASSETS.telegram },
                        ],
                    }}
                ></Profile>
                <Profile
                    data={{
                        name: "no-hive",
                        role: "tech. writing",
                        socialMediaEntries: [
                            { link: "https://github.com/no-hive", image: ASSETS.github },
                            { link: "https://x.com/no__hive", image: ASSETS.x },
                        ],
                    }}
                ></Profile>
                <Profile
                    data={{
                        name: "omnopon",
                        role: "design",
                        socialMediaEntries: [
                            { link: "https://github.com/f2que", image: ASSETS.github },
                            { link: "https://x.com/omnopon", image: ASSETS.x },
                        ],
                    }}
                ></Profile>
                <Profile
                    data={{
                        name: "isgin01",
                        role: "development",
                        socialMediaEntries: [
                            { link: "https://github.com/isgin01", image: ASSETS.github },
                            { link: "https://isgin01.github.io/", image: ASSETS.link },
                        ],
                    }}
                ></Profile>
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

function Profile({
    data,
}: {
    data: { name: string; role: string; socialMediaEntries: { link: string; image: string }[] }
}) {
    return (
        <div className="border-black border-l border-t border-r-3 border-b-3 text-2xl font-mono font-extrabold grid grid-cols-2 p-2 w-75 sm:w-90 md:w-auto">
            <div className="text-nowrap flex flex-col gap-2 z-30">
                <h2 className="font-extrabold">{data.name}</h2>
                <h2 className="text-stone-700">{data.role}</h2>
            </div>
            <div className="flex flex-col justify-center items-end gap-3">
                {data.socialMediaEntries.map((socialMediaEntry, index) => (
                    <SocialMediaLink data={socialMediaEntry} key={index} />
                ))}
            </div>
        </div>
    )
}

function SocialMediaLink({ data }: { data: { link: string; image: string } }) {
    return (
        <Link href={data.link}>
            <Image src={data.image} alt="" width={100} height={100} className="h-7 w-7" />
        </Link>
    )
}
