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