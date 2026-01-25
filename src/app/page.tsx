import Header from "../components/Header"
import Escape from "../components/Escape"
import Team from "../components/Team"
import Contact from "../components/Contact"
import Portfolio from "../components/Portfolio"
import Slide from "../components/Slide"
import WaveArtwork from "../components/WaveArtwork"
import Skills from "../components/Skills"

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <Slide id="intro" css="-translate-x-24">
                <Escape />
            </Slide>
            <Slide css="-translate-y-14">
                <Skills />
            </Slide>
            <Slide id="projects" css="-translate-y-28 -translate-x-12">
                <Portfolio />
            </Slide>
            <Slide id="team" css="-translate-y-40 translate-x-8">
                <Team />
            </Slide>
            <Slide css="-translate-y-46 -translate-x-24">
                <WaveArtwork />
            </Slide>
            <Slide id="contact" css="-translate-y-58 translate-x-12">
                <div></div>
                {/* <Contact /> */}
                <Contact />
            </Slide>
        </div>
    )
}
