const { sizeMatrix, letterRows, sequenceMutant } = require('../Config/Constants');

const evaluateDnaMutantArray = (actualDna) => {
    let sequenceCant = 0;
    for (let index = 0; index < sizeMatrix; index++) {
        const dnaToEvalute = actualDna.slice(index,index + letterRows);
        if (dnaToEvalute.length < letterRows) {
            break;
        }
        if (new Set(dnaToEvalute).size === 1) {
            sequenceCant = 1;
            break;
        }
    }
    return sequenceCant;
}

const horizontalEvaluation = (sequence) => {
    const actualDna = sequence.split("");

    return evaluateDnaMutantArray(actualDna);
}

const verticalEvaluation = (dna, i) => {
    const actualDna = dna.map(d => d.charAt(i));
    return evaluateDnaMutantArray(actualDna);
    
}

const obliqueEvaluation = (dna, i) => {
    if ((i + letterRows) > sizeMatrix || dna.length < letterRows) {
        return 0;
    }
    const actualDna = dna.map((d, index) => d.charAt(i + index));
    return evaluateDnaMutantArray(actualDna);
    
}

const obliqueEvaluationInvert = (dna, i) => {
    if ((i - letterRows) < 0  || dna.length < letterRows) {
        return 0;
    }
    const actualDna = dna.map((d, index) => { return d.charAt(i - index)});
    return evaluateDnaMutantArray(actualDna);
}

module.exports = {
    horizontalEvaluation,
    verticalEvaluation,
    obliqueEvaluation,
    obliqueEvaluationInvert,
    evaluateDnaMutantArray
};