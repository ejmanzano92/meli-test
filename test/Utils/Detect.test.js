const {
    horizontalEvaluation,
    verticalEvaluation,
    obliqueEvaluation,
    obliqueEvaluationInvert,
    evaluateDnaMutantArray 
} = require('../../src/Utils/Detect');
const {
    sizeMatrix
} = require('../../src/Config/Constants')

/**
 * Unit testing for horizontalEvaluation
 */
test("Valid horizontal evaluation", () => {
    const response = horizontalEvaluation("AAAA");
    expect(response).toBe(1)
});

test("Invalid horizontal evaluation ", () => {
    const response = horizontalEvaluation("TCAC");
    expect(response).toBe(0)
});

/**
 * Unit testing for verticalEvaluation
 */
const verticalDNA = ["ATGCGA","CAGTGC","TTGTGT","AGGAGG","CCCCTA","TCACTG"];

test("Valid vertical evaluation", () => {
    const response = verticalEvaluation(verticalDNA, 2);
    expect(response).toBe(1)
});

test("Invalid eartical evaluation ", () => {
    const response = verticalEvaluation(verticalDNA, 1);
    expect(response).toBe(0)
});

/**
 * Unit testing for obliqueEvaluation
 */

const obliqueDNA = ["ATGCGA","CAGTGC","TTATGT","AGAAGG","CCCCTA","TCACTG"]

const obliqueDNA2 = ["ACGCGA","CACTGC","TCACGT","AGCCGG","CCCCTA","TCACTG"]

test("Valid oblique evaluation", () => {
    const response = obliqueEvaluation(obliqueDNA, 0);
    expect(response).toBe(1)
});

test("Invalid oblique evaluation ", () => {
    const response = obliqueEvaluation(obliqueDNA, 1);
    expect(response).toBe(0)
});

test("Invalid size invert evaluation ", () => {
    const response = obliqueEvaluation(obliqueDNA.splice(0,2), 1);
    expect(response).toBe(0)
});

test("Valid oblique evaluation slice", () => {
    const response = obliqueEvaluation(obliqueDNA2.slice(1, sizeMatrix), 0);
    expect(response).toBe(1)
});

test("Invalid oblique evaluation slice", () => {
    const response = obliqueEvaluation(obliqueDNA2.slice(2, sizeMatrix), 1);
    expect(response).toBe(0)
});


/**
 * Unit testing for obliqueEvaluationInvert
 */ 

const obliqueInvertDNA = ["ATGCGA","CAGTAC","TTAAGT","AGAAGG","CCCCTA","TCACTG"]

const obliqueInvertDNA2 = ["ATGCGA","CAATAC","TTAACT","AGTCAG","CCCCTA","TCACTG"]

test("Valid oblique invert evaluation", () => {
    const response = obliqueEvaluationInvert(obliqueInvertDNA, 5);
    expect(response).toBe(1)
});

test("Invalid oblique invert evaluation ", () => {
    const response = obliqueEvaluationInvert(obliqueInvertDNA, 1);
    expect(response).toBe(0)
});

test("Invalid size invert evaluation ", () => {
    const response = obliqueEvaluationInvert(obliqueInvertDNA.splice(0,2), 1);
    expect(response).toBe(0)
});


test("Valid oblique invert evaluation slice", () => {
    const response = obliqueEvaluationInvert(obliqueInvertDNA2.slice(1, sizeMatrix), sizeMatrix -1);
    expect(response).toBe(1)
});


test("Invalid oblique invert evaluation slice", () => {
    const response = obliqueEvaluationInvert(obliqueInvertDNA2.slice(2, sizeMatrix), sizeMatrix -1);
    expect(response).toBe(0)
});

/**
 * Unit testing for evaluateDnaMutantArray
 */ 

test("evaluation Function is possible mutant", () => {
    const mutantRows = "TAAAAT".split("");
    const response = evaluateDnaMutantArray(mutantRows);
    expect(response).toBe(1)
});

test("evaluation Function is not possible mutant 1", () => {
    const humanRows = "TTAAGT".split("");
    const response = evaluateDnaMutantArray(humanRows);
    expect(response).toBe(0)
});

test("evaluation Function is not possible mutant 2", () => {
    const humanRows2 = "AGAAGG".split("");
    const response = evaluateDnaMutantArray(humanRows2);
    expect(response).toBe(0)
});