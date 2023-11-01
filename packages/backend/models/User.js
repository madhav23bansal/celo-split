// models/User.js
const { DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize");

const User = sequelize.define("User", {
  user_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  full_name: DataTypes.STRING,
  profile_picture_url: DataTypes.STRING,
});

module.exports = User;
