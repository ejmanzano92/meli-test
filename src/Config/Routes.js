const express = require('express');
const app = express();
const healthRouter = require('../Application/HealthController');
const mutantRouter = require('../Application/MutantController');
const statRouter = require('../Application/StatController');
const prefix = '/meli-mutants';

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(`${prefix}/mutant/`, mutantRouter);
app.use(`${prefix}/app/`, healthRouter);
app.use(`${prefix}/stats/`, statRouter);

module.exports = app;