const express = require('express');
const router = express.Router();

const GetRooms = require('./../controllers/GetRooms');

const path = require('path');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({status:"success", message:"Parcel Pending API", data:{"version_number":"v1.0.0"}})
});
                                             
router.get('/rooms', GetRooms.get);          

module.exports = router;