const checkIfExistsDNAQuery = 'SELECT id, is_mutant FROM dna_requests WHERE dna = $1;';

const saveDNAQuery = 'INSERT INTO dna_requests("dna", "is_mutant") VALUES ($1, $2);';

const getStatsQuery = "SELECT COUNT(*) filter(where is_mutant = true) is_mutant, " +
                        "COUNT(*) filter(where is_mutant = false) is_human " +
                        "FROM dna_requests;";

module.exports = {
    checkIfExistsDNAQuery,
    saveDNAQuery,
    getStatsQuery
};
