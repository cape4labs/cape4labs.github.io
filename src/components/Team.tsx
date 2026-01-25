const ASSETS = {
    bg: "/img/team/bg.png",
    temp: "/img/team/temp.jpg",
    isgin01: "",
    qwaq: "",
    sprutocean: "",
    omnopon: "",
}

export default function Team() {
    return (
        <div className="text-center p-5">
            <h2 className="font-primary text-6xl text-midnight-light">OUR TEAM</h2>
            <div
                className={`bg-[url(${ASSETS.bg})] mt-12 bg-cover flex items-center justify-around `}
            >
                <div className="items-center flex flex-col xl:justify-center xl:gap-12 justify-around font-secondary">
                    <div className="flex gap-6 items-center justify-center">
                        <Profile
                            imageSource={ASSETS.temp}
                            name="sprutocean"
                            quote="i'm fine thanks"
                            translateY="-translate-y-4"
                        />
                        <Profile
                            imageSource={ASSETS.temp}
                            name="qwaq"
                            quote="it's okay, don't worry"
                            translateY="-translate-y-1"
                        />
                        <Profile
                            imageSource={ASSETS.temp}
                            name="isgin01"
                            quote="no it's not right!"
                            translateY=""
                        />

                        <Profile
                            imageSource={ASSETS.temp}
                            name="omnopon"
                            quote="let's become hackers"
                            translateY="-translate-y-4"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

function Profile(data: { imageSource: string; name: string; quote: string; translateY: string }) {
    return (
        <div className={`w-72 relative ${data.translateY}`}>
            <div className="relative aspect-4/6 border-2 border-midnight-dark z-10 overflow-hidden">
                <img
                    src={data.imageSource}
                    alt={`${data.name}'s image`}
                    className="object-cover h-full"
                />
            </div>

            {/*shadow*/}
            <div
                className="absolute inset-0 translate-3
                    bg-midnight-dark border-2 border-midnight-dark z-0 aspect-4/6"
            ></div>

            <div className="h-20 w-full flex border-2 border-midnight-dark mt-6 bg-white">
                <div className="min-w-5 h-full relative border-midnight-dark flex px-2 text-3xl">
                    {data.name}
                    <div className="w-5 h-5 bg-midnight-dark absolute bottom-0 left-0" />
                </div>
            </div>
        </div>
    )
}
