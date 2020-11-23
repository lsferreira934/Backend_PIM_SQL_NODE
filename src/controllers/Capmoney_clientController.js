const Capmoney_Client = require('../models/Capmoney_client');
const Blockchain_User = require('../models/Blockchain_user');

// New Client with verification - FOR PRODUCTION
exports.Verication = async (req, res) => {
  try {
    const { cpf } = req.body;
    const verifyClient = await Blockchain_User.findOne({ where: { cpf: cpf } });

    if (!verifyClient) {
      res
        .status(400)
        .json(
          `CPF ${cpf} não encontrado na base de dados Blockchain. Por favor, verifique com sua empresa de Blockchain`
        );
    } else {
      const addedClient = await Capmoney_Client.create(req.body);
      res.json(addedClient);
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

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
    const responseClient = await Capmoney_Client.findOne({
      where: { cpf: cpf },
    });

    if (!responseClient) {
      res
        .status(400)
        .json(`Desculpe, cliente com CPF ${cpf} não foi encontrado`);
    }

    res.json(responseClient);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//authenticate
exports.Login = async (req, res) => {
  try {
    const { cpf, password } = req.body;

    const user = await Capmoney_Client.findOne({ where: { cpf } });

    if (cpf) {
      res.status(400).send({ error: 'Invalid CPF ' });
    }

    // if (user.password !== password) {
    //   res.status(400).send({ error: 'Invalid password' });
    // }

    // user.password = undefined;

    // res.json({ user });
  } catch (error) {
    res.status(400).send({ error: 'Invalid ' });
  }
};
