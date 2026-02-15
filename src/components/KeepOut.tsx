import Image from "next/image"

export default function KeepOut({ style }: { style?: string }): React.ReactNode {
    return (
        <div className="w-20 justify-center flex">
            <Image
                src="/img/keepOut.png"
                alt="keep-out tape"
                width={4384}
                height={28}
                className={`z-20 max-w-none ${style}`}
            />
        </div>
    )
}
