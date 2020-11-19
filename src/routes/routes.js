// arquivo de configuração de routes (roteamento)
const express = require('express');
const router = express.Router();
const Blockchain_User = require('../controllers/Blockchain_userController');
const Capmoney_Client = require('../controllers/Capmoney_clientController')



router.post('/newuser', Blockchain_User.Insert);
router.post('/newClient', Capmoney_Client.Insert);






module.exports = router;
