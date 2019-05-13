'use strict'

const Router = require('koa-router')
const { setGame } = require('../middleware/game')
const { authenticate } = require('../middleware/authentication')
const game = require('../controllers/game')
const problem = require('../controllers/problem')
const team = require('../controllers/team')

/* PUBLIC ROUTES */
const router = new Router()

router.get('/results', setGame, game.results)
router.get('/timer', setGame, game.timer)
router.get('/groups', setGame, game.groups)
router.put('/teams/:teamNumber/solutions', setGame, problem.updateTeamSolutions)

router.put('/init', authenticate, setGame, game.init)
router.get('/productions', authenticate, setGame, game.productions)
router.post('/teams/:teamId/actions', authenticate, setGame, team.performAction)
router.delete('/teams/:teamId/actions', authenticate, setGame, team.revertAction)
router.get('/teams/:teamId/history', authenticate, setGame, team.getHistory)

// Text Input Interface
router.get('/teams', authenticate, setGame, game.teams)
router.get('/teams/:teamId', authenticate, setGame, team.getTeamState)
router.post('/teams/:teamId/state', authenticate, setGame, team.changeTeamState)
router.delete('/teams/:teamId/state', authenticate, setGame, team.revertTeamState)

module.exports = router.routes()
