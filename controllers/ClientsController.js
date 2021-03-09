const Clients          = require('../models').Clients;
const clientsService   = require('../services/ClientsService');

const create = async function(req, res){
    res.setHeader('Content-Type', 'application/json');
    const body = req.body;
  
        let err, clients;

        [err, clients] = await to(clientsService.createClients(body));

        if(err) return ReE(res, err, 422);
        return ReS(res, {message:'Successfully created new client.'}, 201);
    
}
module.exports.create = create;

const get = async function(req, res){
    res.setHeader('Content-Type', 'application/json');
        Clients.findAll({}).then(function(todos) {
           res.json(todos);
          });       
          
}
module.exports.get = get;