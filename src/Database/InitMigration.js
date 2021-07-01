const run = async (client) => {
    const result = await client.query(`
        CREATE TABLE IF NOT EXISTS dna_requests (
            id             SERIAL              NOT NULL,
            dna            VARCHAR(255) UNIQUE NOT NULL,
            is_mutant      BOOLEAN             NOT NULL,
            created_at     TIMESTAMP           NOT NULL DEFAULT now(),
            CONSTRAINT dna_requests_pk PRIMARY KEY (id)
        );
    `);
}

module.exports = run;