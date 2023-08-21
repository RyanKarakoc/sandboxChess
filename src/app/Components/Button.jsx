const Menu = () => {
    return (
        <div className="flex flex-col items-center">
            <button className="bg-white shadow-lg hover:bg-green-400 text-black py-2 px-4 rounded-full text-black w-80 my-5 active:scale-y-75 transition-transform">Sandbox</button>
            <button className="bg-white shadow-lg hover:bg-green-400 text-black py-2 px-4 rounded-full text-black w-80 my-5 active:scale-y-75 transition-transform">Analysis</button>
            <button className="bg-white shadow-lg hover:bg-green-400 text-black py-2 px-4 rounded-full text-black w-80 my-5 active:scale-y-75 transition-transform">Daily Puzzle</button>
        </div>

    )
}


export default Menu;