const Booking 			= require('../models').Booking;
const validator     = require('validator');

const createBooking = async function(bookingInfo){
    let auth_info, err;

    auth_info={}
    auth_info.status='create';
    console.log(bookingInfo)
    Booking.create(bookingInfo);
}
module.exports.createBooking = createBooking;