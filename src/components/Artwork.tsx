const ASSETS = {
    folders: "/img/artwork/folders.png",
    hand: "/img/artwork/hand.png",
}
export default function Artwork() {
    return (
        <div className="h-324 w-full flex flex-col items-center relative">
            <img src={ASSETS.folders} className="w-64 h-auto absolute top-32 z-10" />
            <img
                src={ASSETS.hand}
                className="w-full h-auto absolute bottom-32 object-contain z-0"
            />
        </div>
    )
}
