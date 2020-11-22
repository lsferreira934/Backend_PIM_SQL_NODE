// arquivo de configuração de routes (roteamento)
const express = require('express');
const router = express.Router();
const Blockchain_User = require('../controllers/Blockchain_userController');
const Blockchain_Extract = require('../controllers/Blockchain_extractController');
const Capmoney_Client = require('../controllers/Capmoney_clientController')
const Capmoney_Employee = require('../controllers/Capmoney_employeeController');





router.post('/newuser', Blockchain_User.Insert);


//Routes about Capmoney Clients
router.post('/newClient', Capmoney_Client.Insert);
router.get('/clients', Capmoney_Client.Show);
router.post('/searchclient', Capmoney_Client.Index);
router.post('/verify', Capmoney_Client.Verication);

// Routes about Capmoney Employees
router.post('/newemployee', Capmoney_Employee.Insert);


//teste
router.post('/test', Capmoney_Client.Test);
module.exports = router;
