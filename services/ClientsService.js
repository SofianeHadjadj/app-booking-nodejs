const Clients 			= require('../models').Clients;
const validator     = require('validator');

const getUniqueKeyFromBody = function(body){
    let unique_key = body.unique_key;
    if(typeof unique_key==='undefined'){
        if(typeof body.email != 'undefined'){
            unique_key = body.email
        }else{
            unique_key = null;
        }
    }

    return unique_key;
}
module.exports.getUniqueKeyFromBody = getUniqueKeyFromBody;

const createClient = async function(clientsInfo){
    let unique_key, auth_info, err;

    auth_info={}
    auth_info.status='create';
    console.log(clientsInfo)
    Clients.create(clientsInfo);
}
module.exports.createClient = createClient;