const { sizeMatrix, validCharactersEnum } = require('../Config/Constants');
const validHorizontalSize  = (dna) => {
    return dna.length === sizeMatrix;
}

const validVerticallSize  = (dna) => {
    return dna.join("").length === Math.pow(sizeMatrix,2)
}

const validCharacters  = (dna) => {
    return dna
        .join("")
        .split("")
        .filter((a) => !validCharactersEnum.includes(a))
        .length === 0;
    
}

module.exports = [validHorizontalSize, validVerticallSize, validCharacters];