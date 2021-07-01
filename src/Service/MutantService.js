const validArray = require('../Utils/Validations');
const { horizontalEvaluation, verticalEvaluation, obliqueEvaluation, obliqueEvaluationInvert } = require('../Utils/Detect')
const { sequenceMutant, sizeMatrix } = require('../Config/Constants');
const { checkIfExistsDNA, saveMutant } = require('../Domain/Repository/DnaRequests')
class MutantService {
    /**
     * Determine if a DNA is valid
     * @param {String []} dna 
     * @returns boolean
     */
    isValid(dna) {
        try {
            validArray.forEach(validatorFun => {
                if (!validatorFun(dna)) {
                    throw 'invalid';
                }
            });
        } catch (e) {
            return false;
        }
        return true;
    }
    async checkIfExists(dna) {
        const ifExists = await checkIfExistsDNA(dna.join());
        const row = ifExists.rows[0];
        return row && row.is_mutant;
    }
    async saveRequest(dna, result) {
        saveMutant(dna.join(), result)
    }
    /**
     * Returned is a Mutant
     * @param {String []} dna 
     * @returns boolean
     */
    async isMutant(dna) {
        let result = false;
        if (!this.isValid(dna)) {
            return false;
        }
        result = await this.checkIfExists(dna)
        if (result !== undefined) {
            return result;
        }
        let actualSequenceMutant = 0;
        for (let i = 0; i < dna.length; i++) {
            const actualDna = dna[i];
            const sliceDna = dna.slice(i + 1, sizeMatrix);
            actualSequenceMutant += 
                horizontalEvaluation(actualDna) + 
                verticalEvaluation(dna, i) +
                obliqueEvaluation(dna, i) + 
                obliqueEvaluation(sliceDna, 0) + 
                obliqueEvaluationInvert(dna, sizeMatrix - (i + 1)) +
                obliqueEvaluationInvert(dna.slice(0, sizeMatrix - i - 1), sizeMatrix -1 );
            if (actualSequenceMutant >= sequenceMutant) {
                break;
            }
        }
        result = actualSequenceMutant >= sequenceMutant
        this.saveRequest(dna, result)
        return result;
    }
}

module.exports = new MutantService();