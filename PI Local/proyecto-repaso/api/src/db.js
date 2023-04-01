const { Sequelize } = require("sequelize");
const UserModel = require("./models/User");
const PostModel = require("./models/Post");
require("dotenv").config();

const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/repaso`,
  { logging: false }
);

UserModel(sequelize);
PostModel(sequelize);

const { User, Post } = sequelize.models;

User.hasMany(Post);
Post.belongsTo(User);

module.exports = { sequelize, ...sequelize.models };

// exportarla
