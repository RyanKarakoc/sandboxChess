export class Piece {
    constructor(type, colour, representation) {
        this.type = type
        this.colour = colour
        this.representation = representation
    }
}

export class Pawn extends Piece {
    constructor(colour, representation) {
        super("pawn", colour, representation)
    }
    movement(startTile, endTile) {
        console.log(endTile)
        if (startTile.row === 2 && this.colour == "white" && (endTile.row === 4 && (endTile.column === startTile.column) || endTile.row === 3 && (endTile.column === startTile.column))) {
            console.log("1")
            return true
        }   else if(startTile.row === 7 && this.colour == "black" && (endTile.row === 6 || endTile.row === 5)) {
            console.log("2")
            return true
        }   else {
            console.log("3")
            return false
        }
    }
}

export class Rook extends Piece {
    constructor(colour,representation) {
        super("rook", colour, representation )
    }
}

export class Knight extends Piece {
    constructor(colour,representation) {
        super("knight", colour, representation )
    }
}

export class Bishop extends Piece {
    constructor(colour,representation) {
        super("bishop", colour, representation )
    }
}

export class Queen extends Piece {
    constructor(colour,representation) {
        super("queen", colour, representation )
    }
}

export class King extends Piece {
    constructor(colour,representation) {
        super("king", colour, representation )
    }
}