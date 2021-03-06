const express = require('express');
const router = express.Router();

const RoomsController = require('../controllers/RoomsController');
const ClientsController = require('../controllers/ClientsController');
const BookingController = require('../controllers/BookingController');

const path = require('path');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({status:"success", message:"Parcel Pending API", data:{"version_number":"v1.0.0"}})
});
                                             
router.get('/rooms', RoomsController.get);   
router.get('/clients', ClientsController.get);  
router.get('/booking', BookingController.get);  

router.post('/writebooking', BookingController.create);

module.exports = router;