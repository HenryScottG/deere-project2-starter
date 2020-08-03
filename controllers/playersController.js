const express = require('express');
const router = express.Router();

// add access to the fruit and user model tables
const PlayerModel = require('../models').Player;
const UserModel = require("../models").User;
// const TeamModel=require('../models').Team;

// New player
// router.get('/', (req,res)=> {
//     res.render('players/index.ejs');
// });


// signup route
router.post('/', (req, res)=>{
    PlayerModel.create(req.body).then(newPlayer=>{
    res.redirect(`players/profile/${newPlayer.id}`);
    });
});


// get all the players
router.get("/", (req, res) => {
    PlayerModel.findAll().then((players) => {
        console.log(players);
      res.render("players/index.ejs", {
        player: players,
      });
    });
  });


// SHOW ROUTE - GET ONE 
router.get("/:id", (req, res) => {
   PlayerModel.findByPk(req.params.id, {
      include: [
        {
          model: UserModel,
          attributes: ["name"],
        },
      ],
    }).then((player) => {
      res.render("show.ejs", {
        player: player,
      });
    });
  });
//  put the updated profile information on the profile page
router.put('/profile/:id', (req, res)=>{
    PlayerModel.update(req.body, {
        where: { id: req.params.id },
        returning: true,
        plain: true,
      }).then((updatedPlayer) => {
        res.redirect(`/players/profile/${req.params.id}`);
});
});

//delete one player
router.delete("/:id", (req, res) => {
    Player.destroy({ where: { id: req.params.id } }).then(() => {
      res.redirect("/players");
    });
  });



module.exports = router;