'use strict';

const jwt           	= require('jsonwebtoken');

module.exports = (sequelize, DataTypes) => {
    var Model = sequelize.define('Bookings', {
        client_id : DataTypes.INTEGER,
        room_id : DataTypes.INTEGER,
        arrival_date : DataTypes.DATE,
        departure_date : DataTypes.DATE
    });

    return Model;
};