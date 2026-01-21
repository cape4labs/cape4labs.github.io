const FOLDER_COUNT = 9

const ASSETS = {
    center: "/img/info/escaper.png",
    folder: "/img/info/folder.png",
}

export default function About() {
    return (
        <main className="mt-24 relative flex w-full lg:max-w-5/6 h-auto flex-col items-center md:justify-between xl:justify-around py-12 px-6 lg:flex-row md:px-12">
            <article className="max-w-prose leading-relaxed text-midnight text-left w-full">
                <h2 className="mb-4 text-3xl font-bold font-secondary w-full">//EMPTY//</h2>
                <p className="font-primary w-full text-lg sm:text-xl">//EMPTY//</p>
            </article>

            <section className="relative flex aspect-square h-100 sm:h-150 lg:h-auto max-w-100 items-center justify-center">
                <RotatingFolders />
            </section>
        </main>
    )
}

function RotatingFolders() {
    return (
        <div className="relative flex h-full w-full justify-center items-center">
            <div className="relative z-9 w-30 h-30 sm:w-40 sm:h-40  lg:w-56 lg:h-56 overflow-hidden p-2 items-center">
                <img src={ASSETS.center} alt="Central icon" className="object-contain" />
            </div>

            <div className="absolute inset-0 animate-spin-slow [--radius:-140px] sm:[--radius:-180px]  lg:[--radius:-220px] ">
                {Array.from({ length: FOLDER_COUNT }).map((_, i) => (
                    <Folder key={i} index={i} />
                ))}
            </div>
        </div>
    )
}

function Folder({ index }: { index: number }) {
    const angle = (index / FOLDER_COUNT) * 360

    return (
        <div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-transform duration-300 hover:scale-110"
            style={{
                transform: `rotate(${angle}deg) translateY(var(--radius)) rotate(${-angle}deg)`,
            }}
        >
            <div className="relative animate-spin-slow-reverse h-16 w-16 sm:h-24 sm:w-24 lg:h-30 lg:w-30">
                <img
                    src={ASSETS.folder}
                    alt={`Folder ${index + 1}`}
                    className="w-full h-full object-contain"
                />
            </div>
        </div>
    )
}
