const Bookings          = require('../models').Bookings;
const bookingService   = require('../services/BookingService');

const create = async function(req, res){
    res.setHeader('Content-Type', 'application/json');
    const body = req.body;
  
        let err, booking;

        [err, booking] = await to(bookingService.createBooking(body));

        if(err) return ReE(res, err, 422);
        return ReS(res, {message:'Successfully created new booking.'}, 201);
    
}
module.exports.create = create;

const get = async function(req, res){
    res.setHeader('Content-Type', 'application/json');
        Bookings.findAll({}).then(function(todos) {
           res.json(todos);
          });       
          
}
module.exports.get = get;