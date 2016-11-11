'use strict';

var models = require("../models");
var seeders = require("seeders");

module.exports = {
    up: function (queryInterface, Sequelize) {
        return seeders.load("./mental_health.csv")
        .then(function(data) {
            return models.Data.bulkCreate(data);
        })
    },

    down: function (queryInterface, Sequelize) {
        return models.Data.destroy({where: {}});
    }
};