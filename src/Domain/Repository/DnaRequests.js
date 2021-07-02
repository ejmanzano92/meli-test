const { checkIfExistsDNAQuery, saveDNAQuery, getStatsQuery } = require('../../Database/Queries');
const { getPool } = require('../../Database/init')

const checkIfExistsDNA = (dna) => {
    return getPool().query(checkIfExistsDNAQuery, [dna])
}

const saveMutant = (dna, isMutant) => {
    return getPool().query(saveDNAQuery, [dna, isMutant])
}

const getStatDB = () => {
    return getPool().query(getStatsQuery)
}

module.exports = {
    checkIfExistsDNA, 
    saveMutant,
    getStatDB
}