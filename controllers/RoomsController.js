const Rooms          = require('../models').Rooms;
const roomsService   = require('../services/RoomsService');

const create = async function(req, res){
    res.setHeader('Content-Type', 'application/json');
    const body = req.body;
  
        let err, rooms;

        [err, rooms] = await to(roomsService.createRooms(body));

        if(err) return ReE(res, err, 422);
        return ReS(res, {message:'Successfully created new room.'}, 201);
    
}
module.exports.create = create;

const get = async function(req, res){
    res.setHeader('Content-Type', 'application/json');
        Rooms.findAll({}).then(function(todos) {
           res.json(todos);
          });       
          
}
module.exports.get = get;