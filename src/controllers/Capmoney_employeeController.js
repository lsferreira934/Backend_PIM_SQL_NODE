const Capmoney_employee = require('../models/Capmoney_employee');
const status = require('http-status');
const { NOT_FOUND } = require('http-status');

// new employee
exports.Insert = async (req, res) => {
    try {
        const newEmployee = await Capmoney_employee.create(req.body);
        res.json(newEmployee);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};