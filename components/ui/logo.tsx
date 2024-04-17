import veradevLogo from "../../public/images/veradev_logo.svg";
import Image from "next/image";

export default function Logo({width = 100}) {
    return (
        <>
            <Image
                priority
                src={veradevLogo}
                alt="Veradev Logo"
                width={width}/>
        </>
    )
}
