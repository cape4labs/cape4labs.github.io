import KeepOut from "./KeepOut"

const ASSETS = {
    magician: "/img/magician.png",
    hand: "/img/hand.png",
}

export default function Contact() {
    return (
        <div className="flex flex-col text-center pt-10 md:pt-5 bg-white border-black md:border-8 md:mt-2 max-w-200 pb-5">
            <h2 className="font-primary text-5xl text-midnight-soft z-30">
                CONTACT US
                <br />
                TO BUILD YOUR
                <br />
                DREAM PROJECT
            </h2>
            <img src={ASSETS.hand} className="w-full object-contain mb-5 z-40" />
            <h2 className="font-primary text-xl md:text-4xl text-midnight-light z-30">
                cape4labs@proton.me
            </h2>
            <KeepOut style="h-9 rotate-[4.2deg]" />
            <div className="md:hidden w-full mt-5 overflow-x-clip">
                <img
                    src={ASSETS.magician}
                    className="w-full h-full object-center object-contain scale-150"
                />
            </div>
        </div>
    )
}
