const ASSETS = {
    text: `Cape4labs is an independent web development studio with a
tiny but dedicated team of four.

Our primary expertise lies in JavaScript technologies, with a
strong specialization in the web3 domain. We’ve built
impactful solutions in areas such as blockchain privacy, on-
chain data crowdsourcing, and decentralized finance.

Beyond web3, we also deliver high-quality traditional web
applications. Personal websites, marketplaces, analytics
dashboards, and chatbot solutions are just a short list of
the projects we can build to meet your needs.
`,
}

export default function Skills() {
    return (
        <div className="flex flex-col items-center p-20">
            <h2 className="font-primary text-6xl mb-15 text-midnight-light">OUR SKILLS</h2>
            <pre className="font-secondary text-3xl text-midnight-dark">{ASSETS.text}</pre>
        </div>
    )
}
