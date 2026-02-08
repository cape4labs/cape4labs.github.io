export default function Header() {
    return (
        <header
            className="bg-accent flex flex-col justify-center pt-10 sm:pt-5 items-center
            text-left sm:border-8 border-black w-full border-b-8 sm:h-30 max-w-200"
        >
            {/*Div block to align text to the left*/}
            <div className="z-30">
                <h2 className="z-20">cape4.tech</h2>
                <h2 className="z-10 opacity-70 -translate-y-4">cape4.labs</h2>
                <h2 className="z-0 opacity-40 -translate-y-8">cape4.team</h2>
            </div>
        </header>
    )
}
