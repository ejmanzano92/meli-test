const MutantService = require('../../src/Service/MutantService');
jest.mock('../../src/Domain/Repository/DnaRequests', () => ({
    checkIfExistsDNA: () => Promise.resolve({rows: []}),
    saveMutant: () => true
}));


const dna = ["ATGCGA","CAGTGC","TTATGT","AGAAGG","CCCCTA","TCACTG"];
const dnaValid2 = ["AAAAGA","CACTGC","TTCAGT","AGACAG","TCCCCC","TCACTC"]; // oblique slice
const dnaValid3 = ["ATGCGA","AAGTGC","TAATGT","AGAAGG","CCCATA","CCCCTC"]; // oblique slice invert
const dnaInvalid1 = ["ATGCGA","CAGTGC","TTATGT","AGAAGG","CCCCTA"];
const dnaInvalid2 = ["ATGCGA","CAGTGC","TTATGT","AGAAGG","CCCCTA","TACTG"];
const dnaHuman = ["ATGCGA","CAGTGC","TTATGT","AGTACG","CCCATA","TCACTG"];

test("it's a mutant", async () => {
    const response = await MutantService.isMutant(dna);
    expect(response).toBe(true)
});

test("it's a mutant 2", async () => {
    const response = await MutantService.isMutant(dnaValid2);
    expect(response).toBe(true)
});

test("it's a mutant 3", async () => {
    const response = await MutantService.isMutant(dnaValid3);
    expect(response).toBe(true)
});

test("it's a human", async () => {
    const response = await MutantService.isMutant(dnaHuman);
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