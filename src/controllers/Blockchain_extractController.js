
const Blockchain_extract = require('../models/Blockchain_extract');
const Blockchain_User = require('../models/Blockchain_user');
const { NOT_FOUND } = require('http-status');
const sequelize = require('../database/database');


exports.Extract = async (req, res) => {
    try {
        const searchCPF = req.body.cpf;
        const verifyCPF = await Blockchain_User.findOne({ where: { cpf: searchCPF } });

        if (!verifyCPF) {
            return res.status(400).json({ error: `CPF não encontrado ou não há extratos disponíveis` });
        }

        const [responseExtract] = await sequelize.query(`SELECT * FROM vw_users_extract WHERE cpf = ${searchCPF}`);

        res.json(responseExtract);

    } catch (error) {
        res.status(400).json({ error: error.message });
    }

};