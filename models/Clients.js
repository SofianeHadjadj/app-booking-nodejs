'use strict';

const jwt           	= require('jsonwebtoken');

module.exports = (sequelize, DataTypes) => {
    var Model = sequelize.define('Clients', {
        first_name    :    DataTypes.STRING,
        last_name    :    DataTypes.STRING,
        email    :    DataTypes.STRING
    });

    return Model;
};