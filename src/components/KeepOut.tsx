export default function KeepOut({ style }: { style?: string }): React.ReactNode {
    return (
        <div className="w-20 justify-center flex">
            <img src="/img/keepOut.png" className={`z-20 max-w-none ${style}`} />
        </div>
    )
}
