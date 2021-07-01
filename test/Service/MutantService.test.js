const MutantService = require('../../src/Service/MutantService')

const dna = ["ATGCGA","CAGTGC","TTATGT","AGAAGG","CCCCTA","TCACTG"]
const dnaInvalid1 = ["ATGCGA","CAGTGC","TTATGT","AGAAGG","CCCCTA"]
const dnaInvalid2 = ["ATGCGA","CAGTGC","TTATGT","AGAAGG","CCCCTA","TACTG"]
const dnaHuman = ["ATGCGA","CAGTGC","TTATGT","AGTACG","CCCATA","TCACTG"]

test("it's a mutant", () => {
    const response = MutantService.isMutant(dna);
    expect(response).toBe(true)
});


test("it's a human", () => {
    const response = MutantService.isMutant(dnaHuman);
    expect(response).toBe(false)
});

test("it's a dna", () => {
    const response = MutantService.isValid(dna);
    expect(response).toBe(true)
});
 
test("invalid dna 1", () => {
    const response = MutantService.isValid(dnaInvalid1);
    expect(response).toBe(false)
});

test("invalid dna 2", () => {
    const response = MutantService.isValid(dnaInvalid2);
    expect(response).toBe(false)
});