
const Blockchain_extract = require('../models/Blockchain_extract');
//import { NOT_FOUND } from 'http-status';
const { NOT_FOUND } = require('http-status');

exports.Insert = async (req, res) => {
    try {
        const newBlockChainExtract = await Blockchain_extract.create(req.body);
        res.json(newBlockChainExtract);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};