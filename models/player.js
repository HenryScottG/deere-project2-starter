'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Player extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Player.belongsTo(models.Team, { foreignKey: 'teamId' })
      // Player.belongsToMany(models.Player, {
      //   through: '?',
      //   foreignKey: 'playerId',
      //   otherKey: '?'
      // });
    }
  };
  Player.init({
    name: DataTypes.STRING,
    team: DataTypes.STRING,
    position: DataTypes.STRING,
    points: DataTypes.INTEGER,
    teamId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Player',
  });
  return Player;
};