import type { Metadata } from "next"
import { Bungee_Shade, Russo_One } from "next/font/google"
import "./globals.css"

const fontPrimary = Bungee_Shade({
    weight: "400",
    variable: "--font-primary",
})

const fontSeconary = Russo_One({
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
        <html lang="en" className={`${fontPrimary.variable} ${fontSeconary.variable}`}>
            <body>{children}</body>
        </html>
    )
}
