import "../globals.css";
import Image from "next/image";
import headerBackground from "../../../public/sandboxChessImage.png";

const Header = () => {
    return (
        <div class="flex flex-col items-center mt-10">
            <Image src={headerBackground} alt="Sandbox Chess" />
        </div>

    )
}


export default Header