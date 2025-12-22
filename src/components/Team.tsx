import Image from "next/image"

const ASSETS = {
    temp: "/img/team/temp.jpg",
    isgin01: "",
    qwaq: "",
    sprutocean: "",
    omnopon: "",
}

export default function Team() {
    return (
        <>
            <h2>Our team</h2>
            <div className="flex flex-col xl:flex-row items-center justify-around xl:justify-center xl:gap-12 mx-5">
                <div className="flex flex-col gap-12 items-center justify-center md:flex-row">
                    <Profile imageSource={ASSETS.temp} name="isgin01" quote="no it's not right!" />
                    <Profile imageSource={ASSETS.temp} name="qwaq" quote="it's okay, don't worry" />
                </div>
                <div className="flex flex-col gap-12 items-center justify-center md:flex-row mt-5">
                    <Profile imageSource={ASSETS.temp} name="sprutocean" quote="i'm fine thanks" />
                    <Profile
                        imageSource={ASSETS.temp}
                        name="omnopon"
                        quote="let's become hackers"
                    />
                </div>
            </div>
        </>
    )
}

function Profile(member: { imageSource: string; name: string; quote: string }) {
    return (
        <div className="w-72 text-midnight font-primary relative">
            <div className="relative w-full h-100 border-2 border-midnight bg-white z-10 overflow-hidden">
                <Image
                    src={member.imageSource}
                    alt={`${member.name}'s image`}
                    width={400}
                    height={400}
                    className="w-full h-full object-cover"
                />
            </div>

            <div
                className="absolute inset-0 translate-x-4 translate-y-4
                    bg-midnight border-2 border-midnight z-0 h-100"
            ></div>

            <div className="h-20 w-full flex border-2 border-midnight mt-8">
                <div className="flex-1">
                    <div className="bg-midnight h-6 w-full" />
                    <div className="h-full w-full p-2">{member.quote}</div>
                </div>

                <div className="min-w-5 h-full relative text-2xl border-l-2 border-midnight flex items-center px-2">
                    {member.name}
                    <div className="w-5 h-5 bg-midnight absolute bottom-0 left-0" />
                </div>
            </div>
        </div>
    )
}
