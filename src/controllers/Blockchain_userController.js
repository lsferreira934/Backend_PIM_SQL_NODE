
const Blockchain_User = require('../models/Blockchain_user');
const status = require('http-status');
const { NOT_FOUND } = require('http-status');


// All Blockchain Users
exports.Show = async (req, res) => {
    try {
        const allUsers = await Blockchain_User.findAll();
        res.json(allUsers);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};