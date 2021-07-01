const { horizontalEvaluation, verticalEvaluation } = require('../../src/Utils/Detect');

test("Valid horizontal evaluation", () => {
    const response = horizontalEvaluation("AAAA");
    expect(response).toBe(1)
});

test("Invalid horizontal evaluation ", () => {
    const response = horizontalEvaluation("TCAC");
    expect(response).toBe(0)
});
const dnaVertical = ["ATGCGA","CAGTGC","TTGTGT","AGGAGG","CCCCTA","TCACTG"];

test("Valid vertical evaluation", () => {
    const response = verticalEvaluation(dnaVertical, 2);
    expect(response).toBe(1)
});

test("Invalid vartical evaluation ", () => {
    const response = verticalEvaluation(dnaVertical, 1);
    expect(response).toBe(0)
});