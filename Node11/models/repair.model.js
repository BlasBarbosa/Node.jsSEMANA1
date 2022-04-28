const { db } = require('../utils/database');

const { DataTypes } = require('sequelize');

const Repair = db.define('repair', {
  id: {
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    type: DataTypes.STRING,
  },
  date: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  status: {
    type: DataTypes.STRING,
    defaultValue: 'pending',
  },
  userid: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = { Repair };
