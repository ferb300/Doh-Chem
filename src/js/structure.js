var currentCount = 1
var id = 0

class Atom {
    constructor(element) {
        this.element = element
        this.bonds = [
            
        ]
    }

    bond(position, type, atom) {
        let b = new Bond(this, atom, type)
        this.bonds[position] = b
        atom.bonds[(position + 6) % 12] = b
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

structure.bond(5, 1, ortho)
ortho.bond(7, 1, meta)
meta.bond(9, 1, para)
para.bond(11, 1, antimeta)
antimeta.bond(1, 1, antiortho)
antiortho.bond(3, 1, structure)

ortho.bond(3, 1, new Atom("C"))

