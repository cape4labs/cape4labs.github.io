const ASSETS = {
    wave: "/img/waveartwork/wave.png",
}

export default function WaveArtwork() {
    return (
        <div className="object-contain">
            <img src={ASSETS.wave} className="w-full" />
            <div></div>
        </div>
    )
}
