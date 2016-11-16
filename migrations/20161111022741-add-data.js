'use strict';

var models = require("../models");
var csvdata = require("csvdata");

module.exports = {
    up: function (queryInterface, Sequelize) {
        return csvdata.load("./seeders/mental_health.csv")
        .then(function(data) {
            return models.Data.bulkCreate(data);
        })
    },

    down: function (queryInterface, Sequelize) {
        return models.Data.destroy({where: {}});
    }
};