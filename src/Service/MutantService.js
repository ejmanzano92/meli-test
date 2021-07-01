const validArray = require('../Utils/Validation');
const { horizontalEvaluation, verticalEvaluation } = require('../Utils/Detect')
const { sequenceMutant } = require('../Config/Constants');
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
            if (e === 'invalid') {
                return false;
            }
            throw e;
        }
        return true;
    }
    /**
     * Returned is a Mutant
     * @param {String []} dna 
     * @returns boolean
     */
    isMutant(dna) {
        if (!this.isValid(dna)) {
            return false;
        }
        let actualSequenceMutant = 0;
        for (let i = 0; i < dna.length; i++) {
            const actualDna = dna[i];
            actualSequenceMutant += horizontalEvaluation(actualDna) + verticalEvaluation(dna, i);
            if (actualSequenceMutant >= sequenceMutant) {
                break;
            }   
        }
        return actualSequenceMutant >= sequenceMutant;
    }
}

module.exports = new MutantService();