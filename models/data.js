'use strict';
module.exports = function(sequelize, DataTypes) {
  var Data = sequelize.define('Data', {
    age: DataTypes.INTEGER,
    gender: DataTypes.STRING,
    country: DataTypes.STRING,
    state: DataTypes.STRING,
    self_employed: DataTypes.STRING,
    family_history: DataTypes.STRING,
    treatment: DataTypes.STRING,
    work_interfere: DataTypes.STRING,
    no_employees: DataTypes.STRING,
    remote_work: DataTypes.STRING,
    tech_company: DataTypes.STRING,
    benefits: DataTypes.STRING,
    care_options: DataTypes.STRING,
    wellness_program: DataTypes.STRING,
    seek_help: DataTypes.STRING,
    anonymity: DataTypes.STRING,
    leave: DataTypes.STRING,
    mental_health_consequence: DataTypes.STRING,
    phys_health_consequence: DataTypes.STRING,
    coworkers: DataTypes.STRING,
    supervisor: DataTypes.STRING,
    mental_health_interview: DataTypes.STRING,
    phys_health_interview: DataTypes.STRING,
    mental_vs_physical: DataTypes.STRING,
    obs_consequence: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Data;
};