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

// Show All
exports.Show = async (req, res) => {
  try {
    const AllEmployees = await Capmoney_employee.findAll();
    res.json(AllEmployees);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//authenticate
exports.Login = async (req, res) => {
  try {
    const { cpf, password } = req.body;

    const cliente = await Capmoney_employee.findOne({ where: { cpf: cpf } });

    if (!cliente) {
      res.status(401).json({ error: 'Invalid CPF' });
    }

    if (cliente.password !== password) {
      res.status(401).json({ error: 'Invalid password' });
    }

    user.password = undefined;

    res.json({ cliente });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
