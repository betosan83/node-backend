const express = require('express');

const routes = express.Router();

routes.get('/', (req, res) => {
    return res.json({ message: `Hello ${req.query.name}`});
});

routes.post('/devs', (req, res) => {
    returnres.json({ ok: true });
});

module.exports = routes;