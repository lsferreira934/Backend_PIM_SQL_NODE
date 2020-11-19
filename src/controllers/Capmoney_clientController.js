
const Capmoney_Client = require('../models/Capmoney_client');
const status = require('http-status');
const { NOT_FOUND } = require('http-status');

exports.Insert = async (req, res) => {
    try {
        const newCapmoneyClient = await Capmoney_Client.create(req.body);
        res.json(newCapmoneyClient);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};