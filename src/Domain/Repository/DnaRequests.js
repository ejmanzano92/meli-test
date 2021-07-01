const { checkIfExistsDNAQuery, saveDNAQuery } = require('../../Database/Queries');
const { getPool } = require('../../Database/init')

const checkIfExistsDNA = (dna) => {
    return getPool().query(checkIfExistsDNAQuery, [dna])
}

const saveMutant = (dna, isMutant) => {
    return getPool().query(saveDNAQuery, [dna, isMutant])
}

module.exports = {
    checkIfExistsDNA, 
    saveMutant
}