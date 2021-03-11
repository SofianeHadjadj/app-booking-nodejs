const Bookings 			= require('../models').Bookings;
const validator     = require('validator');

const createBooking = async function(bookingInfo){
    let auth_info, err;

    auth_info={}
    auth_info.status='create';
    console.log(bookingInfo)
    Bookings.create(bookingInfo);
}
module.exports.createBooking = createBooking;