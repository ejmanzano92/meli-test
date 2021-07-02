class StatsResponse {
    /**
     * Map the stats data.
     * @param {Array[]} rows Array of result in getStatsQuery.
     * 
     * @returns 
     */
    mapToResponse (rows) {
        const row = rows[0];
        const mutantCount =  Number(row.is_mutant);
        const humanCount =  Number(row.is_human);
        return {
            "count_mutant_dna": mutantCount,
            "count_human_dna": humanCount,
            "ratio": mutantCount / Math.max(1, humanCount)
        };
    }
}

module.exports = StatsResponse;