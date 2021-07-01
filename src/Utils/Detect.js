const { sizeMatrix, letterRows, sequenceMutant } = require('../Config/Constants');

const evaluateArray = (actualDna) => {
    let sequenceCant = 0;
    for (let index = 0; index < sizeMatrix; index++) {
        if (new Set(actualDna.slice(index,index + letterRows)).size === 1) {
            sequenceCant = 1;
            break;
        }
        if ((sizeMatrix - (index + letterRows + 1)) < 0) {
            break;
        }
    }
    return sequenceCant;
}

const horizontalEvaluation = (sequence) => {
    const actualDna = sequence.split("");

    return evaluateArray(actualDna);
}

const verticalEvaluation = (dna, i) => {
    const actualDna = dna.map(d => d.charAt(i));
    return evaluateArray(actualDna);
    
}

module.exports = { horizontalEvaluation, verticalEvaluation };