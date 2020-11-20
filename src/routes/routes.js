// arquivo de configuração de routes (roteamento)
const express = require('express');
const router = express.Router();
const Blockchain_User = require('../controllers/Blockchain_userController');
const Capmoney_Client = require('../controllers/Capmoney_clientController')



router.post('/newuser', Blockchain_User.Insert);

//Routes about Capmoney
router.post('/newClient', Capmoney_Client.Insert);
router.get('/clients', Capmoney_Client.Show);
router.post('/searchclient', Capmoney_Client.Index);
router.post('/veriry', Capmoney_Client.Verication);




module.exports = router;
