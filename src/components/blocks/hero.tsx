import Image from "next/image";
import '../../app/globals.css'

export default function Hero() {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <Image src="/long_logo.png" alt="logo" width={800} height={800} />
        </div>
    )
}