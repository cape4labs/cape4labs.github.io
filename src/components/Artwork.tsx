const ASSETS = {
    folders: "/img/artwork/folders.png",
    hand: "/img/artwork/hand.png",
}
export default function Artwork() {
    return (
        <div className="flex flex-col items-center justify-center overflow-x-hidden">
            <img src={ASSETS.folders} className="w-30 md:w-40 lg:w-64 h-auto" />
            <img src={ASSETS.hand} className="w-full h-auto object-contain" />
        </div>
    )
}
