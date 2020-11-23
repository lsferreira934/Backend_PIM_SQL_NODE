// Getting essentials
const http = require('http');
const express = require('express');
const status = require('http-status');
const sequelize = require('./src/database/database');
const app = express();
const routes = require('./src/routes/routes.js');
const cors = require('cors');
const moment = require('moment');
// enable JSON
app.use(express.json());

// Adding cors (to use API's)
app.use(cors());

//
app.get('/api', function (req, res, next) {
  res.json({ msg: 'This is CORS-enabled for all origins!' });
});


app.get('/', function (req, res, next) {
  res.json({
    Bem_Vindo: 'BEM VINDO A API BLOCKCHAIN/CAPMONEY - PIM UNIP',
    Link_frontend: '',
    Link_gitHub:
      'https://github.com/lsferreira934/Backend_PIM_SQL_NODE',

    Todas_as_rotas_dispoiveis: {
      ROUTES_BLOCKCHAIN: {
        get: 'https://backendpim.herokuapp.com/api/allusers',
        post: 'https://tpbackendunip.herokuapp.com/api/extract',
        get: 'https://tpbackendunip.herokuapp.com/api/allextracts',
      },
      ROUTES_CAPMONEY_CLIENTS: {
        post: 'https://backendpim.herokuapp.com/api/verifyclient',
        get: 'https://backendpim.herokuapp.com/api/clients',
        post: 'https://backendpim.herokuapp.com/api/searchclient',
        post: 'https://backendpim.herokuapp.com/api/newClient',

      },
      ROUTES_CAPMONEY_EMPLOYEES: {
        post: 'https://backendpim.herokuapp.com/api/newemployee',
        get: 'https://backendpim.herokuapp.com/api/allemployees',

      },
    },
  });
});

// setting group's routes
app.use('/api', routes);

// Error's server, parser.json
app.use((req, res, next) => {
  res.status.apply(status.INTERNAL_SERVER_ERROR).json({ error });
});

// verify table at db_usuario and starting node server
sequelize.sync({ force: false }).then(() => {
  const port = process.env.PORT || 3003;
  app.set('port', port);
  const server = http.createServer(app);
  server.listen(port);
});
