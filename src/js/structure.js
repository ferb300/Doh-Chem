var currentCount = 1
var id = 0

class Atom {
    constructor(element) {
        this.element = element
        this.bonds = [
            
        ]
    }

    bond(position, type, atom) {
        this.bonds[position] = new Bond(this, atom, type)
    }
}

class Bond {
    constructor(atom1, atom2, type) {
        this.atom1 = atom1
        this.atom2 = atom2
        this.type = type
        this.id = id
        id += 1
    }
}

var structure = new Atom("C")
var ortho = new Atom("C")
var meta = new Atom("C")
var para = new Atom("C")
var antimeta = new Atom("C")
var antiortho = new Atom("C")

structure.bond(4, 1, ortho)
ortho.bond(6, 1, meta)
meta.bond(8, 1, para)
para.bond(10, 1, antimeta)
antimeta.bond(0, 1, antiortho)
antiortho.bond(2, 1, structure)

