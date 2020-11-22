// arquivo de configuração de routes (roteamento)
const express = require('express');
const router = express.Router();

const Blockchain_User = require('../controllers/Blockchain_userController');
const Blockchain_Extract = require('../controllers/Blockchain_extractController');

const Capmoney_Client = require('../controllers/Capmoney_clientController');
const Capmoney_Employee = require('../controllers/Capmoney_employeeController');


// routes about Blockchain
router.get('/allusers', Blockchain_User.Show);
router.post('/extract', Blockchain_Extract.Extract);
router.get('/allextracts', Blockchain_Extract.AllExtracts);


//Routes about Capmoney Clients
router.post('/verifyclient', Capmoney_Client.Verication);
router.get('/clients', Capmoney_Client.Show);
router.post('/searchclient', Capmoney_Client.Index);
// for tests
router.post('/newClient', Capmoney_Client.Insert);


// Routes about Capmoney Employees
router.post('/newemployee', Capmoney_Employee.Insert);
router.get('/allemployees', Capmoney_Employee.Show);


module.exports = router;
