const express = require("express");
const router = express.Router();

// add access to the fruit and user model tables
const UserModel = require("../models").User;
const PlayerModel = require('../models').Player;
const TeamModel=require('../models').Team;



// Working GET USERS PROFILE
router.get("/profile/:id", (req, res) => {
  UserModel.findByPk(req.params.id).then((userProfile) => {
    res.render("users/profile.ejs", {
      user: userProfile,
    });
  });
});
// //  WORKING put the updated profile information on the profile page
router.put('/profile/:id', (req, res)=>{
  UserModel.update(req.body, {where: {id: req.params.id } } )
  .then(users =>{
      res.redirect(`/users/profile/${req.params.id}`);
  });
});



// delete user
router.delete("/:id", (req, res) => {
  UserModel.destroy({ where: { id: req.params.id } }).then(() => {
    res.redirect("/users");
  });
});

module.exports = router;
