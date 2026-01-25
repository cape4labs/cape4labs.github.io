import Link from "next/link"

const ASSETS = {
    folders: "/img/portfolio/folders.png",
    zauth_link: "https://github.com/cape4labs/zauth_frontend",
    sf_link: "https://github.com/cape4labs/sunflower_wallet_app",
    audata_link: "https://github.com/cape4labs/audatadao_dlp_ui",
}

export default function Portfolio() {
    return (
        <div className="relative p-10 font-primary">
            <h2 className="text-6xl text-midnight-light">OUR PORTFOLIO</h2>
            <div className="ml-20 flex flex-col gap-12  text-5xl mt-20 text-midnight-dark">
                <Link href={ASSETS.zauth_link}>Zauth</Link>
                <Link href={ASSETS.sf_link}>SF Wallet</Link>
                <Link href={ASSETS.audata_link}>Audata</Link>
            </div>
            <img src={ASSETS.folders} className="w-124 absolute right-25 top-0" />
        </div>
    )
}
