import Link from "next/link";

const Menu = () => {
    return (
        <div className="flex flex-col items-center">
            <button className="bg-white shadow-lg hover:bg-green-400 text-black py-2 px-4 rounded-full text-black w-80 my-5 active:scale-y-75 transition-transform"><Link href="/sandbox">Sandbox</Link></button>
            <button className="bg-white shadow-lg hover:bg-green-400 text-black py-2 px-4 rounded-full text-black w-80 my-5 active:scale-y-75 transition-transform"><Link href="/analysis">Analysis</Link></button>
            <button className="bg-white shadow-lg hover:bg-green-400 text-black py-2 px-4 rounded-full text-black w-80 my-5 active:scale-y-75 transition-transform"><Link href="/daily_puzzle">Daily Puzzle</Link></button>
        </div>

    )
}


export default Menu;