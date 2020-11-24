const Blockchain_registerTransaction = require('../models/Blockchain_registerTransaction');
const status = require('http-status');
const { NOT_FOUND } = require('http-status');

// new employee
exports.AllTransactions = async (req, res) => {
    try {
        const allTransactions = await Blockchain_registerTransaction.findAll();
        res.json(allTransactions);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.SearchTransaction = async (req, res) => {
    try {
        const search = req.body.cpf;
        const responseTransaction = await Blockchain_registerTransaction.findAll({ where: { cpf_origin: search } });

        res.send(responseTransaction);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};