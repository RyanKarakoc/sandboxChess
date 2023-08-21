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

    for (let row = 1; row <= boardSize; row++) {
        const rowTiles = []
        for (let column = 0; column < boardSize; column++) {
            const tile = new Tile(row, letterRef[column])
            if ((row + column) % 2 !== 0) {
                tile.update()
            }
            rowTiles.push(tile)
        }
        board.push(rowTiles)
    }


    return (
        <div className="flex w-fit">
            < div className="border-4 border-black" >
                {
                    board.map((row, rowIndex) => (
                        <div className="flex" key={rowIndex}>
                            {row.map((tile, columnIndex) => (
                                <div
                                    className={`tile h-20 w-20 p-4 ${tile.colour}`}
                                    key={`${rowIndex}-${columnIndex}`}
                                ></div>
                            ))}
                        </div>
                    ))
                }
            </div >
        </div >
    );
}

export default Board