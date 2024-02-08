import "../globals.css";
import Image from "next/image";
import Link from "next/link";
import headerBackground from "../../../public/SandboxChessImage.png";

const Header = () => {
  return (
    <div className="flex flex-col items-center mt-10 mb-20">
      <Link href="/">
        <Image src={headerBackground} alt="Sandbox Chess" />
      </Link>
    </div>
  );
};

export default Header;
