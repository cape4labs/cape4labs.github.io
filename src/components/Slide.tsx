export default function Slide({
    children,
    css,
    id,
}: {
    children: React.ReactNode
    css?: string
    id?: string
}) {
    return (
        <section
            id={id}
            className={`border-12 m-auto border-black aspect-2/1 w-4/6 bg-white ${css}`}
        >
            {children}
        </section>
    )
}
