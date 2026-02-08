import Header from "../components/Header"
import Escape from "../components/Escape"
import Team from "../components/Team"
import Contact from "../components/Contact"
import Experience from "../components/Experience"

export default function Home() {
    return (
        <div className="md:flex md:flex-col md:py-10 md:items-center font-primary text-4xl overflow-hidden">
            <Header />
            <Escape />
            <Experience />
            <Team />
            <Contact />
        </div>
    )
}
