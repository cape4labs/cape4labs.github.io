const ASSETS = {
    escaper: "/img/about/escaper.png",
    folder: "/img/about/folder.png",
}

export default function Escape() {
    return (
        <div className="flex items-center">
            <img src={ASSETS.escaper} className="h-full" />
            <div className="-translate-x-16">
                <h2 className="text-6xl font-primary text-midnight-light">CAPE4.TECH</h2>
                <h2 className="text-6xl font-primary text-midnight-light">CAPE4.LABS</h2>
                <h2 className="text-6xl font-primary text-midnight-light">CAPE4.TEAM</h2>
            </div>
        </div>
    )
}
