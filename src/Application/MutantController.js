const express = require('express');
const mutantService = require('../Service/MutantService');

const httpStatusCode = require('../Config/StatusCodes');

const mutantRouter = express.Router();

mutantRouter.post('/', (req, res) => {
    const { dna } = req.body;
    const response = mutantService.isMutant(dna);
    const responseBody = {
        mutant: response
    }
    if (response) {
        res.status(httpStatusCode.OK).send(responseBody);
        return;
    }
    res.status(httpStatusCode.FORBIDDEN).send(response);
});


module.exports = mutantRouter;