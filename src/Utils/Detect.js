const { sizeMatrix, letterRows, sequenceMutant } = require('../Config/Constants');

/**
 * basic function for evaluate the gen combination.
 * @param {String[]} actualDna the gen combination for each 
 * iterator
 * @returns number, 0 = dont mutant gen, 1 = one mutant combination.
 */
const evaluateDnaMutantArray = (actualDna) => {
    let sequenceCant = 0;
    for (let index = 0; index < sizeMatrix; index++) {
        const dnaToEvalute = actualDna.slice(index,index + letterRows);
        const rows = new Set(dnaToEvalute);
        // si la resta del tamaño del actualDna y las diferentes characters mas el index es menor 
        // o igual a la diferencia entre el tamaño original de la matriz y los rows seguidos para 
        // cumplir entonces no hay mas combinaciones posibles.
        const validationSizing = (actualDna.length - rows.size - index) <= (sizeMatrix - letterRows);
        if (dnaToEvalute.length < letterRows || validationSizing) {
            break;
        }
        if (rows.size === 1) {
            sequenceCant = 1;
            break;
        }
    }
    return sequenceCant;
}

/**
 * Evaluate horizontal condictons
 * @param {*} sequence the gen combination.
 * @returns 
 */
const horizontalEvaluation = (sequence) => {
    const actualDna = sequence.split("");

    return evaluateDnaMutantArray(actualDna);
}

/**
 * Evaluate horizontal condicton
 * @param {String[]} dna all dna sequences
 * @param {Number} iterator iterator of principal for.
 * @returns 
 */
const verticalEvaluation = (dna, i) => {
    const actualDna = dna.map(d => d.charAt(i));
    return evaluateDnaMutantArray(actualDna);
    
}

/**
 * Evaluate oblique condicton
 * @param {String[]} dna all dna sequences
 * @param {Number} iterator iterator of principal for.
 * @returns 
 */
const obliqueEvaluation = (dna, i) => {
    if ((i + letterRows) > sizeMatrix || dna.length < letterRows) {
        return 0;
    }
    const actualDna = dna.map((d, index) => d.charAt(i + index));
    return evaluateDnaMutantArray(actualDna);
    
}


/**
 * Evaluate invert oblique condicton
 * @param {String[]} dna all dna sequences
 * @param {Number} iterator iterator of principal for.
 * @returns 
 */

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