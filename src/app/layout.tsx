import type { Metadata } from "next"
import { DotGothic16, Sorts_Mill_Goudy } from "next/font/google"
import "./globals.css"

const dotGothic16 = DotGothic16({
    weight: "400",
    variable: "--font-primary",
})

const sortsMillGoudy = Sorts_Mill_Goudy({
    weight: "400",
    variable: "--font-secondary",
})

export const metadata: Metadata = {
    title: "cape4labs",
    description: "cape4labs landing",
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en" className={`${dotGothic16.variable} ${sortsMillGoudy.variable}`}>
            <body>{children}</body>
        </html>
    )
}
