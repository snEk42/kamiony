/* eslint-disable max-len */
'use strict'

module.exports = (sequelize, DataTypes) => {
  const Team = sequelize.define('Team', {
    name: { type: DataTypes.STRING, allowNull: false, field: 'name' },
    number: { type: DataTypes.INTEGER, allowNull: true, field: 'number', unique: true },
    arrived: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false, field: 'arrived' },
    solvedProblemsOverride: { type: DataTypes.INTEGER, allowNull: true, field: 'solved_problems_override' },
  }, {
    tableName: 'Teams',
    timestamps: true,
  })

  Team.associate = models => {
    Team.hasMany(models.TeamSolutionChange, {
      as: 'solutionChanges',
      foreignKey: { name: 'teamId', field: 'team_id' },
      onDelete: 'RESTRICT',
    })
    Team.belongsTo(models.GameVenue, {
      as: 'gameVenue',
      foreignKey: { name: 'gameVenueId', field: 'game_venue_id' },
      onDelete: 'RESTRICT',
    })
    Team.belongsTo(models.GameVenueRoom, {
      as: 'gameVenueRoom',
      foreignKey: { name: 'gameVenueRoomId', field: 'game_venue_room_id' },
      onDelete: 'RESTRICT',
    })
    Team.hasMany(models.TeamSolution, {
      as: 'solutions',
      foreignKey: { name: 'teamId', field: 'team_id' },
      onDelete: 'RESTRICT',
    })
    Team.hasOne(models.TeamSolvedProblemCount, {
      as: 'solvedProblemCounts',
      foreignKey: { name: 'teamId', field: 'team_id' },
      onDelete: 'RESTRICT',
    })
    Team.hasMany(models.TeamAction, {
      as: 'actions',
      foreignKey: { name: 'teamId', field: 'team_id' },
      onDelete: 'RESTRICT',
    })
    Team.hasMany(models.TeamState, {
      as: 'teamState',
      foreignKey: { name: 'teamId', field: 'team_id' },
      onDelete: 'RESTRICT',
    })
  }

  return Team
}
