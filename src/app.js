// eslint-disable-next-line import/no-extraneous-dependencies
require('env2')('src/configuration/config.env');
const express = require('express');
const { join } = require('path');
const compression = require('compression');
const favicon = require('serve-favicon');
const controllers = require('./controlles');

const app = express();

app.disable('x-powered-by');
app.set('port', process.env.PORT || 3000);
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(favicon(join(__dirname, '..', 'public', 'favicon.ico')));
app.use(express.static(join(__dirname, '..', 'public'), { maxAge: '30d' }));

app.use(controllers);
app.use((req, res, next) => {
	res
		.status(404)
		.sendFile(join(__dirname, '..', 'public', 'errors-pages', '404.html'));
});
app.use((err, req, res, next) => {
	res
		.status(500)
		.sendFile(join(__dirname, '..', 'public', 'errors-pages', '500.html'));
});

module.exports = app;
