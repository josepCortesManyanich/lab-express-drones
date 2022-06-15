const express = require('express');
const router = express.Router();

// require the Drone model here
const Drone = require ('../models/Drone.model')

router.get('/drones', async (req, res, next) => {
  try{
    const newDrone = await Drone.find({})
    res.render('drones/list' , { newDrone })
  }
  catch(e){
    console.log(e)
    next(e)
  }

});

router.get('/drones/create', (req, res, next) => {
  res.render('drones/create-form')
});

router.post('/drones/create', async(req, res, next) => {
  
  try{
    const {name, propellers, maxSpeed} = req.body
    const propellersInt = parseInt(propellers);
    const speedInt = parseInt(maxSpeed);
    await Drone.create({ name, propellers: propellersInt, maxSpeed: speedInt })
    res.redirect('/drones/create')
  }
  catch(e){
    res.render('drones/create-form')
  }
});

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the dron
  // ... your code here
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
});

module.exports = router;
