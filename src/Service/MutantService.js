const validArray = require('../Utils/Validation');
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
    /**
     * Returned is a Mutant
     * @param {String []} dna 
     * @returns boolean
     */
    isMutant(dna) {
        if (!this.isValid(dna)) {
            return false;
        }
        return true;
    }
}

module.exports = new MutantService();