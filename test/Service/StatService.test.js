const StatService = require('../../src/Service/StatService');
jest.mock('../../src/Domain/Repository/DnaRequests', () => ({
    getStatDB: () => Promise.resolve({ rows: [ { is_mutant: '5', is_human: '0' }] })
}));

test('test of mapping.', async () => {
    const response = await StatService.getStat();
    expect(JSON.stringify(response)).toBe(
        JSON.stringify({
            "count_mutant_dna": 5,
            "count_human_dna": 0,
            "ratio": 5
          })
    )
})