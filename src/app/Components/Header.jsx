import "../globals.css";
import Image from "next/image";
import headerBackground from "../../../public/sandboxChessImage.png";

const Header = () => {
    return (
        <div className="flex flex-col items-center mt-10 mb-20">
            <Image src={headerBackground} alt="Sandbox Chess " />
        </div>

    )
}


export default Header