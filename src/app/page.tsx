import Header from "../components/Header"
import About from "../components/About"
import Team from "../components/Team"
import Footer from "../components/Footer"

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen bg-white">
            <Header />
            <About />
            <Team />
            <Footer />
        </div>
    )
}
