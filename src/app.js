// eslint-disable-next-line import/no-extraneous-dependencies
require('env2')('src/configuration/config.env');
const express = require('express');
const compression = require('compression');
const { join } = require('path');
const router = require('./controlles');

const app = express();
app.set('port', process.env.PORT || 6000);
app.use(compression());
app.use(express.static(join(__dirname, '..', 'public'), { maxAge: '30d' }));
app.use(router);

module.exports = app;
