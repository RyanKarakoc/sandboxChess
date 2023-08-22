'use client'
const Board = () => {

    class Tile {
        constructor(row, column,) {
            this.column = column
            this.row = row
            this.colour = "bg-yellow-100"
        }
        update() {
            this.colour = "bg-green-700"
        }
    }

    const board = []
    const boardSize = 8
    const letterRef = ["a", "b", "c", "d", "e", "f", "g", "h",]

    for (let row = boardSize; row > 0; row--) {
        const rowTiles = []
        for (let column = boardSize - 1; column >= 0; column--) {
            const tile = new Tile(row, letterRef[column])
            if ((row + column) % 2 !== 0) {
                tile.update()
            }
            rowTiles.unshift(tile)
        }
        console.log(board)
        board.push(rowTiles)
    }

    return (
        <div className="flex w-fit">
            <div className="border-4 border-black" >
                {
                    // Individual Tile
                    board.map((row, rowIndex) => (
                        <div className="flex" key={rowIndex}>
                            {row.map((tile, columnIndex) => (
                                < div
                                    className={`relative h-10 md:h-20 w-10 md:w-20 ${tile.colour}`}
                                    key={`${rowIndex}-${columnIndex}`}
                                >{(
                                    // Tile Numbers
                                    <div >
                                        <div className={`absolute right-1 bottom-0 ${tile.colour === "bg-yellow-100" ? "text-green-700" : "text-yellow-100"}`}>{tile.row === 1 ? tile.column : null}
                                        </div>
                                        <div className={`absolute top-0 left-1 ${tile.colour === "bg-yellow-100" ? "text-green-700" : "text-yellow-100"}`}>{tile.column === "a" ? tile.row : null}
                                        </div>
                                    </div>
                                )}</div>
                            ))}
                        </div>
                    ))
                }
            </div>
        </div >
    );
}

export default Board