
const Capmoney_Client = require('../models/Capmoney_client');
const Blockchain_User = require('../models/Blockchain_user');
const status = require('http-status');
const { NOT_FOUND } = require('http-status');

// New Client - FOR TESTS
exports.Insert = async (req, res) => {
    try {
        const newClient = await Capmoney_Client.create(req.body);
        res.json(newClient);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

//Show all clients
exports.Show = async (req, res) => {
    try {
        const Allclients = await Capmoney_Client.findAll();
        res.json(Allclients);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// find one 
exports.Index = async (req, res) => {
    try {
        const { cpf } = req.body;
        const responseClient = await Capmoney_Client.findOne({ where: { cpf: cpf } });

        if (!responseClient) {
            res.status(400).json(`Desculpe, cliente com CPF ${cpf} não foi encontrado`);
        }

        res.json(responseClient);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Insert with verification - FOR PRODUCTION
exports.Verication = async (req, res) => {
    try {
        const { cpf } = req.body;
        const verifyClient = await Blockchain_User.findOne({ where: { cpf: cpf } });

        if (!verifyClient) {
            res.status(400).json(`CPF ${cpf} não encontrado na base de dados Blockchain. Por favor, verifique com sua empresa de Blockchain`);
        } else {
            const addedClient = await Capmoney_Client.create(req.body);
            res.json(addedClient);
        }

    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}; 