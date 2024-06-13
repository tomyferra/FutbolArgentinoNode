const express = require('express');
const router = express.Router();

const Team = require('../models/teams');

// Api home page
router.get('/', async (req,res) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE,OPTIONS');
  const teams = await Team.find().limit(5);
  res.json(teams);
  console.log("running....")

});

//Get single Team from DB
router.get('/:id', async (req,res) => {
  const teamfiltered = await Team.findById(req.params.id);
  res.json(teamfiltered);
  console.log("running....")

});

//Add new teams to the database
router.post('/', async (req,res) => {
  const { Name, Country, Logo, City, StadiumName, StadiumImg,StadiumCapacity, id} = req.body;
  const team = new Team({ Name, Country, Logo, City, StadiumName, StadiumImg,StadiumCapacity, id });
  await team.save();
  res.json({Status: "Team saved"});
});

//Update the team's data
router.put('/:id', async (req,res)=>{
  const { Name, Country, Logo, City, StadiumName, StadiumImg,StadiumCapacity, id } = req.body;
  const team = { Name, Country, Logo, City, StadiumName, StadiumImg,StadiumCapacity, id };
  await Team.findByIdAndUpdate(req.params.id, team);
  res.json({Status: 'Team updated'});
});

//Delete the team
router.delete('/:id', async (req,res)=>{
  await Team.findByIdAndDelete(req.params.id);
  res.json({Status: 'Team deleted'});
});

module.exports = router;