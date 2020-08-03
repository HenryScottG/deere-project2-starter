const express = require('express');
const router = express.Router();

// add access to the fruit and user model tables
const TeamModel=require('../models').Team;
const PlayerModel = require('../models').Player;
const UserModel = require("../models").User;


module.exports = router;