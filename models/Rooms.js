'use strict';

const jwt           	= require('jsonwebtoken');

module.exports = (sequelize, DataTypes) => {
    var Model = sequelize.define('Rooms', {
        room_name    :    DataTypes.STRING
    });

    return Model;
};