
const Blockchain_User = require('../models/Blockchain_user');
const status = require('http-status');
const { NOT_FOUND } = require('http-status');

exports.Insert = async (req, res) => {
    try {
        const newBlockChainUser = await Blockchain_User.create(req.body);
        res.json(newBlockChainUser);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};