const express = require('express');

const healthRouter = express.Router();

healthRouter.get('/health-check', (req, res) => {
    res.send('Up!')
});


module.exports = healthRouter;