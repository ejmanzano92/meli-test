const checkIfExistsDNAQuery = 'SELECT id, is_mutant FROM dna_requests WHERE dna = $1;';

const saveDNAQuery = 'INSERT INTO dna_requests("dna", "is_mutant") VALUES ($1, $2);';

module.exports = {
    checkIfExistsDNAQuery,
    saveDNAQuery
};
