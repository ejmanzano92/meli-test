const express = require('express');
const HttpStatusCode = require('../Config/StatusCodes');
const statService = require('../Service/StatService');

const stastRouter = express.Router();

stastRouter.get('/', async (req, res) => {
    const response = await statService.getStat();
    res.status(HttpStatusCode.OK).send(response);
});


module.exports = stastRouter;