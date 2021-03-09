const Rooms 			= require('../models').Rooms;
const validator     = require('validator');

const getUniqueKeyFromBody = function(body){
    let unique_key = body.unique_key;
    if(typeof unique_key==='undefined'){
        if(typeof body.room_name != 'undefined'){
            unique_key = body.room_name
        }else{
            unique_key = null;
        }
    }

    return unique_key;
}
module.exports.getUniqueKeyFromBody = getUniqueKeyFromBody;

const createRoom = async function(roomsInfo){
    let unique_key, auth_info, err;

    auth_info={}
    auth_info.status='create';
    console.log(roomsInfo)
    Rooms.create(roomsInfo);
}
module.exports.createRoom = createRoom;