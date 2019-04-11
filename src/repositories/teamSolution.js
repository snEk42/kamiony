'use strict'

const db = require('./../database')
const parsers = require('./repositoryParsers')

async function createTeamSolutionChange(teamSolutionChange, dbTransaction) {
  const teamSolution = await db.TeamSolutionChange.create(
    teamSolutionChange,
    { transaction: dbTransaction },
  )
  return parsers.parseTeamSolution(teamSolution)
}

module.exports = {
  createTeamSolutionChange,
}
